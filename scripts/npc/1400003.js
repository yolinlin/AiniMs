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
	cm.sendSimple("你想去哪里？#b\r\n#L0#金银岛#l\r\n#L1#圣地#l\r\n#L2#天空之城#l\r\n#L3#玩具城#l\r\n#L4#阿里安特#l\r\n#L5#神木村#l\r\n#L6#埃德尔斯坦#l\r\n");
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