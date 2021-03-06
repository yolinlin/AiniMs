/* Grendel the Really Old
	Magician Job Advancement
	Victoria Road : Magic Library (101000003)

	Custom Quest 100006, 100008, 100100, 100101
*/
importPackage(Packages.client);
importPackage(Packages.tools);
var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
	cm.sendOk("那你想好了再来找我吧.");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.getJob() == 0) {
	    if (cm.getPlayerStat("LVL") >= 8 && cm.getJob() == 0) {
		cm.sendNext("你想成为 #r魔法师#k ?");
	    } else {
		cm.sendOk("我可以让冒险家成为 #r魔法师#k.")
		cm.dispose();
	    }
	} else {
	    if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 200) { // MAGICIAN
		if (cm.getQuestStatus(100006) >= 1) {
		    cm.completeQuest(100008);
		    if (cm.getQuestStatus(100008) == 2) {
			status = 20;
			cm.sendNext("I see you have done well. I will allow you to take the next step on your long road.");
		    } else {
			status = 20;
			cm.sendNext("看来你已经很厉害了，那我允许你进行第二次转职.");
		    }
		} else {
		    status = 10;
		    cm.sendNext("你的进步还真是惊人啊.");
		}
	    } else if (cm.getQuestStatus(100100) == 1) {
		cm.completeQuest(100101);
		if (cm.getQuestStatus(100101) == 2) {
		    cm.sendOk("Alright, now take this to #bRobeira#k.");
		} else {
		    cm.sendOk("Hey, #b#h0##k! I need a #bBlack Charm#k. Go and find the Door of Dimension.");
		    cm.startQuest(100101);
		}
		cm.dispose();
	    } else {
		cm.sendOk("You have chosen wisely.");
		cm.dispose();
	    }
	}
    } else if (status == 1) {
	cm.sendNextPrev("你的选择真是太正确了, #r魔法师#k 是非常强大的职业.");
    } else if (status == 2) {
	cm.sendYesNo("你真的想成为 #r魔法师#k ?");
    } else if (status == 3) {
	if (cm.getJob() == 0) {
	    cm.resetStats(4, 4, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
	    cm.changeJob(200); // MAGICIAN
	    cm.c.getPlayer().setRemainingAp((cm.getPlayer().getLevel() - 1) * 5 + 8);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, cm.c.getPlayer().getRemainingAp());
	    cm.c.getPlayer().setRemainingSp((cm.getPlayer().getLevel() - 8) * 3 + 1);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLESP, cm.c.getPlayer().getRemainingSp());
	}
	cm.gainItem(1372005, 1);
	cm.sendOk("你已经成为了一个强大的 #r魔法师#k 了.");
	cm.dispose();
    } else if (status == 11) {
	cm.sendNextPrev("你已经做好了二转的准备了吗？你可以成为 #r火毒#k, #r冰雷#k 或 #r牧师#k.");
    } else if (status == 12) {
	cm.askAcceptDecline("不过首先得通过测试，你准备好了吗？");
    } else if (status == 13) {
	cm.startQuest(100006);
	//cm.gainItem(4031009, 1);
	cm.sendOk("第二次转职真的需要很有耐心的人，所以你就再点我一次吧.");
	cm.dispose();
    } else if (status == 21) {
	cm.sendSimple("你想转职成为什么呢?#b\r\n#L0#火毒#l\r\n#L1#冰雷#l\r\n#L2#牧师#l#k");
    } else if (status == 22) {
	var jobName;
	if (selection == 0) {
	    jobName = "火毒";
	    job = 210; // FP
	} else if (selection == 1) {
	    jobName = "冰雷";
	    job = 220; // IL
	} else {
	    jobName = "牧师";
	    job = 230; // CLERIC
	}
	cm.sendYesNo("你真的想转职成为 #r" + jobName + "#k?");
    } else if (status == 23) {
	cm.changeJob(job);
	cm.gainItem(4031012, -1);
	cm.sendOk("好吧，你已经二转了，不用再来找我了.");
	cm.dispose();
    }
}	
