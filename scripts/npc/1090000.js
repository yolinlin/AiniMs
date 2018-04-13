/* Dances with Balrog
	Warrior Job Advancement
	Victoria Road : Warriors' Sanctuary (102000003)

	Custom Quest 100003, 100005
*/
importPackage(Packages.client);
importPackage(Packages.tools);
var status = 0;
var job;
var sp;
var jobName;


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
		cm.sendSimple("�����Ϊ \r\n#L10#������#l\r\n#L11#����#l\r\n#L12#��������#l");
	    } else {
		cm.sendOk("�ҿ�����ð�ռҳ�Ϊ #r����#k ��#r��������#k���� #r������#k.");
		cm.dispose();
	    }
	} else {
	    if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 500) { // WARROPR
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
		    cm.sendOk("Alright, now take this to #bTylus#k.");
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
    if (selection == 11) {
	  jobName = "����";
	  job = 500; 
    sp = 1;
    } else if (selection == 10) {
    jobName = "������";
	  job = 501; 
    sp = 2;
    } else if (selection == 12) {
    jobName = "��������";
	  job = 508; 
    sp = 3;
    }
    cm.sendNext("��ľ�������̫��ȷ�ˣ��������תְ��Ϊ #r" + jobName + "#k?.");
    } else if (status == 2) {
	cm.sendYesNo("��������Ϊ #r" + jobName + "#k ?");
    } else if (status == 3) {
  if(sp==1){
	    cm.resetStats(4, 4, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
	    cm.changeJob(500); 
	    cm.c.getPlayer().setRemainingAp((cm.getPlayer().getLevel() - 1) * 5 + 8);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, cm.c.getPlayer().getRemainingAp());
	    cm.c.getPlayer().setRemainingSp((cm.getPlayer().getLevel() - 10) * 3 + 1);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLESP, cm.c.getPlayer().getRemainingSp());
	cm.gainItem(1492014, 1);
	cm.gainItem(1482014, 1);
	cm.gainItem(2330006, 500);
  } else if(sp==2){
  cm.changeJob(501); //������
 cm.gainItem(4032055, 1);
 cm.gainItem(1532000 ,1);
      cm.resetStats(4, 4, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
      cm.c.getPlayer().setRemainingAp((cm.getPlayer().getLevel() - 1) * 5 + 8);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, cm.c.getPlayer().getRemainingAp());
	    cm.c.getPlayer().setRemainingSp((cm.getPlayer().getLevel() - 10) * 3 + 1);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLESP, cm.c.getPlayer().getRemainingSp());
  } else {
  cm.changeJob(508); //��������
 cm.gainItem(1492000, 1);
      cm.resetStats(4, 4, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
      cm.c.getPlayer().setRemainingAp((cm.getPlayer().getLevel() - 1) * 5 + 8);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, cm.c.getPlayer().getRemainingAp());
      cm.c.getPlayer().setRemainingSp((cm.getPlayer().getLevel() - 10) * 3 + 1);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLESP, cm.c.getPlayer().getRemainingSp());
  }
	cm.sendOk("���Ѿ���Ϊ��һ��ǿ��� #r" + jobName + "#k ��.");
	cm.dispose();
    } else if (status == 11) {
	cm.sendNextPrev("���Ѿ������˶�ת��׼����������Գ�Ϊ #rǹ��#k ���� #rȭ��#k.")
    } else if (status == 12) {
	cm.askAcceptDecline("�������ȵ�ͨ�����ԣ���׼��������");
    } else if (status == 13) {
	//cm.gainItem(4031008, 1);
	cm.startQuest(100003);
	cm.sendOk("�ڶ���תְ�����Ҫ�������ĵ��ˣ���������ٵ���һ�ΰ�.");
	cm.dispose();
    } else if (status == 21) {
	cm.sendSimple("����תְ��Ϊʲô��?#b\r\n#L0#ȭ��#l\r\n#L1#ǹ��#l#k");
    } else if (status == 22) {
	if (selection == 0) {
	    jobName = "ȭ��";
	    job = 510; // FIGHTER
	} else if (selection == 1) {
	    jobName = "ǹ��";
	    job = 520; // PAGE
	} else {
	    jobName = "ǹսʿ";
	    job = 130; // SPEARMAN
	}
	cm.sendYesNo("�������תְ��Ϊ #r" + jobName + "#k?");
    } else if (status == 23) {
	cm.changeJob(job);
	cm.sendOk("�ðɣ����Ѿ���ת�ˣ���������������.");
	cm.dispose();
    }
}