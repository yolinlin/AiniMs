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
			qm.sendOk("恭喜你获得升级奖励！  #v5040008# [7天]瞬间移动石");
			qm.gainItem(5040008, 1, 7);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}