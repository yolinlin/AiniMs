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
			cm.sendYesNo("�����װ����ʼ�����������Ҫ��ʼ����װ�����ڵ�һ��ע�⣺�ҿ���ʹ��#v5064200#������ã���ʼ�������������������ܳ���Ʒ������������������ǿ����ֵ��Ǳ��ȫ��ʧЧ������˼�����У�");
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
    var need = item1.getLevel();
    if (need == 0) {
    need = 1;
    } else {
    }
    cm.sendNext("#b����ǰװ��#v"+itemId1+"#��ǿ������Ϊ��#k#r("+item1.getLevel()+"��)#k\r\n\r\n���γ�ʼ������Ҫ#v5064200# * ��"+need+"\r\n");
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
	cm.sendOk("#b����#v5064200#����!#k��ʼ����Ҫ#b  "+need+" * #v5064200#");
					cm.dispose();
} else {
  Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
  Packages.server.MapleInventoryManipulator.addFromDrop(cm.getPlayer().getClient(), toDrop, true, false);
  cm.gainItem(5064200, -need);
  World.Broadcast.broadcastSmega(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " :  ��"+ need +"��������ԭ�������������ԣ�",true,cm.getClient().getChannel(),toDrop));
  cm.dispose();
  }
  }
	}
}