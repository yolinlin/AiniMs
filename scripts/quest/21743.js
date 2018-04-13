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
			qm.sendNext("我画出来的画是不是栩栩如生？");
		} else if (status == 1) {
			qm.sendOk("嗯？你不是来看我画画的？ \r\n你想要特殊墨水？这可需要特殊的材料啊！ \r\n\而且制作费可以很昂贵的。\r\n需要 #r500,000 #k金币");
      qm.forceStartQuest();
			qm.dispose();
		} 
	}
}

function end(mode, type, selection) {
}