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
			qm.sendNext("既然你能来到这里并且站在老婆子我面前，说明你有一定的实力！\r\n最近有一个怪物一直在骚扰我，我要你帮我处理干净。");
		} else if (status == 1) {
			qm.sendOk("嗯，现在的年轻人都十分勇敢啊....");
} else if (status == 2) {
      qm.forceStartQuest();
			qm.dispose();
		} 
	}
}