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
	cm.sendYesNo("你想去沉睡的神龙岛吗？");
    } else if (status == 1) {
	cm.sendOk("去你妈隔壁.");
	cm.dispose();
    }
}