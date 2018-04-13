var status = -1;

function start() {
		if (cm.getPlayer().getLevel() < 120) {
			cm.sendOk("���ĵȼ�С��80����������ս���װ���������");
			cm.dispose();
			return;
		}
    var em = cm.getEventManager("ChaosHorntail");

    if (em == null) {
	cm.sendOk("�ű�����,����ϵ����Ա.");
	cm.dispose();
	return;
    }
    var prop = em.getProperty("state");

	    var marr = cm.getQuestRecord(160100);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    var time = parseInt(data);
    if (prop == null || prop.equals("0")) {
	var squadAvailability = cm.getSquadAvailability("ChaosHt");
	if (squadAvailability == -1) {
	    status = 0;
	    cm.sendYesNo("��Ҫ��Ϊ���װ�������Զ���Ӷӳ���?");

	} else if (squadAvailability == 1) {
	    // -1 = Cancelled, 0 = not, 1 = true
	    var type = cm.isSquadLeader("ChaosHt");
	    if (type == -1) {
		cm.sendOk("�Ѿ����������롣");
		cm.dispose();
	    } else if (type == 0) {
		var memberType = cm.isSquadMember("ChaosHt");
		if (memberType == 2) {
		    cm.sendOk("���Ѿ���Զ�����Ʋ�С��.���ܽ���Զ������.");
		    cm.dispose();
		} else if (memberType == 1) {
		    status = 5;
		    cm.sendSimple("������ʲô? \r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�˳�Զ����#l");
		} else if (memberType == -1) {
		    cm.sendOk("5���ӽ���Զ�����Ѿ��Զ�ע��.������ע��");
		    cm.dispose();
		} else {
		    status = 5;
		    cm.sendSimple("������ʲô? \r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�˳�Զ����#l");
		}
	    } else { // Is leader
		status = 10;
		cm.sendSimple("Զ���Ӳ���: \r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#���Զ���ӳ�Ա#l \r\n#b#L2#�鿴��������#l \r\n#r#L3#��ʼԶ������#l");
	    // TODO viewing!
	    }
	} else {
			var eim = cm.getDisconnected("ChaosHorntail");
			if (eim == null) {
				var squd = cm.getSquad("ChaosHt");
				if (squd != null) {
					cm.sendYesNo("Զ���ӵ���ս�Ѿ���ʼ.\r\n" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ.");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("��Ҫ��������Զ��������?");
				status = 1;
			}
	}
    } else {
			var eim = cm.getDisconnected("ChaosHorntail");
			if (eim == null) {
				var squd = cm.getSquad("ChaosHt");
				if (squd != null) {
					cm.sendYesNo("Զ���ӵ���ս�Ѿ���ʼ.\r\n" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ.");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("��Ҫ��������Զ��������?");
				status = 1;
			}
    }
}

function action(mode, type, selection) {
    switch (status) {
	case 0:
	    	if (mode == 1) {
			if (cm.registerSquad("ChaosHt", 5, " �ѱ�����Ϊ��������Զ���Ӷӳ������ף������λ��ս����5�����ڱ���.")) {
				cm.sendOk("���Ѿ�������Ϊ���װ�������Զ���Ӷӳ����ڽ�������5�����ڣ����������Զ���ӳ�Ա.�뾡��Ӻö�Ա.����5���Ӻ󽫻�ȡ��Զ���Ӷӳ�.");
			} else {
				cm.sendOk("�����������Զ���ӵĻ�����ô�������Ұ�.");
			}
	    	}
	    cm.dispose();
	    break;
	case 1:
		if (!cm.reAdd("ChaosHorntail", "ChaosHt")) {
			cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
		}
		cm.safeDispose();
		break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("ChaosHt");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("�����Ѿ���Զ�����ڽ���������.");
			}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0) {
		if (!cm.getSquadList("ChaosHt", 0)) {
		    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("ChaosHt", true);
		if (ba == 2) {
		    cm.sendOk("Զ����Ա�Ѿ��ﵽ30�������Ժ�����.");
		} else if (ba == 1) {
		    cm.sendOk("�������Զ����");
		} else {
		    cm.sendOk("���Ѿ���Զ���ӳ�Ա��.");
		}
	    } else {// withdraw
		var baa = cm.addMember("ChaosHt", false);
		if (baa == 1) {
		    cm.sendOk("��ɹ��˳���Զ����");
		} else {
		    cm.sendOk("�㻹����Զ���ӳ�Ա.�����˳�Զ����.");
		}
	    }
	    cm.dispose();
	    break;
	case 10:
	    if (mode == 1) {
		if (selection == 0) {
		    if (!cm.getSquadList("ChaosHt", 0)) {
			cm.sendOk("����δ֪�Ĵ���Զ���Ӿܾ���Ĳ���.");
		    }
		    cm.dispose();
		} else if (selection == 1) {
		    status = 11;
		    if (!cm.getSquadList("ChaosHt", 1)) {
			cm.sendOk("����δ֪�Ĵ���Զ���Ӿܾ���Ĳ���.");
			cm.dispose();
		    }
		} else if (selection == 2) {
		    status = 12;
		    if (!cm.getSquadList("ChaosHt", 2)) {
			cm.sendOk("����δ֪�Ĵ���Զ���Ӿܾ���Ĳ���.");
			cm.dispose();
		    }
		} else if (selection == 3) { // get insode
		    if (cm.getSquad("ChaosHt") != null) {
			var dd = cm.getEventManager("ChaosHorntail");
			dd.startInstance(cm.getSquad("ChaosHt"), cm.getMap(), 160100);
		    } else {
			cm.sendOk("����δ֪�Ĵ���Զ���Ӿܾ���Ĳ���.");
		    }
		    cm.dispose();
		}
	    } else {
		cm.dispose();
	    }
	    break;
	case 11:
	    cm.banMember("ChaosHt", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("ChaosHt", selection);
	    }
	    cm.dispose();
	    break;
	default:
	    cm.dispose();
	    break;
    }
}