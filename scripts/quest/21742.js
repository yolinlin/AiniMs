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
			qm.sendNext("�������С���Ӱ������뵽��ø�ǿ���������");
		} else if (status == 1) {
			qm.sendOk("�������ͨ���ҵĲ��Բ��У�");			
	    qm.gainItem(4220151, 1);
	    qm.forceStartQuest();
			qm.dispose();
		} 
	}
}

function end(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("�٣���ô�죬���Ȼ��һ�㰡...");
		} else if (status == 1) {
			qm.sendOk("�ҵĲ���û��ô��ͽ����ģ������ǽ�����һ�����԰ɣ�");
			qm.removeAll(4220151);
      qm.removeAll(4032342);
      qm.forceCompleteQuest();
			qm.dispose();
		} 
	}
}