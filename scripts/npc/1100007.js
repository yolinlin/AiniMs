/*
	Hak - Cabin <To Mu Lung>(200000141) / Mu Lung Temple(250000100) / Herb Town(251000000)
*/
var menu = new Array("ʥ��","������");
var cost = new Array(80,200);
var hak;
var display = "";
var btwmsg;
var method;

function start() {
    status = -1;
    hak = cm.getEventManager("shengdi");
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
	    if(cm.getMapId() == 104020120 && i < 1) {
		display += "\r\n#L"+i+"##b"+menu[i]+"("+cost[i]+" ���)#k";
	    } else if(cm.getMapId() == 130000210 && i > 0 && i < 3) {
		display += "\r\n#L"+i+"##b"+menu[i]+"("+cost[i]+" ���)#k";
	    }
	}
	if(cm.getMapId() == 104020120) {
	    btwmsg = "#b������#k �� #bʥ��#k";
	} else if(cm.getMapId() == 130000210) {
	    btwmsg = "#bʥ��#k �� #b������#k";
	}
	if(hak.getProperty("isRiding").equals("true")) {
	    cm.sendOk("�����ڴ����ˣ����Եȣ�");
      cm.dispose();
	} else {
	    cm.sendSimple("��ð��� ����� "+btwmsg+" ȥ��. �ҿ��Դ����ȥ��, ��������Ҫһ��ʱ�����Ǯ?\r\n"+display);
	}
    } else if(status == 1) {
	if(selection == 2) {
	    cm.sendYesNo("Will you move to #b"+menu[2]+"#k now? If you have #b"+cost[2]+" mesos#k, I'll take you there right now.");
	} else {
	    if(cm.getMeso() < cost[selection]) {
		cm.sendNext("������û��ô��Ǯ��?");
		cm.dispose();
	    } else {
		if(cm.getMapId() == 0) {
		    cm.gainMeso(-cost[3]);
		    cm.warp(140020300);
		    cm.dispose();
		} else {
		    if(hak.getProperty("isRiding").equals("false")) {
			cm.gainMeso(-cost[selection]);
			hak.newInstance("shengdi");
			hak.setProperty("myRide",selection);
			hak.getInstance("shengdi").registerPlayer(cm.getChar());
			cm.dispose();
		    } else {
			cm.sendNext("�����ڴ����ˣ����Եȣ�");
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