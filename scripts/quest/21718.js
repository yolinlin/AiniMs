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
	    qm.sendNext("������˼������ô���Ű���й�����");
	} else if (status == 1) {
	    qm.sendNextPrev("�����ҵĶ����о��ҷ���һ�����ܡ� \r\n ��Щ��Ģ������ż�ƺ����ź�ǿ���ħ����\r\n \r\n�������᲻���������ż�ĺ����йأ�");
	} else if (status == 2) {
	    qm.askAcceptDecline("�鷳���ٰ�����һ�£��һ���Ҫһ����ż����������������Ģ����");
	} else if (status == 3) {
	    qm.forceStartQuest();
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {

}