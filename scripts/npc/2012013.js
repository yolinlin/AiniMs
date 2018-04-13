/* 
	NPC Name: 		Sunny
	Map(s): 		Orbis: Station<To Ludibrium> (200000121)
	Description: 		Orbis Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    train = cm.getEventManager("Trains");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendNext("你还有什么事情再这里没有完成吗？");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(train == null) {
	    cm.sendNext("脚本发生错误，请联系管理员解决。");
	    cm.dispose();
	} else if (train.getProperty("entry").equals("true")) {
	    cm.sendYesNo("非常好，车上还有足够的位置，请准备好你的车票，我们将进入漫长的旅行，你是不是想上车？");
	} else if (train.getProperty("entry").equals("false") && train.getProperty("docked").equals("false")) {
	    cm.sendNext("这班火车已经出发，请等待下一次航班。");
	    cm.dispose();
	} else {
	    cm.sendNext("火车出发前1分钟内停止剪票，请注意时间。");
	    cm.dispose();
	}
    } else if(status == 1) {
	    cm.warp(200000122, 0);
	cm.dispose();
    }
}