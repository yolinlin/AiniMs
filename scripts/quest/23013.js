var status = -1;
importPackage(Packages.client);
importPackage(Packages.tools);

function start(mode, type, selection) {
	    qm.forceStartQuest();
	    qm.dispose();
	}
function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("����һ������Ҫ�ľ�����");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    //if (!qm.getPlayer().isGM()) { //not available, sry
	//qm.dispose();
	//return;
    //}
    if (status == 0) {
	qm.sendYesNo("���Ѿ��������������������һ���ģ����������ر��ʡ���ȷ�������Ϊһ����еʦ��");
    } else if (status == 1) {
	qm.sendNext("�ҵ�����ոճ��ͣ�Ŷ...���������Ļ�еʦ����������ø�ǿ��ʹ�ý�ɫ���ԣ�S���ʵ��������������㲻ȷ�����ʲô��ֻҪ���#b�Զ�����#k.");
	if (qm.getJob() == 3000) {
      qm.changeJob(3500);
      qm.resetStats(4, 4, 4, 4);
      qm.c.getPlayer().setRemainingAp((qm.getPlayer().getLevel() - 1) * 5 + 8);
	    qm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, qm.c.getPlayer().getRemainingAp());
	    qm.c.getPlayer().setRemainingSp((qm.getPlayer().getLevel() - 10) * 3 + 5);
	    qm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLESP, qm.c.getPlayer().getRemainingSp());
	    qm.gainItem(1492014,1); //1492065 desert eagle
	    qm.expandInventory(1, 4);
	    qm.expandInventory(2, 4);
	    qm.expandInventory(4, 4);
	    //30001061 = capture, 30001062 = call, 30001068 = mech dash
	    qm.teachSkill(30001068,1,0);
	}
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendNextPrev("�Ұ����������˱���������Ҫ���ǵ�ʹ����Щ��Ʒ������װ����Ʒ��");
    } else if (status == 3) {
	qm.sendNextPrev("����...��Ҫ��ȥȫ����չʾ�㻪���Ĳ�����");
	qm.safeDispose();
    }
}