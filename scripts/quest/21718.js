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
	    qm.sendNext("不好意思，又这么急着把你叫过来。");
	} else if (status == 1) {
	    qm.sendNextPrev("经过我的二次研究我发现一个秘密。 \r\n 这些绿蘑菇的人偶似乎有着很强大的魔力。\r\n \r\n你觉得这会不会和拿着人偶的孩子有关？");
	} else if (status == 2) {
	    qm.askAcceptDecline("麻烦你再帮助我一下，我还需要一个人偶。并且消灭更多的绿蘑菇！");
	} else if (status == 3) {
	    qm.forceStartQuest();
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {

}