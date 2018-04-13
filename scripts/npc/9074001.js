/* Kedrick
	Fishking King NPC
*/

var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
	cm.dispose();
    }
    var carnivalparty = cm.getCarnivalParty();
    if (status == 0) {
	cm.sendSimple("你现在拥有的CP点数是：" + carnivalparty.getTotalCP() + "#b\r\n#L9#玩具棕熊(20)#l\n\r #L0#吹泡泡双鱼(30)#l\r\n#L1#水老鼠(20)#l\r\n#L2#小恶魔(20)#l\r\n#L3#木马骑兵(20)#l\r\n#L4#闹钟啾啾(20)#l\r\n#L5#女机器人(20)#l\r\n#L6#青积木怪(20)#l\r\n#L7#战甲吹泡泡鱼(20)#l\r\n#L8#恶魔之母(20)#l#k");
    } else if (status == 1) {
		if (selection == 0) {
		  if(carnivalparty.getTotalCP() >= 30) {
			cm.spawnMonster(9300128, 1);
			carnivalparty.addCP(cm.c.getPlayer(),-30);
			cm.dispose();
      } else {
      cm.sendOk("CP不足.");
      cm.dispose();
      }
		} else if (selection == 1) {
			if(carnivalparty.getTotalCP() >= 20) {
			cm.spawnMonster(9300129, 1);
			carnivalparty.addCP(cm.c.getPlayer(),-20);
			cm.dispose();
      } else {
      cm.sendOk("CP不足.");
      cm.dispose();
      }
		} else if (selection == 2) {
			if(carnivalparty.getTotalCP() >= 20) {
			cm.spawnMonster(9300130, 1);
			carnivalparty.addCP(cm.c.getPlayer(),-20);
			cm.dispose();
      } else {
      cm.sendOk("CP不足.");
      cm.dispose();
      }
		} else if (selection == 3) {
			if(carnivalparty.getTotalCP() >= 20) {
			cm.spawnMonster(9300131, 1);
			carnivalparty.addCP(cm.c.getPlayer(),-20);
			cm.dispose();
      } else {
      cm.sendOk("CP不足.");
      cm.dispose();
      }
		} else if (selection == 4) {
			if(carnivalparty.getTotalCP() >= 20) {
			cm.spawnMonster(9300132, 1);
			carnivalparty.addCP(cm.c.getPlayer(),-20);
			cm.dispose();
      } else {
      cm.sendOk("CP不足.");
      cm.dispose();
      }
		} else if (selection == 5) {
			if(carnivalparty.getTotalCP() >= 20) {
			cm.spawnMonster(9300133, 1);
			carnivalparty.addCP(cm.c.getPlayer(),-20);
			cm.dispose();
      } else {
      cm.sendOk("CP不足.");
      cm.dispose();
      }
		} else if (selection == 6) {
			if(carnivalparty.getTotalCP() >= 20) {
			cm.spawnMonster(9300134, 1);
			carnivalparty.addCP(cm.c.getPlayer(),-20);
			cm.dispose();
      } else {
      cm.sendOk("CP不足.");
      cm.dispose();
      }
		} else if (selection == 7) {
			if(carnivalparty.getTotalCP() >= 20) {
			cm.spawnMonster(9300136, 1);
			carnivalparty.addCP(cm.c.getPlayer(),-20);
			cm.dispose();
      } else {
      cm.sendOk("CP不足.");
      cm.dispose();
      }
		} else if (selection == 8) {
			if(carnivalparty.getTotalCP() >= 20) {
			cm.spawnMonster(9300135, 1);
			carnivalparty.addCP(cm.c.getPlayer(),-20);
			cm.dispose();
      } else {
      cm.sendOk("CP不足.");
      cm.dispose();
      }
		} else if (selection == 9) {
			if(carnivalparty.getTotalCP() >= 20) {
			cm.spawnMonster(9300127, 1);
			carnivalparty.addCP(cm.c.getPlayer(),-20);
			cm.dispose();
      } else {
      cm.sendOk("CP不足.");
      cm.dispose();
      }
		}
    } else if (status == 2) {
	    if (cm.canHold(2270008,120) && cm.getMeso() >= 300000) {
		if (!cm.haveItem(2270008)) {
		    cm.gainMeso(-300000);
		    cm.gainItem(2270008, 120);
		    cm.sendNext("Happy Fishing~");
		} else {
		    cm.sendNext("You already have fishing bait.");
		}
	    } else {
		cm.sendOk("Please check if you have the required meso or sufficient inventory slot.");
	    }
	    cm.safeDispose();
    }
}