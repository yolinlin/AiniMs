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
	    qm.sendNext("我急着叫你过来是因为我又看到了可怕的事情！ \r\n我真的好害怕可怕的灾难似乎即将发生。");
	} else if (status == 1) {
	    qm.sendNextPrev("你知道吗？前几天，我去了一趟石人寺院看遗迹。你猜我看到了什么？ \r\n 我看到了孩子拿着人偶，对着我奸笑?\r\n \r\n当时我十分害怕，就跑回来了！");
	} else if (status == 2) {
	    qm.askAcceptDecline("现在我想要你再去看一下，去消灭任何一种绿蘑菇并取到他们的人偶来给我！");
	} else if (status == 3) {
	    qm.forceStartQuest();
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {

}