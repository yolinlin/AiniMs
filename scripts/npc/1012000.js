/* Author: Xterminator
	NPC Name: 		Regular Cab
	Map(s): 		Victoria Road : Henesys (100000000)
	Description: 		Henesys Cab
*/

var status = 0;
var maps = Array(100000000, 104000000, 102000000, 101000000, 103000000, 120000000, 105000000);
var show;
var sCost;
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    } else if (status >= 2 && mode == 0) {
	cm.sendNext("这里有很多好玩的东西。如果你想到其他村子去，欢迎随时来乘坐出租车～");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("你好～！我是#p1012000#。你想快速安全地移动到其他村庄吗？那样的话，请乘坐为顾客提供最好服务的#b#p1012000##k吧。我们可以以很便宜的价格，将你送到想去的地方。");
    } else if (status == 1) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000 || job == 3000 || job == 2001 || job == 2002 || job == 3001) {
	    var selStr = "新手玩家可以获得#b100%#k的折扣。请选择目的地。#b";
	    for (var i = 0; i < maps.length; i++) {
		if (maps[i] != cm.getMapId()) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# (0 金币)#l";
		}
	    }
	} else {
	    var selStr = "请选择你的目的地吧。按照目的地不同，车费也有所不同。#b";
	    for (var i = 0; i < maps.length; i++) {
		if (maps[i] != cm.getMapId()) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# (1000 金币)#l";
		}
	    }
	}
	cm.sendSimple(selStr);
    } else if (status == 2) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000 || job == 3000 || job == 2001 || job == 2002 || job == 3001) {
	    sCost = 0;
	    show = 0;
	} else {
	    sCost = 1000;
	    show = 1000;
	}
	cm.sendYesNo("看来这里的事情都已经处理完了啊。你真的要移动到 #b#m" + maps[selection] + "##k? 去吗？价格是 #b" + show + " 金币#k.");
	selectedMap = selection;
    } else if (status == 3) {
	if (cm.getMeso() < sCost) {
	    cm.sendNext("你好象没有足够的金币，这样的话，我不能为你服务。");
	} else {
	    cm.gainMeso(-sCost);
	    cm.warp(maps[selectedMap]);
	}
	cm.dispose();
    }
}