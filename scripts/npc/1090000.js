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
	    if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0) {
		cm.sendSimple("你想成为 \r\n#L10#火炮手#l\r\n#L11#海盗#l\r\n#L12#铁胆火车侠#l");
	    } else {
		cm.sendOk("我可以让冒险家成为 #r海盗#k 、#r铁胆火车侠#k或者 #r火炮手#k.");
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
			cm.sendNext("看来你已经很厉害了，那我允许你进行第二次转职.");
		    }
		} else {
		    status = 10;
		    cm.sendNext("你的进步还真是惊人啊.");
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
	  jobName = "海盗";
	  job = 500; 
    sp = 1;
    } else if (selection == 10) {
    jobName = "火炮手";
	  job = 501; 
    sp = 2;
    } else if (selection == 12) {
    jobName = "铁胆火车侠";
	  job = 508; 
    sp = 3;
    }
    cm.sendNext("你的决定真是太正确了，你真的想转职成为 #r" + jobName + "#k?.");
    } else if (status == 2) {
	cm.sendYesNo("你真的想成为 #r" + jobName + "#k ?");
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
  cm.changeJob(501); //火炮手
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
  cm.changeJob(508); //铁胆火车侠
 cm.gainItem(1492000, 1);
      cm.resetStats(4, 4, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
      cm.c.getPlayer().setRemainingAp((cm.getPlayer().getLevel() - 1) * 5 + 8);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, cm.c.getPlayer().getRemainingAp());
      cm.c.getPlayer().setRemainingSp((cm.getPlayer().getLevel() - 10) * 3 + 1);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLESP, cm.c.getPlayer().getRemainingSp());
  }
	cm.sendOk("你已经成为了一个强大的 #r" + jobName + "#k 了.");
	cm.dispose();
    } else if (status == 11) {
	cm.sendNextPrev("你已经做好了二转的准备了吗？你可以成为 #r枪手#k 或者 #r拳手#k.")
    } else if (status == 12) {
	cm.askAcceptDecline("不过首先得通过测试，你准备好了吗？");
    } else if (status == 13) {
	//cm.gainItem(4031008, 1);
	cm.startQuest(100003);
	cm.sendOk("第二次转职真的需要很有耐心的人，所以你就再点我一次吧.");
	cm.dispose();
    } else if (status == 21) {
	cm.sendSimple("你想转职成为什么呢?#b\r\n#L0#拳手#l\r\n#L1#枪手#l#k");
    } else if (status == 22) {
	if (selection == 0) {
	    jobName = "拳手";
	    job = 510; // FIGHTER
	} else if (selection == 1) {
	    jobName = "枪手";
	    job = 520; // PAGE
	} else {
	    jobName = "枪战士";
	    job = 130; // SPEARMAN
	}
	cm.sendYesNo("你真的想转职成为 #r" + jobName + "#k?");
    } else if (status == 23) {
	cm.changeJob(job);
	cm.sendOk("好吧，你已经二转了，不用再来找我了.");
	cm.dispose();
    }
}