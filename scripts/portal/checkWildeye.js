function enter(pi) {
    if (pi.getPlayer().getInventory(pi.getInvType(-1)).findById(1003036) == null) {
    var returnMap = pi.getSavedLocation("MULUNG_TC"); 
	pi.playerMessage(5, "’Ê «Ã´≥Ù¡À.");
	pi.playPortalSE(); 
 	pi.clearSavedLocation("MULUNG_TC"); 
 	pi.warp(returnMap, "unityPortal2"); 
	return true;
	}
	return false;
}