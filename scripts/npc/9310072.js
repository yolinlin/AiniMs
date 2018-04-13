importPackage(Packages.server);
importPackage(Packages.client.inventory);
function start() {
    cm.sendYesNo("你想删除掉背包栏第一格的物品吗？请慎重选择.");
}

function action(mode, type, selection) {
    if (mode == 1) {
    if (cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1) == null){
cm.sendOk("请把你需要的装备放入背包第一格！");
    }else{
    MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
    cm.sendOk("好了，第一格已经消失了。");
    }
    }
    cm.dispose();
}