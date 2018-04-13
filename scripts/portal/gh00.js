function enter(pi) {
	var returnMap = pi.getSavedLocation("ZHUANDAN");
	if (returnMap  == 123456789) {
		returnMap = 100000000; // to fix people who entered the fm trough an unconventional way
	}
	pi.clearSavedLocation("ZHUANDAN");
	pi.warp(returnMap); 
	return true;
}