var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("啊啊啊啊啊~~~~~钥匙怎么会丢了？");
		} else if (status == 1) {
			qm.sendAcceptDecline("对了，最近有野猪老是来袭击我们。小偷会是它们吗？");
		} else if (status == 2) {
	   qm.forceStartQuest();
			qm.sendNext("我明明都保管的很好的，我觉得小偷一定是原始野猪！\r\n你一定要帮助我！");
		} else if (status == 3) {
			qm.dispose();
		}
	}
}