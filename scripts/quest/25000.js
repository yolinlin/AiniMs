var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("����һ������Ҫ�ľ�����");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendPlayerToNpc("׼�����������ˣ�ˮ����԰������ͣ����ʥ�ص���ʿ�����Ϸ�����Ȼ���������Ӧ��û�з��֡�");
    } else if (status == 1) {
	qm.sendNextS("��������ʥ�صľ����ǳ�ɭ�ϡ���������ƽ����̫һ����������������ʿ����ǰ�����˶ྯ����ʿ���ڴ�����", 1);
    } else if (status == 2) {
	qm.sendPlayerToNpc("һ�ж�׼�����ˡ����ھͿ����˵ľ�����������������ô�����������ڿ�ʼʥ��Ǳ����ս��");
    } else if (status == 3) {
	qm.sendNextPrevS("ף����ˣ����ˡ�", 1);
    } else if (status == 4) {
	qm.forceStartQuest();
	qm.dispose();
    }
}