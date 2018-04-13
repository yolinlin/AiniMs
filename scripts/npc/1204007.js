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
			cm.sendNextPrev("嘿嘿？？我就喜欢这剧情，说什么别伤害他，要杀就杀我。我呸！");
		} else if (status == 1) {
			cm.sendNext("哈哈！你逃不了了！竟敢屡次坏我好事。\r\n#b我弗朗西斯是乃天神下凡，谁可匹敌？ \r\r\n吾乃天才人偶师。汝等鼠辈 岂能与之匹敌？");
		} else if (status == 2) {
      cm.spawnMob(9300346, 110, 1);
      cm.forceStartQuest(21762,"2");
			cm.dispose();
		}
	}
}