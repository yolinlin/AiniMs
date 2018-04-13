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
			qm.sendNext("现在的冒险世界的怪物变得越来越暴躁了，就连天空之城出现了可疑的状况！");
		} else if (status == 1) {
			qm.sendOk("我们必须赶快行动，天空之城的利萨似乎有我们需要的情报。去找她问问吧！");
} else if (status == 2) {
      qm.forceStartQuest();
			qm.dispose();
		} 
	}
}