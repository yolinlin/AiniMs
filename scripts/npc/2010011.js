var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendYesNo("����ȥ�������Ժ��?");
    } else if (status == 1) {
  cm.saveLocation("ZHUANDAN");
	cm.warp(200000301,2);
	cm.dispose();
    }
}