var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
	cm.dispose();
    }
    if (status == 0) {
	cm.sendSimple("����ȥ���#b\r\n#L1#ħ������#l\r\n");
    } else if (status == 1) {
		if (selection == 0) {
		cm.useItem(2210007);
		cm.warp(200110060);
		  cm.dispose();
		} else if (selection == 1) {
		cm.useItem(2210007);
		cm.warp(200110001);
		  cm.dispose();
		}
    }
}