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
			qm.sendNext("�һ������Ļ��ǲ�������������");
		} else if (status == 1) {
			qm.sendOk("�ţ��㲻�������һ����ģ� \r\n����Ҫ����īˮ�������Ҫ����Ĳ��ϰ��� \r\n\���������ѿ��Ժܰ���ġ�\r\n��Ҫ #r500,000 #k���");
      qm.forceStartQuest();
			qm.dispose();
		} 
	}
}

function end(mode, type, selection) {
}