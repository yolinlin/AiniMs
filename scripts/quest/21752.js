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
			qm.sendNext("����������~~~~~Կ����ô�ᶪ�ˣ�");
		} else if (status == 1) {
			qm.sendAcceptDecline("���ˣ������Ұ��������Ϯ�����ǡ�С͵����������");
		} else if (status == 2) {
	   qm.forceStartQuest();
			qm.sendNext("�����������ܵĺܺõģ��Ҿ���С͵һ����ԭʼҰ��\r\n��һ��Ҫ�����ң�");
		} else if (status == 3) {
			qm.dispose();
		}
	}
}