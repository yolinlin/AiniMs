/* Dark Lord
	Thief Job Advancement
	Victoria Road : Thieves' Hideout (103000003)

	Custom Quest 100009, 100011
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
	cm.sendOk("那你想好了再来找我吧...");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
 	if (cm.getJob() >= 400 && cm.getJob() <= 434 && cm.getQuestStatus(2351) == 1) {
	    cm.forceCompleteQuest(2351);
	    cm.gainItem(1032076,1); //owl earring
	}
	if (cm.getJob() == 0) {
	    if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0)
		cm.sendNext("你想成为 #r飞侠#k ?");
	    else {
		cm.sendOk("我可以让冒险家成为 #r飞侠#k.")
		cm.dispose();
	    }
	} else {
	    if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 400 && cm.getPlayer().getSubcategory() == 0) {
		if (cm.getQuestStatus(100009) >= 1) {
		    cm.completeQuest(100011);
		    if (cm.getQuestStatus(100011) == 2) {
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
	    } else if (cm.getPlayerStat("LVL") >= 20 && cm.getPlayerStat("LVL") < 30 && cm.getJob() == 400) {
        status = 100;
		    cm.sendNext("你现在来找我，我知道你想干什么，你想成为暗影双刀吗？");
	    } else {
		cm.sendOk("你还未到时候来找我啊.");
		cm.dispose();
	    }
	}
    } else if (status == 1) {
	cm.sendNextPrev("你的选择真是太正确了,飞侠是非常强大的职业.");
    } else if (status == 2) {
	cm.sendYesNo("你真的想成为 #r飞侠#k ?");
    } else if (status == 3) {
	if (cm.getJob() == 0) {
	    cm.resetStats(4, 4, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
	    cm.changeJob(400); // THIEF
	    cm.c.getPlayer().setRemainingAp((cm.getPlayer().getLevel() - 1) * 5 + 8);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, cm.c.getPlayer().getRemainingAp());
	    cm.c.getPlayer().setRemainingSp((cm.getPlayer().getLevel() - 10) * 3 + 1);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLESP, cm.c.getPlayer().getRemainingSp());
 	    if (cm.getQuestStatus(2351) == 1) {
		cm.forceCompleteQuest(2351);
		cm.gainItem(1032076,1); //owl earring
	    }
	}
	cm.gainItem(1332063,1);
	cm.gainItem(1472000,1);
	cm.gainItem(2070015, 500);
	cm.sendOk("你已经成为了一个强大的 #r飞侠#k 了.");
	cm.dispose();
    } else if (status == 11) {
	cm.sendNextPrev("你已经做好了二转的准备了吗？你可以成为 #r刺客#k or #r侠客#k.");
    } else if (status == 12) {
	cm.askAcceptDecline("不过首先得通过测试，你准备好了吗？");
    } else if (status == 13) {
	cm.startQuest(100009);
	cm.sendOk("第二次转职真的需要很有耐心的人，所以你就再点我一次吧.");
	cm.dispose();
    } else if (status == 21) {
	cm.sendSimple("你想转职成为什么呢?#b\r\n#L0#刺客#l\r\n#L1#侠客#l#k");
    } else if (status == 22) {
	var jobName;
	if (selection == 0) {
	    jobName = "刺客";
	    job = 410; // ASSASIN
	} else {
	    jobName = "侠客";
	    job = 420; // BANDIT
	}
	cm.sendYesNo("你真的想转职成为 #r" + jobName + "#k?");
    } else if (status == 23) {
	cm.changeJob(job);
	cm.sendOk("好吧，你已经二转了，不用再来找我了.");
	cm.dispose();
    } else if (status == 101) {
    cm.sendNextPrev("你真的想转职成为 #r暗影双刀#k?我会先让你掉一次线的，这也是必须经过的考验！");
    } else if (status == 102) {
	  cm.resetStats(4, 4, 4, 4);
	  cm.c.getPlayer().setRemainingAp((cm.getPlayer().getLevel() - 1) * 5 + 8);
	  cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, cm.c.getPlayer().getRemainingAp());
    cm.changeJob(430);
    cm.gainItem(4032055, 1);
    cm.gainItem(1342047, 1);
    cm.gainItem(1332007, 1);
    cm.c.getPlayer().changeSingleSkillLevel(SkillFactory.getSkill(4000000), 0, 0);
    cm.c.getPlayer().changeSingleSkillLevel(SkillFactory.getSkill(4001003), 0, 0);
    cm.c.getPlayer().changeSingleSkillLevel(SkillFactory.getSkill(4001005), 0, 0);
    cm.c.getPlayer().changeSingleSkillLevel(SkillFactory.getSkill(4001344), 0, 0);
    cm.c.getPlayer().changeSingleSkillLevel(SkillFactory.getSkill(4001334), 0, 0);
    cm.c.getPlayer().changeSingleSkillLevel(SkillFactory.getSkill(4000012), 10, 10);
    cm.c.getPlayer().changeSingleSkillLevel(SkillFactory.getSkill(4001011), 10, 10);
    cm.c.getPlayer().changeSingleSkillLevel(SkillFactory.getSkill(4001013), 10, 10);
    cm.c.getPlayer().changeSingleSkillLevel(SkillFactory.getSkill(4001003), 10, 10);
    cm.c.getChannelServer().getPlayerStorage().getCharacterByName(cm.c.getPlayer().getName()).getClient().getSession().close();
    cm.c.getChannelServer().getPlayerStorage().getCharacterByName(cm.c.getPlayer().getName()).getClient().disconnect(true, false);
    cm.dispose();
    }
}
