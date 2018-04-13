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
			qm.sendNext("最近我发现了一个封印石，这难道是冒险岛世界大巨变的原因吗？");
		} else if (status == 1) {
			qm.sendOk("你快点去里恩找利琳把封印石给她吧！希望能得到我想要的答案！");
} else if (status == 2) {
      qm.forceStartQuest();
      qm.gainItem(4032323, 1);
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
			qm.sendNext("啊！这是....难道.....");
		} else if (status == 1) {
			qm.sendOk("好吧，此事事关重大，我不想你也受牵连，你还是走吧！");
      qm.gainItem(4032323,-1);
      qm.forceCompleteQuest();
			qm.dispose();
		} 
	}
}