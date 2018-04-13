var baseid = 100040400;
var dungeonid = 100040500;
var dungeons = 30;

function enter(pi) {
    if (pi.getMapId() == baseid) {
	if (pi.getParty() != null) {
	    if (pi.isLeader()) {
		for (var i = 0; i < dungeons; i++) {
          if (pi.getPlayer().getParty().getMembers().iterator().next().getMapid() != pi.getMapId()) {
          pi.playerMessage(5, "你的队员都没到齐你进个屁啊.");
          return;
          } else {
		    if (pi.getPlayerCount(dungeonid + i) == 0) {
			pi.warpParty(dungeonid + i);
			return;
		    }
		    }
		}
	    } else {
		pi.playerMessage(5, "你不是队长.");
	    }
	} else {
	    for (var i = 0; i < dungeons; i++) {
		if (pi.getPlayerCount(dungeonid + i) == 0) {
		    pi.warp(dungeonid + i);
		    return;
		}
	    }
	}
	pi.playerMessage(5, "无法进入，里面已满.");
    } else {
	pi.playPortalSE();
	pi.warp(baseid, "MD00");
    }
}