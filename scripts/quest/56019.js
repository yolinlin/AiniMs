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
			qm.sendOk("��ϲ��������������  #v5220040# ð�յ�ת����3�ţ�");
			qm.gainItem(5220040, 3);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}