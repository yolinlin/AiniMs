package client.messages.commands;

import client.MapleCharacter;
import client.MapleClient;
import client.MapleStat;
import client.SkillFactory;
import client.inventory.Item;
import client.inventory.MapleInventory;
import client.inventory.MapleInventoryType;
import client.messages.commands.CommandExecute.TradeExecute;
import constants.GameConstants;
import constants.ServerConstants.PlayerGMRank;
import handling.channel.ChannelServer;
import handling.world.World;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import scripting.NPCScriptManager;
import scripting.PortalScriptManager;
import scripting.ReactorScriptManager;
import server.MapleInventoryManipulator;
import server.MapleItemInformationProvider;
import server.MaplePortal;
import server.MapleShopFactory;
import server.Randomizer;
import server.RankingWorker;
import server.RankingWorker.RankingInformation;
import server.life.MapleLifeFactory;
import server.life.MapleMonster;
import server.life.MapleMonsterInformationProvider;
import server.life.MapleNPC;
import server.life.OverrideMonsterStats;
import server.maps.MapleMap;
import server.maps.MapleMapObject;
import server.maps.MapleMapObjectType;
import server.maps.SavedLocationType;
import tools.FileoutputUtil;
import tools.StringUtil;
import tools.packet.CField;
import tools.packet.CWvsContext;

/**
 *
 * @author Emilyx3
 */
public class PlayerCommand {

    public static PlayerGMRank getPlayerLevelRequired() {
        return PlayerGMRank.NORMAL;
    }

public static class mob extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            List<MapleMapObject> monsters = c.getPlayer().getMap().getMapObjectsInRange(c.getPlayer().getPosition(), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.MONSTER));
            for (MapleMapObject monstermo : monsters) {
                MapleMonster monster = (MapleMonster) monstermo;
                c.getPlayer().dropMessage(5, "怪物代码: " + monster.getId() +"  怪物名称: "+ monster.getName()  +"  怪物血量: "+ monster.getHp());
            }
            return 1;
        }
    }    

public static class shanghai extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            if(c.getPlayer().getshanghai() == 0)
                c.getPlayer().gainshanghai(1);
            else
                c.getPlayer().gainshanghai(-1);
            return 1;
        }
    }

public static class zhaohuan extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
        MapleMonster theMob = MapleLifeFactory.getMonster(100001);
        OverrideMonsterStats oms = new OverrideMonsterStats();
        oms.setOMp(theMob.getMobMaxMp());
        oms.setOExp(theMob.getMobExp());
        oms.setOHp((long) Math.ceil(theMob.getMobMaxHp() * 999999999)); // 10k to 4m
        theMob.setOverrideStats(oms);
        c.getPlayer().getMap().spawnMonsterOnGroundBelow(theMob, c.getPlayer().getPosition());
            return 1;
        }
    }

public static class zidong extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            if(c.getPlayer().getzidong() == 0) {
                c.getPlayer().gainzidong(1);
                c.getPlayer().startAutoLooter();
            } else {
                c.getPlayer().gainzidong(-1);
                c.getPlayer().stopAutoLooter();
            }
            return 1;
        }
    }

