/* 
 * 
 * Adobis's Mission I: Unknown Dead Mine (280010000)
 * 
 * Zakum PQ NPC (the one and only)
 */

var status = -1;
var selectedType;
var scrolls;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	cm.sendSimple("...#b\r\n#L0#��Ҫ����ʲô��#l\r\n#L1#���ռ�����!#l\r\n#L2#�����ȥ!#l");
    } else if (status == 1) {
	selectedType = selection;
	if (selection == 0) {
	    cm.sendNext("����Ҫ�ռ�7��Կ�ף�ȥĳһ����Ѩ��Ѱ��һֻ�����ӣ���Կ��ȫ�����������ϣ��ͻᱬ��1����ʯ��ĸ����ʱ���������ҡ�")
	    cm.safeDispose();
	} else if (selection == 1) {
	    if (!cm.haveItem(4001018)) { //documents
		cm.sendNext("���ռ�1����ʯ��ĸ��.")
		cm.safeDispose();
	    } else {
		    cm.sendYesNo("����������Ҿͻ�����ʯĸ����Ƭ��");
		    scrolls = true;
	    }
	} else if (selection == 2) {
	    cm.sendYesNo("Are you sure you want to exit? If you're the party leader, your party will also be removed from the mines.")
	}
    } else if (status == 2) {
	var eim = cm.getEventInstance();
	if (selectedType == 1) {
				
	    cm.gainItem(4001018, -1);
	    if (scrolls) {
		cm.gainItem(4001015, -30);
	    }
	    //give items/exp
	    cm.givePartyItems(4031061, 1);
	    if (scrolls) {
		cm.givePartyItems(2030007, 5);
		cm.givePartyExp(20000);
	    } else {
		cm.givePartyExp(12000);
	    }
				
	    //clear PQ

	    if (eim != null) {
	    	eim.finishPQ();
	    }
	    cm.dispose();
	} else if (selectedType == 2) {
	if (eim != null) {
	    if (cm.isLeader())
		eim.disbandParty();
	    else
		eim.leftParty(cm.getChar());
	} else {
		cm.warp(280090000, 0);
	}
	    cm.dispose();
	}
    }
}