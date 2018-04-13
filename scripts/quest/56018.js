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
			qm.sendOk("恭喜你获得升级奖励！  1,000,000金币");
			qm.gainMeso(1000000);
			qm.forceCompleteQuest();
		  qm.dispose();	
		} 
	}
}