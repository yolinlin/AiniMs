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
	    qm.sendNext("最近魔法密林似乎变的不太安宁了 \r\n我好害怕会有可怕的灾难发生。");
	} else if (status == 1) {
	    qm.sendNextPrev("你知道吗？有一天清晨，我去周边菜蘑菇。你猜我看到了什么？ \r\n 我看到了绿色的蘑菇居然会走路，你说是不是很可怕?\r\n \r\n当时我就惊呆了！");
	} else if (status == 2) {
	    qm.askAcceptDecline("所以...我希望你能帮助我，去消灭会走路的绿色蘑菇并取到他们的玩偶来给我！");
	} else if (status == 3) {
	    qm.forceStartQuest();
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {

}