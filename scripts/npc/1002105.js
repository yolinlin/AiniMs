
var status = 0;

function start() {
    cm.sendYesNo("�������ȥ�����?");
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(400000000);
    }
    cm.dispose();
}