/**
	Orbis Magic Spot - Orbis Tower <1st Floor>(200082100)
**/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    }
    status++;
    if (status == 0) {
	    cm.sendYesNo("��Ҫ���� #b#p2012014##k. ������ʱ�մ�����?");
    }
    if (status == 1) {
    if (cm.getMapId() == 200080200) {
	cm.warp(200082100,0);
	cm.dispose();
    } else {
	cm.warp(200080200,0);
	cm.dispose();
    }
}
}