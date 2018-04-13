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
	cm.sendNext("�㻹������������û������Բ��ԣ�");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(boat == null) {
	    cm.sendNext("����ϵ����Ա.");
	    cm.dispose();
	} else if(boat.getProperty("entry") == "true") {
	    cm.sendYesNo("�зǳ���Ŀ�λ����ȷ��Ҫ�����ϴ���");
	} else if(boat.getProperty("entry") == "false" && boat.getProperty("docked") == "true") {
	    cm.sendNext("���Ѿ�����ˡ�");
	    cm.dispose();
	} else {
	    cm.sendNext("���ǽ��ڴ���ɵ�ǰ1����ֹͣ��Ʊ���������������ȴ���һ��.");
	    cm.dispose();
	}
    } else if(status == 1) {
	cm.warp(200000112, 0);
	cm.dispose();
    }
}