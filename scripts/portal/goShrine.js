function enter(pi) {
	if (pi.getPlayer().getLevel() < 50) {
		pi.playerMessage(5, "��ĵȼ�����ﵽ50.");
		return false;
	}
	pi.warp(950101000,0);
	return true;
}