importPackage(java.util);
importPackage(Packages.client);
importPackage(Packages.tools);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
importPackage(Packages.handling.world);
importPackage(Packages.client.inventory);
 var status;
 
 function start() {
 	status = -1;
 	action(1, 0, 0);
 }
 
 function action(mode, type, selection) {
 	if (mode == -1) {
 		cm.dispose();
 	} else {
 		if (mode == 0 && status == 0) {
 			cm.dispose();
 			return;
 		}
 		if (mode == 1)
 			status++;
 		else
 			status--;
 		if (status == 0) {
			cm.sendYesNo("你想把装备初始化吗？请把你需要初始化的装备放在第一格！注意：我可以使用#v5064200#免费重置，初始化后的属性是随机，可能出极品，可能是垃圾，但是强化数值和潜能全部失效！请三思而后行！");
		}
		if (status == 1) {
    if (cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1) == null){
cm.sendOk("请把你需要初始化的装备放入背包第一格！");
					cm.dispose();
} else if (cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() > -1){
cm.sendOk("对不起，有时限的装备无法被初始化!");
					cm.dispose();
}   else {
    var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
    var need = item1.getLevel();
    if (need == 0) {
    need = 1;
    } else {
    }
    cm.sendNext("#b您当前装备#v"+itemId1+"#的强化次数为：#k#r("+item1.getLevel()+"次)#k\r\n\r\n本次初始化，需要#v5064200# * ："+need+"\r\n");
		}
		}
    if (status == 2) {
var ii = MapleItemInformationProvider.getInstance();
        var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
    var need = item1.getLevel();
    if (need == 0) {
    need = 1;
    } else {
    }
    var toDrop = ii.randomizeStats(ii.getEquipById(itemId1));
if (!cm.haveItem(5064200,need)) {
	cm.sendOk("#b您的#v5064200#不足!#k初始化需要#b  "+need+" * #v5064200#");
					cm.dispose();
} else {
  Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
  Packages.server.MapleInventoryManipulator.addFromDrop(cm.getPlayer().getClient(), toDrop, true, false);
  cm.gainItem(5064200, -need);
  World.Broadcast.broadcastSmega(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " :  用"+ need +"个完美还原卷轴重置了属性！",true,cm.getClient().getChannel(),toDrop));
  cm.dispose();
  }
  }
	}
}