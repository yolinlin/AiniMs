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
			qm.sendNext("为了能够获得更强大的力量，我们必须前往武陵！");
		} else if (status == 1) {
			qm.sendOk("从天空之城可以到达武陵，去吧。");
      qm.forceStartQuest();
			qm.dispose();
		} 
	}
}