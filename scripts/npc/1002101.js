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
	cm.sendYesNo("����ȥ��˯����������");
    } else if (status == 1) {
	cm.sendOk("ȥ�������.");
	cm.dispose();
    }
}