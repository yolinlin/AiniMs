var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0)
        cm.sendNextS("����������Ϳڣ�����ʥ�ء����������������кܶ���ʿ������һ��ҪС�ġ����ҷ���һ�¹�ȥ��ʵ���ɣ��Ǻǡ�", 17);
    else if (status == 1) {
        cm.warp(915000300, 0);
        cm.dispose();
    }
}