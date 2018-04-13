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
	cm.sendOk("����������������Ұ�...");
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
		cm.sendNext("�����Ϊ #r����#k ?");
	    else {
		cm.sendOk("�ҿ�����ð�ռҳ�Ϊ #r����#k.")
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
			cm.sendNext("�������Ѿ��������ˣ�������������еڶ���תְ.");
		    }
		} else {
		    status = 10;
		    cm.sendNext("��Ľ��������Ǿ��˰�.");
		}
	    } else if (cm.getPlayerStat("LVL") >= 20 && cm.getPlayerStat("LVL") < 30 && cm.getJob() == 400) {
        status = 100;
		    cm.sendNext("�����������ң���֪�������ʲô�������Ϊ��Ӱ˫����");
	    } else {
		cm.sendOk("�㻹δ��ʱ�������Ұ�.");
		cm.dispose();
	    }
	}
    } else if (status == 1) {
	cm.sendNextPrev("���ѡ������̫��ȷ��,�����Ƿǳ�ǿ���ְҵ.");
    } else if (status == 2) {
	cm.sendYesNo("��������Ϊ #r����#k ?");
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
	cm.sendOk("���Ѿ���Ϊ��һ��ǿ��� #r����#k ��.");
	cm.dispose();
    } else if (status == 11) {
	cm.sendNextPrev("���Ѿ������˶�ת��׼����������Գ�Ϊ #r�̿�#k or #r����#k.");
    } else if (status == 12) {
	cm.askAcceptDecline("�������ȵ�ͨ�����ԣ���׼��������");
    } else if (status == 13) {
	cm.startQuest(100009);
	cm.sendOk("�ڶ���תְ�����Ҫ�������ĵ��ˣ���������ٵ���һ�ΰ�.");
	cm.dispose();
    } else if (status == 21) {
	cm.sendSimple("����תְ��Ϊʲô��?#b\r\n#L0#�̿�#l\r\n#L1#����#l#k");
    } else if (status == 22) {
	var jobName;
	if (selection == 0) {
	    jobName = "�̿�";
	    job = 410; // ASSASIN
	} else {
	    jobName = "����";
	    job = 420; // BANDIT
	}
	cm.sendYesNo("�������תְ��Ϊ #r" + jobName + "#k?");
    } else if (status == 23) {
	cm.changeJob(job);
	cm.sendOk("�ðɣ����Ѿ���ת�ˣ���������������.");
	cm.dispose();
    } else if (status == 101) {
    cm.sendNextPrev("�������תְ��Ϊ #r��Ӱ˫��#k?�һ��������һ���ߵģ���Ҳ�Ǳ��뾭���Ŀ��飡");
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
