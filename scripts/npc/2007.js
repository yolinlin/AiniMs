importPackage(Packages.client);
importPackage(Packages.tools);
var status = -1;

function action(mode, type, selection) {
    if (cm.getPlayer().getLevel() != 1 || cm.getPlayer().getMapId() != 10000) {
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
		cm.sendSimple("����ţ�����»���ɧ�У������ʵ����һ��Ը������Ը��޸�����?\r\n�ðɣ��Ҵ��ˡ��ҿ�����������ѡ�����ְҵ��   \r\n#L6#˫����#l\r\n#L7#��ħ����#l\r\n#b#L3# �Ҳ�����ѡ��Ҳ����޸��㣬�ټ���#l");
    } else if (status == 1) {
if (selection == 6) {
cm.changeJob(2002); //˫����
 cm.gainItem(4032055, 1);
 cm.gainItem(1522038, 1); 
 cm.gainItem(1352005, 1);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
	}
if (selection == 7) {
      cm.changeJob(3001);//��ħ����
      cm.gainItem(4032055, 1);
      cm.gainItem(1322123, 1);
      cm.gainItem(1099000, 1);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
	}
	cm.dispose();
    }
}