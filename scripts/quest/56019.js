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
			qm.sendOk("恭喜你获得升级奖励！  #v5220040# 冒险岛转蛋卷（3张）");
			qm.gainItem(5220040, 3);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}