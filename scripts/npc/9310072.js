importPackage(Packages.server);
importPackage(Packages.client.inventory);
function start() {
    cm.sendYesNo("����ɾ������������һ�����Ʒ��������ѡ��.");
}

function action(mode, type, selection) {
    if (mode == 1) {
    if (cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1) == null){
cm.sendOk("�������Ҫ��װ�����뱳����һ��");
    }else{
    MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
    cm.sendOk("���ˣ���һ���Ѿ���ʧ�ˡ�");
    }
    }
    cm.dispose();
}