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
			cm.sendNextPrev("�ٺ٣����Ҿ�ϲ������飬˵ʲô���˺�����Ҫɱ��ɱ�ҡ����ޣ�");
		} else if (status == 1) {
			cm.sendNext("���������Ӳ����ˣ������Ŵλ��Һ��¡�\r\n#b�Ҹ�����˹���������·���˭��ƥ�У� \r\r\n���������żʦ������� ������֮ƥ�У�");
		} else if (status == 2) {
      cm.spawnMob(9300346, 110, 1);
      cm.forceStartQuest(21762,"2");
			cm.dispose();
		}
	}
}