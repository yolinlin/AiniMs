function enter(pi) {
	var returnMap = pi.getSavedLocation("MULUNG_TC");
	if (returnMap  == 123456789) {
		pi.warp(261000020,2); 
	} else {
	pi.clearSavedLocation("MULUNG_TC");
	pi.warp(returnMap, "unityPortal2"); 
	}
	return true;
}