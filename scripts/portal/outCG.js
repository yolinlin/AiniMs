function enter(pi) {
	var returnMap = pi.getSavedLocation("FEICHUAN");
	if (returnMap == 123456789 || returnMap >= 150000000 && returnMap <= 150010412) {
		returnMap = 104020000; // to fix people who entered the fm trough an unconventional way
	}
	pi.clearSavedLocation("FEICHUAN");
	pi.warp(returnMap); 
	return true;
}