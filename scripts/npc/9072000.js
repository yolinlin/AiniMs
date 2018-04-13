var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
	cm.dispose();
    }
    if (cm.getMapId() == 130000210) {
    cm.dispose();
      cm.openNpc(9072000, 2, 1);
    } if (cm.getMapId() == 104020100) {
    cm.dispose();
      cm.openNpc(9072000, 3, 1);
    }else {
    cm.dispose();
    }
}