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
			qm.sendNext("���ӣ�������ַ�����żʦ��ʼ���������ˣ���");
		} else if (status == 1) {
			qm.sendOk("#b�鷳��ȥ����һ�°ɣ����Ķ�Ѩ�� #rа��ɭ��1#b  \r\n�������λ�ã��㻹��ǰ������һ����");
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
			qm.sendNext("�ҹ�Ȼû�п����㣬������̫�ɹ��ˡ�");
		} else if (status == 1) {
			qm.sendOk("��һ���Ὣ�ҵı��������������㣬��ؽ������µ�һս��");
      qm.forceCompleteQuest();
      qm.teachSkill(21100005, qm.getPlayer().getSkillLevel(21100005), 0);
      qm.AranTutInstructionalBubble("Effect/BasicEff.img/AranGetSkill");
			qm.dispose();
		} 
	}
}