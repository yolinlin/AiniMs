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
			qm.sendNext("С���ӣ��һ���Ϊ�����һ����·���ء�");
		} else if (status == 1) {
			qm.sendOk("����лл���ˣ��Ժ��ҿ��԰����Ĺ�ʣ�µ������ˡ�\r\nΪ��ʾ��л��������㣡");
      qm.forceCompleteQuest();
      qm.teachSkill(21100004, qm.getPlayer().getSkillLevel(21100004), 0);
      qm.AranTutInstructionalBubble("Effect/BasicEff.img/AranGetSkill");
			qm.dispose();
		} 
	}
}