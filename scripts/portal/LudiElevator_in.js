var em;

function enter(pi) {
    em = pi.getEventManager("elevator");
	if (pi.getMapId() == 222020200) {
	    if (em.getProperty("isRiding").equals("false")) {
			em.newInstance("elevator");
			em.setProperty("myRide",0);
			em.getInstance("elevator").registerPlayer(pi.getPlayer());
	    } else {
		pi.playerMessage("���滹�����ڳ��������Եȣ�");
	    }
	} else { // 222020200
	    if (em.getProperty("isRiding").equals("false")) {
			em.newInstance("elevator");
			em.setProperty("myRide",1);
			em.getInstance("elevator").registerPlayer(pi.getPlayer());
	    } else {
		pi.playerMessage("���滹�����ڳ��������Եȣ�");
	    }
	}
}
