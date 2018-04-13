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
	cm.sendOk("����������������Ұ�.");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.getJob() == 0) {
	    if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0) {
		cm.sendNext("�����Ϊ #rսʿ#k ?");
	    } else {
		cm.sendOk("�ҿ�����ð�ռҳ�Ϊ #rսʿ#k.")
		cm.dispose();
	    }
	} else {
	    if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 100) { // MAGICIAN
		if (cm.getQuestStatus(100003) >= 1) {
		    cm.completeQuest(100005);
		    if (cm.getQuestStatus(100005) == 2) {
			status = 20;
			cm.sendNext("I see you have done well. I will allow you to take the next step on your long road.");
		    } else {
			status = 20;
			cm.sendNext("�������Ѿ��������ˣ�������������еڶ���תְ.");
		    }
		} else {
		    status = 10;
		    cm.sendNext("��Ľ��������Ǿ��˰�.");
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
	cm.sendNextPrev("���ѡ������̫��ȷ��, #rսʿ#k �Ƿǳ�ǿ���ְҵ.");
    } else if (status == 2) {
	cm.sendYesNo("��������Ϊ #rսʿ#k ?");
    } else if (status == 3) {
	if (cm.getJob() == 0) {
	    cm.resetStats(4, 4, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
	    cm.changeJob(100);
	    cm.c.getPlayer().setRemainingAp((cm.getPlayer().getLevel() - 1) * 5 + 8);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, cm.c.getPlayer().getRemainingAp());
	    cm.c.getPlayer().setRemainingSp((cm.getPlayer().getLevel() - 10) * 3 + 1);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLESP, cm.c.getPlayer().getRemainingSp());
	}
	cm.gainItem(1402001, 1);
	cm.sendOk("���Ѿ���Ϊ��һ��ǿ��� #rսʿ#k ��.");
	cm.dispose();
    } else if (status == 11) {
	cm.sendNextPrev("���Ѿ������˶�ת��׼����������Գ�Ϊ #r����#k, #r׼��ʿ#k �� #rǹսʿ#k.");
    } else if (status == 12) {
	cm.askAcceptDecline("�������ȵ�ͨ�����ԣ���׼��������");
    } else if (status == 13) {
	cm.startQuest(100003);
	//cm.gainItem(4031009, 1);
	cm.sendOk("�ڶ���תְ�����Ҫ�������ĵ��ˣ���������ٵ���һ�ΰ�.");
	cm.dispose();
    } else if (status == 21) {
	cm.sendSimple("����תְ��Ϊʲô��?#b\r\n#L0#����#l\r\n#L1#׼��ʿ#l\r\n#L2#ǹսʿ#l#k");
    } else if (status == 22) {
	var jobName;
	if (selection == 0) {
	    jobName = "����";
	    job = 110; // FP
	} else if (selection == 1) {
	    jobName = "׼��ʿ";
	    job = 120; // IL
	} else {
	    jobName = "ǹսʿ";
	    job = 130; // CLERIC
	}
	cm.sendYesNo("�������תְ��Ϊ #r" + jobName + "#k?");
    } else if (status == 23) {
	cm.changeJob(job);
	cm.gainItem(4031012, -1);
	cm.sendOk("�ðɣ����Ѿ���ת�ˣ���������������.");
	cm.dispose();
    }
}	
