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
			qm.sendNext("好年轻的小伙子啊，你想到获得更强大的力量吗？");
		} else if (status == 1) {
			qm.sendOk("那你必须通过我的测试才行！");			
	    qm.gainItem(4220151, 1);
	    qm.forceStartQuest();
			qm.dispose();
		} 
	}
}

function end(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("嘿？这么快，你果然不一般啊...");
		} else if (status == 1) {
			qm.sendOk("我的测试没这么快就结束的，让我们进入下一个测试吧！");
			qm.removeAll(4220151);
      qm.removeAll(4032342);
      qm.forceCompleteQuest();
			qm.dispose();
		} 
	}
}