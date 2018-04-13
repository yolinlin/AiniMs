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
			cm.sendYesNo("你想把装备初始化吗？请把你需要初始化的装备放在第一格！注意：初始化装备是非常昂贵的，初始化后的属性是固定的！请三思而后行！");
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
if (level <= 1){
if (item1.getLevel() == 0)
var needap = 1000 * 50;
else
var needap = 1000 * (item1.getLevel()+1) * 50;
}else {
if (item1.getLevel() == 0)
var needap = level * 356 * 50;
else
var needap = level * 356 * (item1.getLevel()+1) * 50;
}
    cm.sendNext("#b您当前装备#v"+itemId1+"#的强化次数为：#k#r("+item1.getLevel()+"次)#k\r\n\r\n本次初始化，需要金币："+needap+"\r\n");
		}
		}
    if (status == 2) {
var ii = MapleItemInformationProvider.getInstance();
        var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
if (level <= 1){
if (item1.getLevel() == 0)
var needap = 1000 * 50;
else
var needap = 1000 * (item1.getLevel()+1) * 50;
}else {
if (item1.getLevel() == 0)
var needap = level * 356 * 50;
else
var needap = level * 356 * (item1.getLevel()+1) * 50;
}
var toDrop = ii.randomizeStats(ii.getEquipById(itemId1));
var needap = needap;
    if (cm.getMeso() < needap) {
		      cm.sendOk("#b您的余额不足!#k初始化需要#b  "+needap+"金币！");
					cm.dispose();
} else {
  Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
  Packages.server.MapleInventoryManipulator.addFromDrop(cm.getPlayer().getClient(), toDrop, true, false);
  cm.gainMeso(-needap);
  World.Broadcast.broadcastSmega(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " :  用"+needap+"金币重置了属性！",true,cm.getClient().getChannel(),toDrop));
  cm.dispose();
  }
  }
	}
}