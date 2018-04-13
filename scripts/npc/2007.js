importPackage(Packages.client);
importPackage(Packages.tools);
var status = -1;

function action(mode, type, selection) {
    if (cm.getPlayer().getLevel() != 1 || cm.getPlayer().getMapId() != 10000) {
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
		cm.sendSimple("初生牛犊不怕虎的骚男，你可以实现你一个愿望，你愿意嫁给我吗?\r\n好吧，我错了。我可以让你重新选择你的职业。   \r\n#L6#双弩精灵#l\r\n#L7#恶魔猎手#l\r\n#b#L3# 我并不想选择，也不想嫁给你，再见！#l");
    } else if (status == 1) {
if (selection == 6) {
cm.changeJob(2002); //双弩精灵
 cm.gainItem(4032055, 1);
 cm.gainItem(1522038, 1); 
 cm.gainItem(1352005, 1);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
	}
if (selection == 7) {
      cm.changeJob(3001);//恶魔猎手
      cm.gainItem(4032055, 1);
      cm.gainItem(1322123, 1);
      cm.gainItem(1099000, 1);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
	}
	cm.dispose();
    }
}