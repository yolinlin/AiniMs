/*
    Zakum Entrance
*/

function enter(pi) {
    if (!pi.haveItem(4001017)) {
	pi.playerMessage(5, "��û�л�����ۣ������ٻ�����.");
	return false;
    }
    
    pi.playPortalSE();
    pi.warp(pi.getPlayer().getMapId() + 100, "west00");
    return true;
}