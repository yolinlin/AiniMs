
var status = 0;

function start() {
    returnmap = cm.getSavedLocation("MOB");
    if (returnmap  == 123456789) {
		returnmap = 100000000; // to fix people who entered the fm trough an unconventional way
	}
    if (cm.getMapId() == 951000000) {
    cm.warp(returnmap);
    cm.clearSavedLocation("MOB");
	cm.dispose();
	return;
    }
    cm.sendYesNo("你想去怪物公园吗?");
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.saveLocation("MOB");
        cm.warp(951000000,1);
    }
    cm.dispose();
}

