/*
Zakum Altar - Summons Zakum.
*/

function act() {
    rm.changeMusic("Bgm06/FinalFight");
	rm.getMap().spawnZakum(-10, -215);
    rm.mapMessage("��������������ٻ�������.");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}
