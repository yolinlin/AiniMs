/* Author: Xterminator
	NPC Name: 		Regular Cab
	Map(s): 		Victoria Road : Henesys (100000000)
	Description: 		Henesys Cab
*/

var status = 0;
var maps = Array(100000000, 104000000, 102000000, 101000000, 103000000, 120000000, 105000000);
var show;
var sCost;
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    } else if (status >= 2 && mode == 0) {
	cm.sendNext("�����кܶ����Ķ�����������뵽��������ȥ����ӭ��ʱ���������⳵��");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("��á�������#p1012000#��������ٰ�ȫ���ƶ���������ׯ�������Ļ��������Ϊ�˿��ṩ��÷����#b#p1012000##k�ɡ����ǿ����Ժܱ��˵ļ۸񣬽����͵���ȥ�ĵط���");
    } else if (status == 1) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000 || job == 3000 || job == 2001 || job == 2002 || job == 3001) {
	    var selStr = "������ҿ��Ի��#b100%#k���ۿۡ���ѡ��Ŀ�ĵء�#b";
	    for (var i = 0; i < maps.length; i++) {
		if (maps[i] != cm.getMapId()) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# (0 ���)#l";
		}
	    }
	} else {
	    var selStr = "��ѡ�����Ŀ�ĵذɡ�����Ŀ�ĵز�ͬ������Ҳ������ͬ��#b";
	    for (var i = 0; i < maps.length; i++) {
		if (maps[i] != cm.getMapId()) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# (1000 ���)#l";
		}
	    }
	}
	cm.sendSimple(selStr);
    } else if (status == 2) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000 || job == 3000 || job == 2001 || job == 2002 || job == 3001) {
	    sCost = 0;
	    show = 0;
	} else {
	    sCost = 1000;
	    show = 1000;
	}
	cm.sendYesNo("������������鶼�Ѿ��������˰��������Ҫ�ƶ��� #b#m" + maps[selection] + "##k? ȥ�𣿼۸��� #b" + show + " ���#k.");
	selectedMap = selection;
    } else if (status == 3) {
	if (cm.getMeso() < sCost) {
	    cm.sendNext("�����û���㹻�Ľ�ң������Ļ����Ҳ���Ϊ�����");
	} else {
	    cm.gainMeso(-sCost);
	    cm.warp(maps[selectedMap]);
	}
	cm.dispose();
    }
}