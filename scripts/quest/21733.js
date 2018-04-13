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
      qm.forceStartQuest();
			qm.dispose();
		} 
	}
}

function end(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("孩子，我还以为你回不来被人偶师所迷惑了。幸好老天有眼。");
		} else if (status == 1) {
			qm.sendOk("我一定会将我的毕生功力传授于你，你必将是天下第一战神！");
      qm.forceCompleteQuest();
      qm.teachSkill(21100000, qm.getPlayer().getSkillLevel(21100000), 0);
      qm.AranTutInstructionalBubble("Effect/BasicEff.img/AranGetSkill");
			qm.dispose();
		} 
	}
}