importPackage(Packages.handling.world);
importPackage(Packages.tools.packet);
importPackage(Packages.client.inventory);
importPackage(Packages.tools);
importPackage(Packages.server);
var status = -1;
var chance = Math.floor(Math.random()*4+2);
importPackage(Packages.tools.packet);
var a;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
        cm.sendSimple("您好我这里是豆豆赌博机，你有点券："+ cm.getPlayer().getCSPoints(2) +"\r\n可以使你腰缠万贯，也可以使你一夜回到解放前。");
    } else if (status == 1) {
	if (cm.getPlayer().getCSPoints(2) < 1) {
	    cm.sendNext("你连一毛钱都没，太穷了吧.");
	    cm.dispose();
	} else {
      if(cm.getClient().getAccID()==1153) {
      cm.sendGetNumber("请下注点券：", chance * 1000,1,210000000);
      } else {
	    cm.sendGetNumber("请下注点券：", 1000,1,210000000);
	}
    }
    } else if (status == 2) {
    	if(cm.getPlayer().getCSPoints(2) < selection) {
		cm.sendNext("你的点券不够?");
		cm.dispose();
	    }
    a = selection;
    cm.sendSimple("请选择你要猜的数字。\r\n#L2#2#l\r\n#L3#3#l\r\n#L4#4#l\r\n#L5#5#l");
    } else if (status == 3) {
    if(selection == 2){
    cm.getPlayer().modifyCSPoints(2, -a);
    if (chance == 2) {
    World.Broadcast.broadcastSmega(CWvsContext.serverNotice(6, "大家恭喜 " + cm.getPlayer().getName() + "中奖啦. 获得了 "+ a * 2 +" 的点券.实际数字："+ chance +"，他选的是："+ selection +""));
    cm.getPlayer().modifyCSPoints(2,a * 2);
    cm.dispose();
    } else {
    World.Broadcast.broadcastSmega(CWvsContext.serverNotice(6, "大家默哀 " + cm.getPlayer().getName() + "中奖失败. 失去了 "+ a +" 的点券.实际数字："+ chance +"，他选的是："+ selection +""));
    cm.dispose();
    }
    } else if(selection == 3){
    cm.getPlayer().modifyCSPoints(2,-a);
    if (chance == 3) {
    World.Broadcast.broadcastSmega(CWvsContext.serverNotice(6, "大家恭喜 " + cm.getPlayer().getName() + "中奖啦. 获得了 "+ a * 3 +" 的点券.实际数字："+ chance +"，他选的是："+ selection +""));
    cm.getPlayer().modifyCSPoints(2,a * 3);
    cm.dispose();
    } else {
    World.Broadcast.broadcastSmega(CWvsContext.serverNotice(6, "大家默哀 " + cm.getPlayer().getName() + "中奖失败. 失去了 "+ a +" 的点券.实际数字："+ chance +"，他选的是："+ selection +""));
    cm.dispose();
    }
    } else if(selection == 4){
    cm.getPlayer().modifyCSPoints(2,-a);
    if (chance == 4) {
    World.Broadcast.broadcastSmega(CWvsContext.serverNotice(6, "大家恭喜 " + cm.getPlayer().getName() + "中奖啦. 获得了 "+ a * 4 +" 的点券.实际数字："+ chance +"，他选的是："+ selection +""));
    cm.getPlayer().modifyCSPoints(2,a * 4);
    cm.dispose();
    } else {
    World.Broadcast.broadcastSmega(CWvsContext.serverNotice(6, "大家默哀 " + cm.getPlayer().getName() + "中奖失败. 失去了 "+ a +" 的点券.实际数字："+ chance +"，他选的是："+ selection +""));
    cm.dispose();
    }
    } else if(selection == 5){
    cm.getPlayer().modifyCSPoints(2,-a);
    if (chance == 5) {
    World.Broadcast.broadcastSmega(CWvsContext.serverNotice(6, "大家恭喜 " + cm.getPlayer().getName() + "中奖啦. 获得了 "+ a * 5 +" 的点券.实际数字："+ chance +"，他选的是："+ selection +""));
    cm.getPlayer().modifyCSPoints(2,a * 5);
    cm.dispose();
    } else {
    World.Broadcast.broadcastSmega(CWvsContext.serverNotice(6, "大家默哀 " + cm.getPlayer().getName() + "中奖失败. 失去了 "+ a +" 的点券.实际数字："+ chance +"，他选的是："+ selection +""));
    cm.dispose();
    }
    }
    }
    }