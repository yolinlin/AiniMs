function enter(pi) {
    if (pi.isQuestActive(20752)) {
  pi.showInstruction("啊，这是次元缝隙？有股黑暗的力量好像要把我吸进去一样！快走！", 110, 20);
	pi.forceCompleteQuest(20752);
    }
    pi.warp(272030000,0);
}