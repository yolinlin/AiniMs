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
			qm.sendNext("小伙子，我还以为你跟我一样迷路了呢。");
		} else if (status == 1) {
			qm.sendOk("真是谢谢你了，以后我可以安静的过剩下的日子了。\r\n为表示感谢，这个给你！");
      qm.forceCompleteQuest();
      qm.teachSkill(21100004, qm.getPlayer().getSkillLevel(21100004), 0);
      qm.AranTutInstructionalBubble("Effect/BasicEff.img/AranGetSkill");
			qm.dispose();
		} 
	}
}