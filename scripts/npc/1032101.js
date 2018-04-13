function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if ((mode == 0 && status == 2) || (mode == 0 && status == 13)) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
      if (status == 0) {			
            if (cm.isQuestActive(21714) || cm.isQuestActive(21717) || cm.isQuestActive(21718)) {
				cm.sendNext("我想去 南部秘密森林 ,能把我送过去吗？");
			} else {
				cm.sendOk("魔法密林真是个美妙的地方！");
				cm.dispose();
			}
        }
		} else if (status == 1) {
    cm.sendNextPrev("好，我会用魔法送你过去的。");
		} else if (status == 2) {
      			cm.warp(910100002);
            cm.dispose();
	}
}
}