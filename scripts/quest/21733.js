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
			qm.sendNext("���ӣ��һ���Ϊ��ز�������żʦ���Ի��ˡ��Һ��������ۡ�");
		} else if (status == 1) {
			qm.sendOk("��һ���Ὣ�ҵı��������������㣬��ؽ������µ�һս��");
      qm.forceCompleteQuest();
      qm.teachSkill(21100000, qm.getPlayer().getSkillLevel(21100000), 0);
      qm.AranTutInstructionalBubble("Effect/BasicEff.img/AranGetSkill");
			qm.dispose();
		} 
	}
}