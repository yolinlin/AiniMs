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
			qm.sendOk("恭喜你获得升级奖励！  #v2022335# 小鸡饼干（100个）");
			qm.gainItem(2022335, 100);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}