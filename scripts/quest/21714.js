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
	    qm.sendNext("���ħ�������ƺ���Ĳ�̫������ \r\n�Һú��»��п��µ����ѷ�����");
	} else if (status == 1) {
	    qm.sendNextPrev("��֪������һ���峿����ȥ�ܱ߲�Ģ��������ҿ�����ʲô�� \r\n �ҿ�������ɫ��Ģ����Ȼ����·����˵�ǲ��Ǻܿ���?\r\n \r\n��ʱ�Ҿ;����ˣ�");
	} else if (status == 2) {
	    qm.askAcceptDecline("����...��ϣ�����ܰ����ң�ȥ�������·����ɫĢ����ȡ�����ǵ���ż�����ң�");
	} else if (status == 3) {
	    qm.forceStartQuest();
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {

}