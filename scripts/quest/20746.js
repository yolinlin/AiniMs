var status = -1;

function start(mode, type, selection) {
	qm.sendNext("我们需要一个强力的帮手!对了，我听说有个叫阿梁的十分了得，我们必须要去找他！");
	qm.forceStartQuest();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.dispose();
}