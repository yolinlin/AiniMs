var status = -1;
importPackage(Packages.client);
importPackage(Packages.tools);

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("这是一个很重要的决定。");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendYesNo("您已经决定了吗？这个决定将是一生的，所以请慎重爆率。你确定你想成为一名唤灵斗师？");
    } else if (status == 1) {
	qm.sendNext("我的身体刚刚成型，哦...这是完美的唤灵斗师。如果你想变得更强大，使用角色属性（S）适当提高能力。如果你不确定提高什么，只要点击#b自动分配#k.");
	if (qm.getJob() == 3000) {
      qm.changeJob(3200);
      qm.resetStats(4, 4, 4, 4);
      qm.c.getPlayer().setRemainingAp((qm.getPlayer().getLevel() - 1) * 5 + 8);
	    qm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, qm.c.getPlayer().getRemainingAp());
	    qm.c.getPlayer().setRemainingSp((qm.getPlayer().getLevel() - 10) * 3 + 5);
	    qm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLESP, qm.c.getPlayer().getRemainingSp());
	    qm.gainItem(1382100,1);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(2, 4);
	    qm.expandInventory(4, 4);
	}
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendNextPrev("我帮助你扩大了背包栏。你要明智地使用这些物品栏用来装满物品。");
    } else if (status == 3) {
	qm.sendNextPrev("现在...我要你去全世界展示你华丽的操作。");
	qm.safeDispose();
    }
}