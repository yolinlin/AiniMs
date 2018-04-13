/* 
	NPC Name: 		Shanks
	Map(s): 		Maple Road : Southperry (60000)
	Description: 		Brings you to Victoria Island
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.sendOk("看来你还没有下定决心啊。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	cm.sendYesNo("这里可以坐船到金银岛的明珠港。你确定要去金银岛吗？去了就不可以回来了。");
    } else if (status == 1) {
	if (cm.haveItem(4031801)) {
	    cm.sendNext("哦，原来你有介绍信啊，那我们马上出发吧！");
	} else {
	    cm.sendNext("那让我们走吧……");
	}
    } else if (status == 2) {
	if (cm.haveItem(4031801)) {
	    cm.gainItem(4031801, -1);
	    cm.warp(2010000,0);
	    cm.dispose();
	} else {
	    cm.warp(2010000,0);
	    cm.dispose();
	}
    }
}