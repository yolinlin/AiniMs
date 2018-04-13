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
			qm.sendOk("恭喜你获得升级奖励！  #v5030001# 精灵商人一日权");
			qm.gainItem(5030001, 1, 1);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}