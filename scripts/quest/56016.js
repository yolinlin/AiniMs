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
			qm.sendOk("��ϲ��������������  #v2022335# С�����ɣ�100����");
			qm.gainItem(2022335, 100);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}