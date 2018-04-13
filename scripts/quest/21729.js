var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	
	if (status == 0) {
	    qm.sendNext("勇士，经过我们不懈的努力终于找到了人偶师的洞穴。");
	} else if (status == 1) {
	    qm.sendNextPrev("什么？你进不去？难道这洞穴被符咒封印了？不，不可能！ \r\n 我觉得应该是人偶师设下了暗号。\r\n \r\n对，一定是这样，可是暗号会是什么呢？");
	} else if (status == 2) {
	    qm.askAcceptDecline("暗号....暗号....暗号是什么？？弗朗西斯是....什么暗号呢？");
	} else if (status == 3) {
	    qm.forceStartQuest();
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {

}