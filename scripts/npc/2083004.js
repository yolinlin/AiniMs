/*function start() {
    if (cm.getPlayer().getClient().getChannel() == 3) {
        cm.dispose();
        cm.openNpc(2083004, 4, 1);
    } else if (cm.getPlayer().getClient().getChannel() == 1 ||cm.getPlayer().getClient().getChannel() == 2 ) {
        cm.dispose();
        cm.openNpc(2083004, 3, 1);
    } else {
        cm.sendOk("只有在1-3频道才可以参加黑龙远征队\r\n3频道为进阶黑龙王，1和2频道为普通黑龙王.");
        cm.dispose();
    }
}*/

var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
	cm.dispose();
    }
    if (cm.getPlayer().getClient().getChannel() != 1) {
    cm.sendOk("只有在1频道才可以参加黑龙远征队");
        cm.dispose();
    }
    if (status == 0) {
	cm.sendSimple("你想挑战哪一个？#b\n\r #L0#暗黑龙王#l\r\n#L1#进阶暗黑龙王#l\r\n");
    } else if (status == 1) {
		if (selection == 0) {
		  cm.dispose();
      cm.openNpc(2083004, 3, 1);
		} else if (selection == 1) {
			cm.dispose();
      cm.openNpc(2083004, 5, 1);
		}
    }
}