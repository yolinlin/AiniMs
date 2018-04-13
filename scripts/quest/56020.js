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
			qm.sendOk("恭喜你获得升级奖励！  #v2049402# 特殊潜能附加卷轴");
			qm.gainItem(2049402, 1);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}