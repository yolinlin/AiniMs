/*
    Zakum Entrance
*/

function enter(pi) {
    if (!pi.haveItem(4001017)) {
	pi.playerMessage(5, "你没有火焰的眼，不能召唤扎昆.");
	return false;
    }
    
    pi.playPortalSE();
    pi.warp(pi.getPlayer().getMapId() + 100, "west00");
    return true;
}