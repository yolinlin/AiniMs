function enter(pi) {
	if (!pi.isQuestActive(21734))
		pi.playerMessage("必须接受“人偶师的痕迹”任务才能进入.");
	else
    pi.warp(910510100, 0);
	return true;
}