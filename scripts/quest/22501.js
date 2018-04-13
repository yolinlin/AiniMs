/*
	Description: 	Quest - Hungry Baby Dragon
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 3) {
	    qm.sendNext("*纳尼*你怎么能拒绝给你的龙？这是虐待儿童！");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("哟，主人。现在我告诉你我能做什么，轮到你向我证明你能找到的食物…！我饿死了！你可以用我的力量，所以你要照顾我。");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.sendNextPrevS("嗯，我还不明白发生了什么，但我不能让一个可怜的小动物饿死的，对吗？食物，你说吧？你想吃什么？", 2);
    } else if (status == 2) {
	qm.sendNextPrev("嗨，我是几分钟前才诞生的。我怎么会知道我吃什么？所有我知道的是，我是一个龙…我是你的龙。你是我的主人。你要对我好！");
    } else if (status == 3) {
	qm.askAcceptDecline("我想我们应该一起学习。但我饿了。主人，我想吃东西。你要记住，我是一个婴儿！我会哭的很快！");
    } else if (status == 4) {
	qm.forceStartQuest();
	qm.sendOkS("#b（米乐似乎饿极了。你必须给他。也许你爸爸给你对龙吃什么的建议。）", 2);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	qm.sendNext("它是什么，龙神？你想知道龙吃什么？你为什么…嗯？你发现了一条龙？");
    } else if (status == 1) {
	qm.sendNextS("#b(你爸爸告诉我。)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrev("嗯……这是一条龙？你确定这不是一只大蜥蜴？好的，所有的生命都是宝贵的，所以我想你可以留着它…");
    } else if (status == 3) {
	qm.sendNextS("#b(爸爸好像不相信我是龙。嗯，他是非常小的。爸爸会相信如果他听到我说话吗？)", 2);
    } else if (status == 4) {
	qm.sendNextPrev("如果它是一个真正的龙，它就太危险了。也许会喷火？我真的不认为这是一条龙，为了以防万一也许我们应该找一个冒险家来杀死它，。");
    } else if (status == 5) {
	qm.sendNextS("#b(干嘛？！杀了米乐？！但是他没有做错任何事！！)", 2);
    } else if (status == 6) {
	qm.sendNextPrev("当然，我敢肯定这不是一条龙。龙只出现在神木村。");
    } else if (status == 7) {
	qm.sendNextS("#b哈…哈…你绝对是正确的！我怀疑他是龙。当然他可能只是一个蜥蜴！#k", 2);
    } else if (status == 8) {
	qm.sendNextPrev("是的，我很肯定。这是一个怪异的蜥蜴，但它看起来并不危险。你可以把它留在身边。");
    } else if (status == 9) {
	qm.sendNextS("#b(为了自己的安全，你最好不要让任何人知道我是龙。)#k", 2);
    } else if (status == 10) {
	qm.sendOk("哦，你说你在寻找的东西喂蜥蜴？让我想一想。");
    } else if (status == 11) {
	qm.gainExp(180);
	qm.forceCompleteQuest();
	qm.dispose();
    }
}