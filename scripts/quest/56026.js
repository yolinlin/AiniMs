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
			qm.sendOk("��ϲ��������������  #v3010134# ��Ҷ����ʣ�60�죩");
			qm.gainItem(3010134, 1, 60);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}