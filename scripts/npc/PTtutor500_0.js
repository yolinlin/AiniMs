importPackage(Packages.tools.packet);

var status = -1;

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 0)
        cm.sendNextS("(��ҹ�Ȼ���ۼ������ˡ�����û��ʼ������������������û�ǳ���Ҫ���Ҹ�λ����������)", 17);
    else if (status == 1) {
        cm.dispose();
        cm.movePhantom();
    }
}