function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if ((mode == 0 && status == 2) || (mode == 0 && status == 13)) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
      if (status == 0) {			
            if (cm.isQuestActive(21714) || cm.isQuestActive(21717) || cm.isQuestActive(21718)) {
				cm.sendNext("����ȥ �ϲ�����ɭ�� ,�ܰ����͹�ȥ��");
			} else {
				cm.sendOk("ħ���������Ǹ�����ĵط���");
				cm.dispose();
			}
        }
		} else if (status == 1) {
    cm.sendNextPrev("�ã��һ���ħ�������ȥ�ġ�");
		} else if (status == 2) {
      			cm.warp(910100002);
            cm.dispose();
	}
}
}