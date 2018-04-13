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
			qm.sendNext("大事不妙，天空之城的封印石居然被抢走了。");
		} else if (status == 1) {
			qm.sendOk("你代我向利琳传个话吧！");
      qm.forceStartQuest();
			qm.dispose();
		} 
	}
}

function end(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("什么？封印石被抢走了？");
		} else if (status == 1) {
			qm.sendOk("好了，好了，我知道了。");
      qm.forceCompleteQuest();
			qm.dispose();
		} 
	}
}