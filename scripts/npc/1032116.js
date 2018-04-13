function action(mode, type, selection) {
    if (cm.isQuestActive(20718)) {
	cm.forceCompleteQuest(20718);
	cm.sendOk("一个黑影一闪而过，书中似乎跑出了什么东西！");
	cm.spawnMonster(2220100,10);
    }
    cm.dispose();
}