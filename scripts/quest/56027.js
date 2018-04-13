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
			qm.sendOk("恭喜你获得升级奖励！  #v5510000# 原地复活术（6个）");
			qm.gainItem(5510000, 6);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}