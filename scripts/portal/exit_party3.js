function enter(pi) {
	var returnMap = pi.getSavedLocation("MULUNG_TC");
	if (returnMap == 123456789) {
		pi.warp(200080100,3); 
	} else {
	pi.clearSavedLocation("MULUNG_TC");
	pi.warp(returnMap, "unityPortal2"); 
	}
	return true;
}