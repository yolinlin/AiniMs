function enter(pi) {
	if (!pi.isQuestActive(21733)){
	  pi.playPortalSE();
    pi.warp(104000004,1);
	} else{
    pi.warp(910400000,1);
        }
	return true;
}