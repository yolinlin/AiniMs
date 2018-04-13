/* Author: aaroncsn (MapleSea Like)
	NPC Name: 		Shati
	Map(s): 		The Burning Road: Ariant(2600000000)
	Description: 	Assistant Hairdresser
*/

var status = 0;
var beauty = 0;
var mhair = Array(30250, 30350, 30270, 30150, 30300, 30600, 30160, 30700, 30720, 30420);
var fhair = Array(31040, 31250, 31310, 31220, 31300, 31680, 31160, 31030, 31230, 31690, 31210, 31170, 31450);
var hairnew = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status >= 0) {
            if (beauty == 1) {
                cm.sendNext("������û����������׼��.�Ǿ����ú��������Ұ�.");
            }
            if (beauty == 2) {
                cm.sendNext("�ã�֪����.���ºþ��ĺ��������Ұ�.");
            }
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendSimple("����ר���о����͵�����. ��������������. Ҫ������#b���ܻ�Ա��#kk�Ļ����ҿ��԰�������ͷ����.\r\n#b#L0# ������(ʹ����ͨ��Ա��)#l\r\n#L1# Ⱦɫ(ʹ����ͨ��Ա��)#l");
        } else if (status == 1) {
            if (selection == 0) {
                beauty = 1;
                hairnew = Array();
                if (cm.getChar().getGender() == 0) {
                    for (var i = 0; i < mhair.length; i++) {
                        hairnew.push(mhair[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }
                if (cm.getChar().getGender() == 1) {
                    for (var i = 0; i < fhair.length; i++) {
                        hairnew.push(fhair[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }
                cm.sendYesNo("ʹ����ͨ��Ա���Ϳ������������. ���Ҫʹ��#b���ܻ�Ա��#k������ô?");
            } else if (selection == 1) {
                beauty = 2;
                haircolor = Array();
                var current = parseInt(cm.getChar().getHair() / 10) * 10;
                for (var i = 0; i < 8; i++) {
                    haircolor.push(current + i);
                }
                cm.sendYesNo("ʹ��һ���Ա���Ļ����������ɫ. ���Ҫʹ��#b���ܻ�Ա��#k����ô?");
            }
        } else if (status == 2) {
            cm.dispose();
            if (beauty == 1) {
                if (cm.haveItem(5150053) == true) {
                    cm.gainItem(5150053, -1);
                    cm.setHair(hairnew[Math.floor(Math.random() * hairnew.length)]);
                    cm.sendOk("����,����������̾����·��Ͱ�!");
                } else {
                    cm.sendNext("�������㲢û�����ǵĻ�Ա��,�ҿ��²��ܸ�����,�Һܱ�Ǹ.�����ȹ����.");
                }
            }
            if (beauty == 2) {
                if (cm.haveItem(5151035) == true) {
                    cm.gainItem(5151035, -1);
                    cm.setHair(haircolor[Math.floor(Math.random() * haircolor.length)]);
                    cm.sendOk("����,����������̾����·�ɫ��!");
                } else {
                    cm.sendNext("�������㲢û�����ǵĻ�Ա��,�ҿ��²��ܸ���Ⱦ��,�Һܱ�Ǹ.�����ȹ����.");
                }
            }
        }
    }
}