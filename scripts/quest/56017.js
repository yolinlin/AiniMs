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
			qm.sendOk("��ϲ��������������  #v5040008# [7��]˲���ƶ�ʯ");
			qm.gainItem(5040008, 1, 7);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}