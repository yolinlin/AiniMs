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
			qm.sendOk("��ϲ��������������  #v5510000# ԭ�ظ�������6����");
			qm.gainItem(5510000, 6);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}