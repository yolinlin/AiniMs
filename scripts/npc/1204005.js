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
            if (cm.getPlayer().getMap().getMonsterById(9300346) == null) {
				cm.sendNextPrev("你怎么了？被绑架了吗？怎么会这样？");
			} else {
				cm.sendNext("我被绑着动不了，也帮不了你。");
				cm.dispose();
			}
        }
		} else if (status == 1) {
			cm.sendNext("孩子，快跑啊！别管我！这里很危险！");
		} else if (status == 2) {
			cm.dispose();
			cm.openNpc(1204007);
		}
	}
}