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
			qm.sendNext("���ڵ�ð������Ĺ�����Խ��Խ�����ˣ��������֮�ǳ����˿��ɵ�״����");
		} else if (status == 1) {
			qm.sendOk("���Ǳ���Ͽ��ж������֮�ǵ������ƺ���������Ҫ���鱨��ȥ�������ʰɣ�");
} else if (status == 2) {
      qm.forceStartQuest();
			qm.dispose();
		} 
	}
}