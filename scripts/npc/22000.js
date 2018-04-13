/* 
	NPC Name: 		Shanks
	Map(s): 		Maple Road : Southperry (60000)
	Description: 		Brings you to Victoria Island
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.sendOk("�����㻹û���¶����İ���");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	cm.sendYesNo("�������������������������ۡ���ȷ��Ҫȥ��������ȥ�˾Ͳ����Ի����ˡ�");
    } else if (status == 1) {
	if (cm.haveItem(4031801)) {
	    cm.sendNext("Ŷ��ԭ�����н����Ű������������ϳ����ɣ�");
	} else {
	    cm.sendNext("���������߰ɡ���");
	}
    } else if (status == 2) {
	if (cm.haveItem(4031801)) {
	    cm.gainItem(4031801, -1);
	    cm.warp(2010000,0);
	    cm.dispose();
	} else {
	    cm.warp(2010000,0);
	    cm.dispose();
	}
    }
}