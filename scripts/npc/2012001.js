/*
	NPC Name: 		Rini
	Map(s): 		Orbis: Station<To Ellinia> (200000111)
	Description: 		Orbis Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    boat = cm.getEventManager("Boats");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendNext("你还有其他的事情没有做完对不对？");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(boat == null) {
	    cm.sendNext("请联系管理员.");
	    cm.dispose();
	} else if(boat.getProperty("entry") == "true") {
	    cm.sendYesNo("有非常多的空位，你确定要现在上船吗？");
	} else if(boat.getProperty("entry") == "false" && boat.getProperty("docked") == "true") {
	    cm.sendNext("船已经起飞了。");
	    cm.dispose();
	} else {
	    cm.sendNext("我们将在船起飞的前1分钟停止售票，如果想坐船，请等待下一班.");
	    cm.dispose();
	}
    } else if(status == 1) {
	cm.warp(200000112, 0);
	cm.dispose();
    }
}