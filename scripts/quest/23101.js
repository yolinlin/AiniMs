var status = -1;

//member of resistance.
function start(mode, type, selection) {
	    qm.forceStartQuest();
	    qm.dispose();
	}
function end(mode, type, selection) {
    qm.forceStartQuest(23103);
    qm.forceStartQuest(23128, "1");
    qm.forceStartQuest();
    qm.forceCompleteQuest();
    qm.dispose();
}