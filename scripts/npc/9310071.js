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
			cm.sendYesNo("�����װ����ʼ�����������Ҫ��ʼ����װ�����ڵ�һ��ע�⣺��ʼ��װ���Ƿǳ�����ģ���ʼ����������ǹ̶��ģ�����˼�����У�");
		}
		if (status == 1) {
    if (cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1) == null){
cm.sendOk("�������Ҫ��ʼ����װ�����뱳����һ��");
					cm.dispose();
} else if (cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() > -1){
cm.sendOk("�Բ�����ʱ�޵�װ���޷�����ʼ��!");
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
    cm.sendNext("#b����ǰװ��#v"+itemId1+"#��ǿ������Ϊ��#k#r("+item1.getLevel()+"��)#k\r\n\r\n���γ�ʼ������Ҫ��ң�"+needap+"\r\n");
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
		      cm.sendOk("#b��������!#k��ʼ����Ҫ#b  "+needap+"��ң�");
					cm.dispose();
} else {
  Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
  Packages.server.MapleInventoryManipulator.addFromDrop(cm.getPlayer().getClient(), toDrop, true, false);
  cm.gainMeso(-needap);
  World.Broadcast.broadcastSmega(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " :  ��"+needap+"������������ԣ�",true,cm.getClient().getChannel(),toDrop));
  cm.dispose();
  }
  }
	}
}