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
			qm.sendNext("��Ȼ�����������ﲢ��վ������������ǰ��˵������һ����ʵ����\r\n�����һ������һֱ��ɧ���ң���Ҫ����Ҵ���ɾ���");
		} else if (status == 1) {
			qm.sendOk("�ţ����ڵ������˶�ʮ���¸Ұ�....");
} else if (status == 2) {
      qm.forceStartQuest();
			qm.dispose();
		} 
	}
}