var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("这是一个很重要的决定。");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendPlayerToNpc("准备好了吗，主人？水晶花园现在正停泊在圣地的骑士殿堂上方。当然，下面的人应该没有发现。");
    } else if (status == 1) {
	qm.sendNextS("但是现在圣地的警卫非常森严。情况好像和平常不太一样······骑士殿堂前面有人多警卫骑士正在待命。", 1);
    } else if (status == 2) {
	qm.sendPlayerToNpc("一切都准备好了。现在就看主人的决定······怎么样？你想现在开始圣地潜入作战吗？");
    } else if (status == 3) {
	qm.sendNextPrevS("祝你好运，主人。", 1);
    } else if (status == 4) {
	qm.forceStartQuest();
	qm.dispose();
    }
}