var maps = Array(952000000, 952010000, 952020000, 952030000, 952040000, 953000000, 953010000, 953020000, 953030000, 953040000, 953050000, 954000000, 954010000, 954020000, 954030000, 954040000, 954050000);
var minLevel = Array(15, 40, 60, 60, 50, 70, 70, 115, 130, 120, 135, 120, 125, 130, 140, 150, 165);

function start() {
    var selStr = "\r\n你想进入哪一个呢? \r\n\r\n#b";
    for (var i = 0; i < maps.length; i++) {
	selStr += "#L" + i + "##m" + maps[i] + "# (怪物等级 Lv." + minLevel[i] + ")#l\r\n";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode == 1 && selection >= 0 && selection < maps.length) {
        if (cm.getParty() == null || !cm.isLeader()) {
	    cm.sendOk("请让你的队长来与我对话.");
	} else {
	    var party = cm.getParty().getMembers().iterator();
	    var next = true;
	    while (party.hasNext()) {
		var cPlayer = party.next();
		if (cPlayer.getMapid() != cm.getMapId()) {
		    next = false;
		} 
	    }
	    if (!next) {
		cm.sendOk("请确保你的队员全部都在本地图，.");
	    } else if (cm.haveItem(4310020) < 1) {
    cm.sendOk("你没有怪物公园纪念币了！");
    } else {
		var em = cm.getEventManager("MonsterPark");
		if (em == null || em.getInstance("MonsterPark" + maps[selection]) != null) {
		    cm.sendOk("已经有人在怪物公园里面了.");
		} else {
		    em.startInstance_Party("" + maps[selection], cm.getPlayer());
        cm.givePartyItems(4310020, -1);
		}
	    }
	}
    }
    cm.dispose();
}