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
			qm.sendOk("恭喜你获得升级奖励！  #v5210000# 双倍经验值卡一天权");
			qm.gainItem(5210000,1,1);			
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}