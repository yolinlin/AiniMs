/*
	Hak - Cabin <To Mu Lung>(200000141) / Mu Lung Temple(250000100) / Herb Town(251000000)
*/
var menu = new Array("天空之城","魔法密林");
var cost = new Array(2000,200);
var hak;
var display = "";
var btwmsg;
var method;

function start() {
    status = -1;
    hak = cm.getEventManager("tiankong");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 0 && status == 0) {
	cm.dispose();
	return;
    } else if(mode == 0) {
	cm.sendNext("OK. If you ever change your mind, please let me know.");
	cm.dispose();
	return;
    }
    status++;
    if (status == 0) {
	for(var i=0; i < menu.length; i++) {
	    if(cm.getMapId() == 130000210 && i < 1) {
		display += "\r\n#L"+i+"##b"+menu[i]+"("+cost[i]+" 金币)#k";
	    } else if(cm.getMapId() == 200000100 && i > 0 && i < 3) {
		display += "\r\n#L"+i+"##b"+menu[i]+"("+cost[i]+" 金币)#k";
	    }
	}
	if(cm.getMapId() == 130000210 || cm.getMapId() == 200000100) {
	    btwmsg = "#b圣地#k 到 #b天空之城#k";
	} else if(cm.getMapId() == 130000210) {
	    btwmsg = "#b圣地#k 到 #b魔法密林#k";
	}
	if(cm.getMapId() == 130000210 && hak.getProperty("isRiding").equals("true")) {
	    cm.sendNext("有人在船上了，请稍等！");
	    cm.dispose();
	}
	if(cm.getMapId() == 0) {
	    cm.sendYesNo("Hello there? I'm the crane that flies from "+btwmsg+" and back. I fly around all the time, so I figured, why not make some money by taking travelers like you along for a small fee? It's good business for me. Anyway, what do you think? Do you want to fly to #b"+menu[3]+"#k right now? I only charge #b"+cost[3]+" mesos#k.");
	} else {
	    cm.sendSimple("你好啊， 你想从 "+btwmsg+" 去吗. 我可以带你过去啊, 不过这需要一点时间与金钱?\r\n"+display);
	}
    } else if(status == 1) {
	if(selection == 2) {
	    cm.sendYesNo("Will you move to #b"+menu[2]+"#k now? If you have #b"+cost[2]+" mesos#k, I'll take you there right now.");
	} else {
	    if(cm.getMeso() < cost[selection]) {
		cm.sendNext("你的钱不足?");
		cm.dispose();
	    } else {
		if(cm.getMapId() == 0) {
		    cm.gainMeso(-cost[3]);
		    cm.warp(140020300);
		    cm.dispose();
		} else {
		    if(hak.getProperty("isRiding").equals("false")) {
			cm.gainMeso(-cost[selection]);
			hak.newInstance("tiankong");
			hak.setProperty("myRide",selection);
			hak.getInstance("tiankong").registerPlayer(cm.getChar());
			cm.dispose();
		    } else {
			cm.sendNext("有人在船上了，请稍等！");
			cm.dispose();
		    }
		}
	    }
	}
    } else if(status == 2) {
	if(cm.getMeso() < cost[2]) {
	    cm.sendNext("Are you sure you have enough mesos?");
	    cm.dispose();
	} else {
	    cm.gainMeso(-cost[2]);
	    cm.warp(251000000);
	    cm.dispose();
	}
    }
}