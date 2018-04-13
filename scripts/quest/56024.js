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
			qm.sendOk("恭喜你获得升级奖励！  #v2430193# 豪华玩家礼物套装");
			qm.gainItem(2430193, 1);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}