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
	cm.sendSimple("����ȥ���#b\r\n#L0#������#l\r\n#L1#ʥ��#l\r\n#L2#���֮��#l\r\n#L3#��߳�#l\r\n#L4#���ﰲ��#l\r\n#L5#��ľ��#l\r\n#L6#���¶�˹̹#l\r\n");
    } else if (status == 1) {
		if (selection == 0) {
		cm.saveLocation("wocao", 104020100);
		cm.warp(150000001);
		  cm.dispose();
		} else if (selection == 1) {
		cm.saveLocation("wocao", 130000210);
		cm.warp(150000001);
		  cm.dispose();
		} else if (selection == 2) {
		cm.saveLocation("wocao", 200000100);
		cm.warp(150000001);
		  cm.dispose();
		} else if (selection == 3) {
		cm.saveLocation("wocao", 220000100);
		cm.warp(150000001);
		  cm.dispose();
		} else if (selection == 4) {
		cm.saveLocation("wocao", 260000100);
		cm.warp(150000001);
		  cm.dispose();
		} else if (selection == 5) {
		cm.saveLocation("wocao", 240000100);
		cm.warp(150000001);
		  cm.dispose();
		} else if (selection == 6) {
		cm.saveLocation("wocao", 310000010);
		cm.warp(150000001);
		  cm.dispose();
		}
    }
}