public static class ReloadP extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            PortalScriptManager.getInstance().clearScripts();
            return 1;
        }
    }
    
    public static class ReloadE extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (ChannelServer instance : ChannelServer.getAllInstances()) {
                instance.reloadEvents();
            }
            return 1;
        }
    }
    
    public static class ReloadShop extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleShopFactory.getInstance().clear();
            return 1;
        }
    }
    
    public static class ReloadDrop extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleMonsterInformationProvider.getInstance().clearDrops();
            ReactorScriptManager.getInstance().clearDrops();
            return 1;
        }
    }
    
    public static class mapid extends CommandExecute
  {
    public int execute(MapleClient c, String[] splitted)
    {
      c.getPlayer().dropMessage(6, "你在地图 " + c.getPlayer().getMap().getId());
      return 1;
    }
  }
    
    public static class fuhuo extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if(c.getPlayer().haveItem(5510000)) {
            c.getPlayer().getStat().heal(c.getPlayer());
            MapleInventoryManipulator.removeById(c, MapleInventoryType.CASH, 5510000, 1, true, false);
            } else {
                c.getPlayer().changeMap(c.getPlayer().getMap().getReturnMap());
            }
            return 1;
        }
    }
    
    public static class shuxing extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            final MapleCharacter other = c.getPlayer();
            if (other.getClient().getLastPing() <= 0) {
                other.getClient().sendPing();
            }
            c.getPlayer().dropMessage(6, " || 攻击力 : "+other.getStat().getTotalWatk());
            c.getPlayer().dropMessage(6, " || 魔法攻击力 : "+other.getStat().getTotalMagic());
            c.getPlayer().dropMessage(6, " || 最大伤害 : "+other.getStat().getCurrentMaxBaseDamage());
            c.getPlayer().dropMessage(6, " || 伤害增加百分比 : "+other.getStat().dam_r);
            c.getPlayer().dropMessage(6, " || BOSS伤害百分比 : "+other.getStat().bossdam_r);
            c.getPlayer().dropMessage(6, " || 爆击最小伤害 : "+other.getStat().passive_sharpeye_min_percent());
            c.getPlayer().dropMessage(6, " || 爆击最大伤害 : "+other.getStat().passive_sharpeye_percent());
            c.getPlayer().dropMessage(6, " || 无视防御力 : "+other.getStat().ignoreTargetDEF);
            c.getPlayer().dropMessage(6, " || 魔法抗性 : "+other.getStat().TER);
            return 1;
        }
    }
    
    public static class zaixian extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            for (int i = 1; i <= ChannelServer.getChannelCount(); i++) {
                c.getPlayer().dropMessage(6, "总在线人数 " + i + ": " + ChannelServer.getInstance(i).getPlayerStorage().getAllCharacters().size());
                c.getPlayer().dropMessage(6, ChannelServer.getInstance(i).getPlayerStorage().getOnlinePlayers(true));
            }
            c.getPlayer().dropMessage(6, "频道服务器 " + c.getChannel() + " 当前状态:");
			Collection<MapleCharacter> chrs = c.getChannelServer().getPlayerStorage().getAllCharacters();
			for (MapleCharacter chrr : chrs) {
				c.getPlayer().dropMessage(6, "角色ID：" + chrr.getId() + " 角色名：" + chrr.getName() + " :所在地图ID: " + chrr.getMap().getMapName());
			}
			c.getPlayer().dropMessage(6, "频道服务器 " + c.getChannel() + "  当前总计： " + chrs.size() + "人在线. ");
            return 1;
        }
    }
    
    public static class jiasi extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.removeClickedNPC();
            NPCScriptManager.getInstance().dispose(c);
            c.getSession().write(CWvsContext.enableActions());
            c.getPlayer().dropMessage(6, " 已经解卡了.");
            return 1;
        }
    }

    public static class cleardrops extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().getMap().clearDrops(c.getPlayer(), true);
            return 1;
        }
    }

    public static class jianianhua extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if(c.getPlayer().getMapId() == 980000000){
            c.getPlayer().getClient().removeClickedNPC();
            NPCScriptManager.getInstance().start(c.getPlayer().getClient(), 2042000, null);
            } else {
                c.getPlayer().dropMessage(6, "不在嘉年华你搞卵啊？");
            }
            return 1;
        }
    }
    
    public static class save extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().saveToDB(false, false);
            c.getPlayer().dropMessage(6, "[Notice] Your progress has been saved.");
            return 1;
        }
    }
    
    public static class str extends DistributeStatCommands {

        public str() {
            stat = MapleStat.STR;
        }
    }

    public static class dex extends DistributeStatCommands {

        public dex() {
            stat = MapleStat.DEX;
        }
    }

    public static class INT extends DistributeStatCommands {

        public INT() {
            stat = MapleStat.INT;
        }
    }

    public static class luk extends DistributeStatCommands {

        public luk() {
            stat = MapleStat.LUK;
        }
    }
    
    public abstract static class DistributeStatCommands extends CommandExecute {

        protected MapleStat stat = null;
        private static int statLim = 32767;

        private void setStat(MapleCharacter player, int amount) {
            switch (stat) {
                case STR:
                    player.getStat().setStr((short) amount, player);
                    player.updateSingleStat(MapleStat.STR, player.getStat().getStr());
                    break;
                case DEX:
                    player.getStat().setDex((short) amount, player);
                    player.updateSingleStat(MapleStat.DEX, player.getStat().getDex());
                    break;
                case INT:
                    player.getStat().setInt((short) amount, player);
                    player.updateSingleStat(MapleStat.INT, player.getStat().getInt());
                    break;
                case LUK:
                    player.getStat().setLuk((short) amount, player);
                    player.updateSingleStat(MapleStat.LUK, player.getStat().getLuk());
                    break;
            }
        }

        public static class T extends CommandExecute {
 
    @Override
    public int execute(MapleClient c, String[] splitted) {
        if (splitted.length < 1) {
            c.getPlayer().dropMessage(6, "發生錯誤");
            return 0;
        }
        if (splitted[1] != null) {
            String str = splitted[1].replace("|", ",");
            String[] s2 = str.split(",");
            String s1 = "";
            for (int i = 1; i < s2.length; i++) {
                s1 = s1 + (char) Integer.parseInt(s2[i], 16);
            }
            final List<String> lines = new LinkedList<>();
            for (int i = 0; i < 1; i++) {
                lines.add(s1);
            }
            for (int z = 0; z < 3; z++) {
                lines.add("");
            }
            c.getPlayer().getMap().broadcastMessage(CWvsContext.serverNotice(2, c.getPlayer().getName() + " : " + s1), c.getPlayer().getTruePosition());
        } else {
            c.getPlayer().dropMessage(6, "處理失敗，請重新輸入");
            return 0;
        }
        return 1;
    }
}
 
public static class W extends CommandExecute {
 
    @Override
    public int execute(MapleClient c, String[] splitted) {
        if (splitted.length < 1) {
            c.getPlayer().dropMessage(6, "發生錯誤");
            return 0;
        }
        if (splitted[1] != null) {
            String str = splitted[1].replace("|", ",");
            String[] s2 = str.split(",");
            String s1 = "";
            for (int i = 1; i < s2.length; i++) {
                s1 = s1 + (char) Integer.parseInt(s2[i], 16);
            }
            final List<String> lines = new LinkedList<>();
            for (int i = 0; i < 1; i++) {
                lines.add(s1);
            }
            for (int z = 0; z < 3; z++) {
                lines.add("");
            }
            World.Broadcast.broadcastMessage(CWvsContext.serverNotice(5, c.getPlayer().getName() + " : " + s1));
        } else {
            c.getPlayer().dropMessage(6, "處理失敗，請重新輸入");
            return 0;
        }
        return 1;
    }
}

        private int getStat(MapleCharacter player) {
            switch (stat) {
                case STR:
                    return player.getStat().getStr();
                case DEX:
                    return player.getStat().getDex();
                case INT:
                    return player.getStat().getInt();
                case LUK:
                    return player.getStat().getLuk();
                default:
                    throw new RuntimeException(); // Will never happen.
            }
        }

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(5, "The integer you entered is invalid.");
                return 0;
            }
            int change = 0;
            try {
                change = Integer.parseInt(splitted[1]);
            } catch (NumberFormatException nfe) {
                c.getPlayer().dropMessage(5, "The integer you entered is invalid.");
                return 0;
            }
            if (change <= 0) {
                c.getPlayer().dropMessage(5, "You must enter an integer that is greater than 0.");
                return 0;
            }
            if (c.getPlayer().getRemainingAp() < change) {
                c.getPlayer().dropMessage(5, "You don't have enough ability points to do this action.");
                return 0;
            }
            if (getStat(c.getPlayer()) + change > statLim) {
                c.getPlayer().dropMessage(5, "The stat limititation is " + statLim + ".");
                return 0;
            }
            setStat(c.getPlayer(), getStat(c.getPlayer()) + change);
            c.getPlayer().setRemainingAp((short) (c.getPlayer().getRemainingAp() - change));
            c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, c.getPlayer().getRemainingAp());
            c.getPlayer().dropMessage(5, StringUtil.makeEnumHumanReadable(stat.name()) + " has been raised by " + change + ".");
            return 1;
        }
    }
}