function enter(pi) {
	var returnMap = pi.getSavedLocation("MULUNG_TC");
	if (returnMap  == 123456789) {
		returnMap = 300030000; // to fix people who entered the fm trough an unconventional way
	}
	pi.clearSavedLocation("MULUNG_TC");
	pi.warp(returnMap); 
	return true;
}