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
			qm.sendOk("��ϲ��������������  #v2430193# �������������װ");
			qm.gainItem(2430193, 1);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}