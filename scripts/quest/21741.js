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
			qm.sendNext("Ϊ���ܹ���ø�ǿ������������Ǳ���ǰ�����꣡");
		} else if (status == 1) {
			qm.sendOk("�����֮�ǿ��Ե������꣬ȥ�ɡ�");
      qm.forceStartQuest();
			qm.dispose();
		} 
	}
}