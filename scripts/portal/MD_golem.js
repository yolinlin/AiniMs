var baseid = 100040400;
var dungeonid = 100040500;
var dungeons = 30;

function enter(pi) {
    if (pi.getMapId() == baseid) {
	if (pi.getParty() != null) {
	    if (pi.isLeader()) {
		for (var i = 0; i < dungeons; i++) {
          if (pi.getPlayer().getParty().getMembers().iterator().next().getMapid() != pi.getMapId()) {
          pi.playerMessage(5, "��Ķ�Ա��û���������ƨ��.");
          return;
          } else {
		    if (pi.getPlayerCount(dungeonid + i) == 0) {
			pi.warpParty(dungeonid + i);
			return;
		    }
		    }
		}
	    } else {
		pi.playerMessage(5, "�㲻�Ƕӳ�.");
	    }
	} else {
	    for (var i = 0; i < dungeons; i++) {
		if (pi.getPlayerCount(dungeonid + i) == 0) {
		    pi.warp(dungeonid + i);
		    return;
		}
	    }
	}
	pi.playerMessage(5, "�޷����룬��������.");
    } else {
	pi.playPortalSE();
	pi.warp(baseid, "MD00");
    }
}