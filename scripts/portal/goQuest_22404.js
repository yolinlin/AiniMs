function enter(pi) {
    if (pi.getQuestStatus(22404) == 1) {
	pi.playPortalSE();
	pi.warp(923030000, 0);
    } else {
	pi.playerMessage(5, "似乎被一股神秘力量挡住了去路！难道是漂漂猪干的？");
    }
}