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
			qm.sendNext("孩子，最近我又发现人偶师开始蠢蠢欲动了！！");
		} else if (status == 1) {
			qm.sendOk("#b麻烦你去调查一下吧！他的洞穴在 #r邪恶森林1#b  \r\n但具体的位置，你还需前往调查一番！");
} else if (status == 2) {
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
			qm.sendNext("我果然没有看错你，你真是太成功了。");
		} else if (status == 1) {
			qm.sendOk("我一定会将我的毕生功力传授于你，你必将是天下第一战神！");
      qm.forceCompleteQuest();
      qm.teachSkill(21100005, qm.getPlayer().getSkillLevel(21100005), 0);
      qm.AranTutInstructionalBubble("Effect/BasicEff.img/AranGetSkill");
			qm.dispose();
		} 
	}
}