var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0)
        cm.sendNextS("������ʱ�����ڵ�����", 17);
    else if (status == 1)
        cm.sendNextPrevS("��ͦ���ŵġ�����Ϊ�þ�û����𣿵�Ȼ��������˵û�����š�", 17);
    else if (status == 2)
        cm.sendNextPrevS("׼��Ӧ��ȫ�������˰ɣ�Ҫ��������ȥ��������ʱ���Ļ����Ǿ�̫�����ˡ���Ȼ�о������е����裬��������ȥ���Կ��ɡ�", 17);
    else if (status == 3) {
        cm.introEnableUI(0);
        cm.dispose();
    }
}