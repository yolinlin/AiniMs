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
			qm.sendOk("������˽�����   #v2430191# �ɰ�����������װ");
			qm.gainItem(2430191, 1);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}