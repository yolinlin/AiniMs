var em;

function enter(pi) {
    em = pi.getEventManager("elevator");
	if (pi.getMapId() == 222020200) {
	    if (em.getProperty("isRiding").equals("false")) {
			em.newInstance("elevator");
			em.setProperty("myRide",0);
			em.getInstance("elevator").registerPlayer(pi.getPlayer());
	    } else {
		pi.playerMessage("里面还有人在乘坐，请稍等！");
	    }
	} else { // 222020200
	    if (em.getProperty("isRiding").equals("false")) {
			em.newInstance("elevator");
			em.setProperty("myRide",1);
			em.getInstance("elevator").registerPlayer(pi.getPlayer());
	    } else {
		pi.playerMessage("里面还有人在乘坐，请稍等！");
	    }
	}
}
