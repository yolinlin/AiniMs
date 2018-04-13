importPackage(Packages.server.maps);

var status = 0;

var maps = Array(
Array(500000000,3000,2900),
Array(702000000,3000,2900),
Array(800000000,3000,2900),
Array(600000000,3000,2900),
Array(540000000,3000,2900),
Array(550000000,3000,2900),
Array(701000000,3000,2900),
Array(219000000,3000,2900)
);
var selectedMap = -1;
var cost = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if ((status <= 2 && mode == 0) || (status == 5 && mode == 1)){
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (cm.getPlayer().getMapId() == 950000000) {
		if (status == 0) {
				cm.sendNext("Ϊ�˴ӷ�æ���ճ��н��ѣ�ȥ����һ��������ô������������������ӱ������Ļ�������ѧ�����ٶ����Ļ��ᣡ����ð�յ����ι�˾Ϊ��׼���ˣ��ḻ��Ȥ��#b��������#k�ײ͡�˭˵��������ܹ����һ����ġ����ǵ�#bð�յ����������ײ�#kֻ��Ҫ#b3000���#k�Ϳ�������ȫ�̡�");
		} else if (status == 1) {
			cm.sendSimple("���ھͿ���ȥ�� #b������س���ð�յ���ɫ�ľ���#k����һ�����ڸ����ε��Ҷ���Ϊ����ṩ�����ȳϵķ�����ô��׼����!\r\n#b#L0#�鿴������·.#k#l");
		} else if (status == 2) {
			if (selection == 0) {
				var selStr = "���������������·��ѡ����Ҫȥ�ĵط�#b";
					for (var i = 0; i < maps.length; i++) {
						selStr += "\r\n#L" + i + "##m" + maps[i][0] + "# #l";
					}
				cm.sendSimple(selStr);
			}
		} else if (status == 3) {
			selectedMap = selection;
			if (cm.getJob() == (Packages.client.MapleJob.BEGINNER)) {
				cost = maps[selectedMap][2];
			} else {
				cost = maps[selectedMap][1];
			}
			cm.sendYesNo("���Ѿ������ã�ȷ��Ҫȥ #b#m" + maps[selectedMap][0] + "##k����ô�㽫Ҫ������ #b" + cost +"���#k. �������ȥ��");
		} else if (status == 4) {
			if (cm.getMeso() < cost) {
				cm.sendPrev("����,��Ǯ����! ��ʵ����̫�ֲ���!�Ҳ��ܴ���ȥ.");
				cm.dispose();
			} else {
				cm.gainMeso(-cost);
				cm.getPlayer().saveLocation(SavedLocationType.WORLDTOUR);
				cm.warp(maps[selectedMap][0], 0);
				cm.dispose();
			}
		}	
	} else {
		if (status == 0) {
			cm.sendSimple ("����������ô��������Ȥ�ɡ�\r\n#L0##b���أ�#m" + cm.getPlayer().getSavedLocation(SavedLocationType.WORLDTOUR) + "# #k#l\r\n#L1##b�����۹�#k#l");
		} else if (status == 1) {
			if (selection == 0) {
				cm.sendOk("�õģ������Ҫ����ĵط�������ǵĸ����ҡ�");
			} else if (selection == 1) {
				cm.sendOk("�����ȥ���ٵ��������ɡ��������ȥ��ʱ�����������ҡ�");
				cm.dispose();
			} 
		} else if (status == 2) {
			var map = cm.getPlayer().getSavedLocation(SavedLocationType.WORLDTOUR);
			if (map == -1) {
				map = 100000000;
			}
			cm.warp(map, 0);
			cm.dispose();
			}
		}
	}
}