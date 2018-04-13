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
			qm.sendOk("恭喜你获得升级奖励！  #v3010134# 枫叶纪念凳（60天）");
			qm.gainItem(3010134, 1, 60);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}