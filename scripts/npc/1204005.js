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
            if (cm.getPlayer().getMap().getMonsterById(9300346) == null) {
				cm.sendNextPrev("����ô�ˣ������������ô��������");
			} else {
				cm.sendNext("�ұ����Ŷ����ˣ�Ҳ�ﲻ���㡣");
				cm.dispose();
			}
        }
		} else if (status == 1) {
			cm.sendNext("���ӣ����ܰ�������ң������Σ�գ�");
		} else if (status == 2) {
			cm.dispose();
			cm.openNpc(1204007);
		}
	}
}