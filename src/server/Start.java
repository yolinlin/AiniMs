package server;

import client.SkillFactory;
import client.inventory.MapleInventoryIdentifier;
import constants.ServerConstants;
import constants.WorldConstants;
import constants.WorldConstants.Servers;
import constants.WorldConstants.TespiaServers;
import database.DatabaseConnection;
import handling.MapleServerHandler;
import handling.cashshop.CashShopServer;
import handling.channel.ChannelServer;
import handling.channel.MapleGuildRanking;
import handling.login.LoginInformationProvider;
import handling.login.LoginServer;
import handling.world.World;
import handling.world.family.MapleFamily;
import handling.world.guild.MapleGuild;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.concurrent.atomic.AtomicInteger;
import server.Timer.BuffTimer;
import server.Timer.CloneTimer;
import server.Timer.EtcTimer;
import server.Timer.EventTimer;
import server.Timer.MapTimer;
import server.Timer.PingTimer;
import server.Timer.WorldTimer;
import server.events.MapleOxQuizFactory;
import server.life.MapleLifeFactory;
import server.life.MapleMonsterInformationProvider;
import server.life.MobSkillFactory;
import server.life.PlayerNPC;
import server.maps.MapleMapFactory;
import server.quest.MapleQuest;
import tools.MapleAESOFB;

public class Start {

    public static long startTime = System.currentTimeMillis();
    public static final Start instance = new Start();
    public static AtomicInteger CompletedLoadingThreads = new AtomicInteger(0);

    public void run() throws InterruptedException {

        if (Boolean.parseBoolean(ServerProperties.getProperty("net.sf.odinms.world.admin")) || ServerConstants.Use_Localhost) {
            System.out.println("·游戏服务‖信息  激活管理员模式[任何玩家将无法登陆]");
        }

        try {
            final PreparedStatement ps = DatabaseConnection.getConnection().prepareStatement("UPDATE accounts SET loggedin = 0");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException ex) {
            throw new RuntimeException("·游戏服务‖信息  清除所有在线玩家.");
        }

        System.out.println("                               [Global MapleStory]");
        World.init();
        System.out.println("  ");
        if (Boolean.parseBoolean(ServerProperties.getProperty("logpackets"))) {
        System.out.println("°游戏服务器控制台提示：显示封包日志");
        }        
        System.out.println("°游戏服务器名称   " + "『" + ServerProperties.getProperty("serverName") + "』");     
        System.out.println("°游戏版本  MapleStory Ver." + ServerConstants.MAPLE_VERSION +"." + ServerConstants.MAPLE_PATCH); 
        System.out.println("°经验倍率  " + WorldConstants.Servers.Scania.getExp() + " 倍");
        System.out.println("°金币倍率  " + WorldConstants.Servers.Scania.getMeso() + " 倍"); 
        System.out.println("°游戏暴率  " + WorldConstants.Servers.Scania.getDrop() + " 倍"); 
        System.out.println("                                                                 " + ServerConstants.SOURCE_REVISION);
        System.out.println("   "); 
        System.out.println("        ★★★★★★★★★   Starting The Server   ★★★★★★★★★        "); 
        System.out.println("              ☆☆☆☆☆☆☆☆☆   请耐心等待 ☆☆☆☆☆☆☆☆☆              "); 
        System.out.println("   "); 
        System.out.println("   "); 
        WorldTimer.getInstance().start();
        EtcTimer.getInstance().start();
        MapTimer.getInstance().start();
        CloneTimer.getInstance().start();
        EventTimer.getInstance().start();
        BuffTimer.getInstance().start();
        PingTimer.getInstance().start();
        MapleGuildRanking.getInstance().load();
        MapleGuild.loadAll();
        MapleFamily.loadAll();
        MapleLifeFactory.loadQuestCounts();
        MapleQuest.initQuests();
        MapleItemInformationProvider.getInstance().runEtc();
        MapleMonsterInformationProvider.getInstance().load();
        MapleItemInformationProvider.getInstance().runItems();
        SkillFactory.load();
        LoginInformationProvider.getInstance();
        RandomRewards.load();
        MapleOxQuizFactory.getInstance();
        MapleCarnivalFactory.getInstance();
        CharacterCardFactory.getInstance().initialize();
        MobSkillFactory.getInstance();
        SpeedRunner.loadSpeedRuns();
        MTSStorage.load();
        MapleInventoryIdentifier.getInstance();
        MapleMapFactory.loadCustomLife();
        Connection con = DatabaseConnection.getConnection();
        PreparedStatement ps;
        try {
            ps = con.prepareStatement("DELETE FROM `moonlightachievements` where achievementid > 0;");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException ex) {
        }
        CashItemFactory.getInstance().initialize();
        MapleServerHandler.initiate();
        LoginServer.run_startup_configurations();
        ChannelServer.startChannel_Main();
        CashShopServer.run_startup_configurations();
        Runtime.getRuntime().addShutdownHook(new Thread(new Shutdown()));
        World.registerRespawn();
        ShutdownServer.registerMBean();
        PlayerNPC.loadAll();
        MapleMonsterInformationProvider.getInstance().addExtra();
        LoginServer.setOn();
        RankingWorker.run();
        System.out.println("·游戏服务器加载完毕‖共耗时：" + ((System.currentTimeMillis() - startTime) / 1000) + " 秒                        OK！我要开始冒险了");
        System.out.println("   ");  
    }

    public static class Shutdown implements Runnable {

        @Override
        public void run() {
            ShutdownServer.getInstance().run();
            ShutdownServer.getInstance().run();
        }
    }

    public static void main(final String args[]) throws InterruptedException {
        instance.run();
    }
}