function enter(pi) {
    if (pi.getQuestStatus(22404) == 1) {
	pi.playPortalSE();
	pi.warp(923030000, 0);
    } else {
	pi.playerMessage(5, "�ƺ���һ������������ס��ȥ·���ѵ���ƯƯ��ɵģ�");
    }
}