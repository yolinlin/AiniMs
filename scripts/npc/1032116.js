function action(mode, type, selection) {
    if (cm.isQuestActive(20718)) {
	cm.forceCompleteQuest(20718);
	cm.sendOk("һ����Ӱһ�������������ƺ��ܳ���ʲô������");
	cm.spawnMonster(2220100,10);
    }
    cm.dispose();
}