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
	    qm.sendNext("�Ҽ��Ž����������Ϊ���ֿ����˿��µ����飡 \r\n����ĺú��¿��µ������ƺ�����������");
	} else if (status == 1) {
	    qm.sendNextPrev("��֪����ǰ���죬��ȥ��һ��ʯ����Ժ���ż�������ҿ�����ʲô�� \r\n �ҿ����˺���������ż�������Ҽ�Ц?\r\n \r\n��ʱ��ʮ�ֺ��£����ܻ����ˣ�");
	} else if (status == 2) {
	    qm.askAcceptDecline("��������Ҫ����ȥ��һ�£�ȥ�����κ�һ����Ģ����ȡ�����ǵ���ż�����ң�");
	} else if (status == 3) {
	    qm.forceStartQuest();
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {

}