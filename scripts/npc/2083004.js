/*function start() {
    if (cm.getPlayer().getClient().getChannel() == 3) {
        cm.dispose();
        cm.openNpc(2083004, 4, 1);
    } else if (cm.getPlayer().getClient().getChannel() == 1 ||cm.getPlayer().getClient().getChannel() == 2 ) {
        cm.dispose();
        cm.openNpc(2083004, 3, 1);
    } else {
        cm.sendOk("ֻ����1-3Ƶ���ſ��ԲμӺ���Զ����\r\n3Ƶ��Ϊ���׺�������1��2Ƶ��Ϊ��ͨ������.");
        cm.dispose();
    }
}*/

var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
	cm.dispose();
    }
    if (cm.getPlayer().getClient().getChannel() != 1) {
    cm.sendOk("ֻ����1Ƶ���ſ��ԲμӺ���Զ����");
        cm.dispose();
    }
    if (status == 0) {
	cm.sendSimple("������ս��һ����#b\n\r #L0#��������#l\r\n#L1#���װ�������#l\r\n");
    } else if (status == 1) {
		if (selection == 0) {
		  cm.dispose();
      cm.openNpc(2083004, 3, 1);
		} else if (selection == 1) {
			cm.dispose();
      cm.openNpc(2083004, 5, 1);
		}
    }
}