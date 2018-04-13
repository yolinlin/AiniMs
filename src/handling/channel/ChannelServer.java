/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc>
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package handling.channel;

import client.MapleCharacter;
import constants.WorldConstants.Servers;
import handling.MapleServerHandler;
import handling.login.LoginServer;
import handling.mina.MapleCodecFactory;
import handling.world.CheaterData;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.charset.Charset;
import java.util.*;
import java.util.Map.Entry;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import org.apache.mina.common.ByteBuffer;
import org.apache.mina.common.IoAcceptor;
import org.apache.mina.common.SimpleByteBufferAllocator;
import org.apache.mina.filter.codec.ProtocolCodecFilter;
import org.apache.mina.transport.socket.nio.SocketAcceptor;
import org.apache.mina.transport.socket.nio.SocketAcceptorConfig;
import scripting.EventScriptManager;
import server.MapleSquad;
import server.MapleSquad.MapleSquadType;
import server.ServerProperties;
import server.Timer.WorldTimer;
import server.events.*;
import server.life.PlayerNPC;
import server.maps.AramiaFireWorks;
import server.maps.MapleMapFactory;
import server.maps.MapleMapObject;
import server.shops.HiredMerchant;
import tools.ConcurrentEnumMap;
import tools.packet.CWvsContext;

public class ChannelServer {

    public static long serverStartTime;
    private int cashRate = 1, traitRate = 1, BossDropRate = 1;
    private short port = 7575;
    private static final short DEFAULT_PORT = 7574;
    private int channel, running_MerchantID = 0, flags = 0;
    private String serverMessage, ip, serverName;
    private boolean shutdown = false, finishedShutdown = false, MegaphoneMuteState = false, adminOnly = false;
    private PlayerStorage players;
    private IoAcceptor acceptor;
    private final MapleMapFactory mapFactory;
    private EventScriptManager eventSM;
    private AramiaFireWorks works = new AramiaFireWorks();
    private static final Map<Integer, ChannelServer> instances = new HashMap<Integer, ChannelServer>();
    private final Map<MapleSquadType, MapleSquad> mapleSquads = new ConcurrentEnumMap<MapleSquadType, MapleSquad>(MapleSquadType.class);
    private final Map<Integer, HiredMerchant> merchants = new HashMap<Integer, HiredMerchant>();
    private final List<PlayerNPC> playerNPCs = new LinkedList<PlayerNPC>();
    private final ReentrantReadWriteLock merchLock = new ReentrantReadWriteLock(); //merchant
    private int eventmap = -1;
    private final Map<MapleEventType, MapleEvent> events = new EnumMap<MapleEventType, MapleEvent>(MapleEventType.class);
    public boolean eventOn = false;
    public int eventMap = 0;
    private boolean eventWarp;
    private String eventHost;
    private String eventName;
    //Custom Race:
    private boolean hasWaitingStarted = false;
    private boolean race = false;
    private int competitors = 0;
    private int waitingTime;
    //End of Custom Race
    private int mesoRate;
    private int dropRate;

    private ChannelServer(final int channel) {
        this.channel = channel;
        mapFactory = new MapleMapFactory(channel);
    }

    public static Set<Integer> getAllInstance() {
        return new HashSet<Integer>(instances.keySet());
    }

    public final void loadEvents() {
        if (events.size() != 0) {
            return;
        }
        events.put(MapleEventType.CokePlay, new MapleCoconut(channel, MapleEventType.CokePlay)); // Yep, coconut. same shit
        events.put(MapleEventType.Coconut, new MapleCoconut(channel, MapleEventType.Coconut));
        events.put(MapleEventType.Fitness, new MapleFitness(channel, MapleEventType.Fitness));
        events.put(MapleEventType.OlaOla, new MapleOla(channel, MapleEventType.OlaOla));
        events.put(MapleEventType.OxQuiz, new MapleOxQuiz(channel, MapleEventType.OxQuiz));
        events.put(MapleEventType.Snowball, new MapleSnowball(channel, MapleEventType.Snowball));
        events.put(MapleEventType.Survival, new MapleSurvival(channel, MapleEventType.Survival));
    }

