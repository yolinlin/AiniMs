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
	    qm.sendNext("��ʿ���������ǲ�и��Ŭ�������ҵ�����żʦ�Ķ�Ѩ��");
	} else if (status == 1) {
	    qm.sendNextPrev("ʲô�������ȥ���ѵ��ⶴѨ�������ӡ�ˣ����������ܣ� \r\n �Ҿ���Ӧ������żʦ�����˰��š�\r\n \r\n�ԣ�һ�������������ǰ��Ż���ʲô�أ�");
	} else if (status == 2) {
	    qm.askAcceptDecline("����....����....������ʲô����������˹��....ʲô�����أ�");
	} else if (status == 3) {
	    qm.forceStartQuest();
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {

}