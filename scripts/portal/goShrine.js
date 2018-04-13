function enter(pi) {
	if (pi.getPlayer().getLevel() < 50) {
		pi.playerMessage(5, "你的等级必须达到50.");
		return false;
	}
	pi.warp(950101000,0);
	return true;
}