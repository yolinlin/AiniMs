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
			qm.sendNext("����ҷ�����һ����ӡʯ�����ѵ���ð�յ������ޱ��ԭ����");
		} else if (status == 1) {
			qm.sendOk("����ȥ��������հѷ�ӡʯ�����ɣ�ϣ���ܵõ�����Ҫ�Ĵ𰸣�");
} else if (status == 2) {
      qm.forceStartQuest();
      qm.gainItem(4032323, 1);
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
			qm.sendNext("��������....�ѵ�.....");
		} else if (status == 1) {
			qm.sendOk("�ðɣ������¹��ش��Ҳ�����Ҳ��ǣ�����㻹���߰ɣ�");
      qm.gainItem(4032323,-1);
      qm.forceCompleteQuest();
			qm.dispose();
		} 
	}
}