    public final void run_startup_configurations() {
        setChannel(channel); // instances.put
        try {
            serverMessage = ServerProperties.getProperty("serverMessage");
            serverName = ServerProperties.getProperty("serverName");
            flags = Integer.parseInt(ServerProperties.getProperty("flags", "0"));
            adminOnly = Boolean.parseBoolean(ServerProperties.getProperty("admin", "false"));
            eventSM = new EventScriptManager(this, ServerProperties.getProperty("events").split(","));
            port = Short.parseShort(ServerProperties.getProperty("port" + channel, String.valueOf(DEFAULT_PORT + channel)));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        ip = ServerProperties.getProperty("interface") + ":" + port;

        ByteBuffer.setUseDirectBuffers(false);
        ByteBuffer.setAllocator(new SimpleByteBufferAllocator());

        acceptor = new SocketAcceptor();
        final SocketAcceptorConfig acceptor_config = new SocketAcceptorConfig();
        acceptor_config.getSessionConfig().setTcpNoDelay(true);
        acceptor_config.setDisconnectOnUnbind(true);
        acceptor_config.getFilterChain().addLast("codec", new ProtocolCodecFilter(new MapleCodecFactory()));
        players = new PlayerStorage(channel);
        loadEvents();

        try {
            acceptor.bind(new InetSocketAddress(port), new MapleServerHandler(), acceptor_config);
            System.out.println("·频道服务器信息‖频道：" + channel + " ‖开放端口为：" + port + ".");
            eventSM.init();
        } catch (IOException e) {
            System.out.println("·频道服务器信息‖频道：" + port + " ‖端口：" + getChannel() + ") ‖启动失败..." + e);
        }
    }

    public final void shutdown() {
        if (finishedShutdown) {
            return;
        }
        broadcastPacket(CWvsContext.serverNotice(0, "·频道服务器信息‖这个频道已经关闭..."));
        // Disconnect all clients by hand so we get sessionClosed...
        shutdown = true;

        System.out.println("·频道服务器信息‖频道：" + channel + "‖正在保存所有角色数据...");

        getPlayerStorage().disconnectAll();

        System.out.println("·频道服务器信息‖频道：" + channel + "‖正在关闭...");

        // Temporary while we dont have !addchannel
        instances.remove(channel);
        setFinishShutdown();
    }

    public final boolean hasFinishedShutdown() {
        return finishedShutdown;
    }

    public void SaveAll() {
        for (MapleCharacter chr : players.getAllCharacters()) {
                chr.saveToDB(true, true);
        }
}    
    
   public void SpeakAll(String message) {
     for (ChannelServer cserv : ChannelServer.getAllInstances()) {
       for (MapleCharacter mch : cserv.getPlayerStorage().getAllCharacters()) {
                mch.dropMessage(-1,message);
            }
      
     }
}
public final void ChannelBroadcastMSG(final int type, final String message){
        broadcastMessage(CWvsContext.serverNotice(type, message));
}    
    
    public final MapleMapFactory getMapFactory() {
        return mapFactory;
    }

    public static final ChannelServer newInstance(final int channel) {
        return new ChannelServer(channel);
    }

    public static final ChannelServer getInstance(final int channel) {
        return instances.get(channel);
    }

    public final void addPlayer(final MapleCharacter chr) {
        getPlayerStorage().registerPlayer(chr);
    }

    public final PlayerStorage getPlayerStorage() {
        if (players == null) { // Wth
            players = new PlayerStorage(channel); // Wthhhh
        }
        return players;
    }

    public final void removePlayer(final MapleCharacter chr) {
        getPlayerStorage().deregisterPlayer(chr);

    }

    public final void removePlayer(final int idz, final String namez) {
        getPlayerStorage().deregisterPlayer(idz, namez);

    }

    public final String getServerMessage() {
        return serverMessage;
    }

    public final void setServerMessage(final String newMessage) {
        serverMessage = newMessage;
        broadcastPacket(CWvsContext.serverMessage(serverMessage));
    }

    public final void broadcastPacket(final byte[] data) {
        getPlayerStorage().broadcastPacket(data);
    }

    public final void broadcastSmegaPacket(final byte[] data) {
        getPlayerStorage().broadcastSmegaPacket(data);
    }

    public final void broadcastGMPacket(final byte[] data) {
        getPlayerStorage().broadcastGMPacket(data);
    }

    public final int getExpRate(int world) {
        return Servers.getById(world).getExp();
    }

    public final int getCashRate() {
        return cashRate;
    }

    public final int getChannel() {
        return channel;
    }

    public final void setChannel(final int channel) {
        instances.put(channel, this);
        LoginServer.addChannel(channel);
    }

    public static final ArrayList<ChannelServer> getAllInstances() {
        return new ArrayList<ChannelServer>(instances.values());
    }

    public final String getIP() {
        return ip;
    }

    public final boolean isShutdown() {
        return shutdown;
    }

    public final int getLoadedMaps() {
        return mapFactory.getLoadedMaps();
    }

    public final EventScriptManager getEventSM() {
        return eventSM;
    }

    public final void reloadEvents() {
        eventSM.cancel();
        eventSM = new EventScriptManager(this, ServerProperties.getProperty("events").split(","));
        eventSM.init();
    }

    public final int getMesoRate(int world) {
        return Servers.getById(world).getMeso();
    }

    public final int getDropRate(int world) {
        return Servers.getById(world).getDrop();
    }

    public final int getBossDropRate() {
        return BossDropRate;
    }

    public static final void startChannel_Main() {
        serverStartTime = System.currentTimeMillis();

        for (int i = 0; i < Integer.parseInt(ServerProperties.getProperty("count", "0")); i++) {
            newInstance(i + 1).run_startup_configurations();
        }
    }

    public Map<MapleSquadType, MapleSquad> getAllSquads() {
        return Collections.unmodifiableMap(mapleSquads);
    }

    public final MapleSquad getMapleSquad(final String type) {
        return getMapleSquad(MapleSquadType.valueOf(type.toLowerCase()));
    }

    public final MapleSquad getMapleSquad(final MapleSquadType type) {
        return mapleSquads.get(type);
    }

    public final boolean addMapleSquad(final MapleSquad squad, final String type) {
        final MapleSquadType types = MapleSquadType.valueOf(type.toLowerCase());
        if (types != null && !mapleSquads.containsKey(types)) {
            mapleSquads.put(types, squad);
            squad.scheduleRemoval();
            return true;
        }
        return false;
    }

    public final boolean removeMapleSquad(final MapleSquadType types) {
        if (types != null && mapleSquads.containsKey(types)) {
            mapleSquads.remove(types);
            return true;
        }
        return false;
    }

    public final int closeAllMerchant() {
        int ret = 0;
        merchLock.writeLock().lock();
        try {
            final Iterator<Entry<Integer, HiredMerchant>> merchants_ = merchants.entrySet().iterator();
            while (merchants_.hasNext()) {
                HiredMerchant hm = merchants_.next().getValue();
                hm.closeShop(true, false);
                //HiredMerchantSave.QueueShopForSave(hm);
                hm.getMap().removeMapObject(hm);
                merchants_.remove();
                ret++;
            }
        } finally {
            merchLock.writeLock().unlock();
        }
        // Hacky
        for (int i = 910000001; i <= 910000022; i++) {
            for (MapleMapObject mmo : mapFactory.getMap(i).getAllHiredMerchantsThreadsafe()) {
                ((HiredMerchant) mmo).closeShop(true, false);
                //HiredMerchantSave.QueueShopForSave((HiredMerchant) mmo);
                ret++;
            }
        }
        return ret;
    }

    public final int addMerchant(final HiredMerchant hMerchant) {
        merchLock.writeLock().lock();
        try {
            running_MerchantID++;
            merchants.put(running_MerchantID, hMerchant);
            return running_MerchantID;
        } finally {
            merchLock.writeLock().unlock();
        }
    }

    public final void removeMerchant(final HiredMerchant hMerchant) {
        merchLock.writeLock().lock();

        try {
            merchants.remove(hMerchant.getStoreId());
        } finally {
            merchLock.writeLock().unlock();
        }
    }

    public final boolean containsMerchant(final int accid, int cid) {
        boolean contains = false;

        merchLock.readLock().lock();
        try {
            final Iterator itr = merchants.values().iterator();

            while (itr.hasNext()) {
                HiredMerchant hm = (HiredMerchant) itr.next();
                if (hm.getOwnerAccId() == accid || hm.getOwnerId() == cid) {
                    contains = true;
                    break;
                }
            }
        } finally {
            merchLock.readLock().unlock();
        }
        return contains;
    }

    public final List<HiredMerchant> searchMerchant(final int itemSearch) {
        final List<HiredMerchant> list = new LinkedList<HiredMerchant>();
        merchLock.readLock().lock();
        try {
            final Iterator itr = merchants.values().iterator();

            while (itr.hasNext()) {
                HiredMerchant hm = (HiredMerchant) itr.next();
                if (hm.searchItem(itemSearch).size() > 0) {
                    list.add(hm);
                }
            }
        } finally {
            merchLock.readLock().unlock();
        }
        return list;
    }

    public final void toggleMegaphoneMuteState() {
        this.MegaphoneMuteState = !this.MegaphoneMuteState;
    }

    public final boolean getMegaphoneMuteState() {
        return MegaphoneMuteState;
    }

    public int getEvent() {
        return eventmap;
    }

    public final void setEvent(final int ze) {
        this.eventmap = ze;
    }

    public MapleEvent getEvent(final MapleEventType t) {
        return events.get(t);
    }

    public final Collection<PlayerNPC> getAllPlayerNPC() {
        return playerNPCs;
    }

    public final void addPlayerNPC(final PlayerNPC npc) {
        if (playerNPCs.contains(npc)) {
            return;
        }
        playerNPCs.add(npc);
        getMapFactory().getMap(npc.getMapId()).addMapObject(npc);
    }

    public final void removePlayerNPC(final PlayerNPC npc) {
        if (playerNPCs.contains(npc)) {
            playerNPCs.remove(npc);
            getMapFactory().getMap(npc.getMapId()).removeMapObject(npc);
        }
    }

    public final String getServerName() {
        return serverName;
    }

    public final void setServerName(final String sn) {
        this.serverName = sn;
    }

    public final String getTrueServerName() {
        return serverName.substring(0, getlength(serverName) - 2);
    }

public static final int getlength(final String str) {
        byte[] bt = str.getBytes(Charset.forName("GBK"));
        return bt.length;
}   
    
    public final int getPort() {
        return port;
    }

    public static final Set<Integer> getChannelServer() {
        return new HashSet<Integer>(instances.keySet());
    }

    public final void setShutdown() {
        this.shutdown = true;
        System.out.println("·频道服务器信息‖频道：" + channel + "  ‖正在关闭 〉〉关闭雇佣商人......");
    }

    public final void setFinishShutdown() {
        this.finishedShutdown = true;
        System.out.println("·频道服务器信息‖频道：" + channel + " ‖已经关闭...");
    }

    public final boolean isAdminOnly() {
        return adminOnly;
    }

    public final static int getChannelCount() {
        return instances.size();
    }

    public final int getTempFlag() {
        return flags;
    }

    public static Map<Integer, Integer> getChannelLoad() {
        Map<Integer, Integer> ret = new HashMap<Integer, Integer>();
        for (ChannelServer cs : instances.values()) {
            ret.put(cs.getChannel(), cs.getConnectedClients());
        }
        return ret;
    }

    public int getConnectedClients() {
        return getPlayerStorage().getConnectedClients();
    }

    public List<CheaterData> getCheaters() {
        List<CheaterData> cheaters = getPlayerStorage().getCheaters();

        Collections.sort(cheaters);
        return cheaters;
    }

    public List<CheaterData> getReports() {
        List<CheaterData> cheaters = getPlayerStorage().getReports();

        Collections.sort(cheaters);
        return cheaters;
    }

    public void broadcastMessage(byte[] message) {
        broadcastPacket(message);
    }

    public void broadcastSmega(byte[] message) {
        broadcastSmegaPacket(message);
    }

    public void broadcastGMMessage(byte[] message) {
        broadcastGMPacket(message);
    }

    public AramiaFireWorks getFireWorks() {
        return works;
    }

    public int getTraitRate() {
        return traitRate;
    }

    // Custom Race:
    public int getWaitingTime() {
        return waitingTime;
    }

    public void setWaitingTime(int set) {
        this.waitingTime = set;
    }

    public void raceCountdown() {
        WorldTimer.getInstance().schedule(new Runnable() {
            public void run() {
                if (getWaiting() && getWaitingTime() > 1) {
                    setWaitingTime(getWaitingTime() - 1);
                    if (getWaitingTime() > 1) {
                        try {
                            broadcastMessage(CWvsContext.serverNotice(6, "[Event] The Great Victoria Island Race will start in " + getWaitingTime() + " minutes! There are " + getCompetitors() + " players in the race."));
                        } catch (Exception e) {
                            throw new RuntimeException(e);
                        }
                    } else {
                        try {
                            broadcastMessage(CWvsContext.serverNotice(6, "[Event] The Great Victoria Island Race will start in " + getWaitingTime() + " minute! There are " + getCompetitors() + " players in the race."));
                        } catch (Exception e) {
                            throw new RuntimeException(e);
                        }
                    }
                    raceCountdown();
                } else if (getWaiting() && getWaitingTime() <= 1) {
                    setRace(true);
                    setWaiting(false);
                    try {
                        broadcastMessage(CWvsContext.serverNotice(6, "[Event] The Great Victoria Island Race has begun! Race all the way around Victoria Island going East, to win!"));
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }
                }
            }
        }, 1 * 60 * 1000);
    }

    public boolean getRace() {
        return race;
    }

    public void setRace(boolean set) {
        this.race = set;
    }

    public boolean getWaiting() {
        return hasWaitingStarted;
    }

    public void setWaiting(boolean set) {
        this.hasWaitingStarted = set;
    }

    public int getCompetitors() {
        return competitors;
    }

    public final int getDropRate() {
        return dropRate;      
    }
    
    public final int getMesoRate() {
        return mesoRate;
    }
    
    public void setCompetitors(int set) {
        this.competitors = set;
    }
    // End of Custom Race
}