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
			qm.sendNext("���²�����֮�ǵķ�ӡʯ��Ȼ�������ˡ�");
		} else if (status == 1) {
			qm.sendOk("����������մ������ɣ�");
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
			qm.sendNext("ʲô����ӡʯ�������ˣ�");
		} else if (status == 1) {
			qm.sendOk("���ˣ����ˣ���֪���ˡ�");
      qm.forceCompleteQuest();
			qm.dispose();
		} 
	}
}