/*
	NPC Name: 		Grendel the Really Old
	Map(s): 		Maple Road : Spilt road of choice
	Description: 		Job tutorial, movie clip
*/

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 1) {
            cm.sendNext("�����鷨ʦ�Ļ�,�������Ұ�.");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendNext("ħ��ʦ����ʹ�û���Ч��������ħ��,����������Ӵ�����ʹ�÷ǳ����õĸ���ħ��.2ת��ѧϰ������ħ�����Ը��෴���Եĵ����������˺�Ŷ.");
    } else if (status == 1) {
        cm.sendYesNo("��ô��,�����鷨ʦô?");
    } else if (status == 2) {
        cm.MovieClipIntroUI(true);
        cm.warp(1020200, 0); // Effect/Direction3.img/magician/Scene00
        cm.dispose();
    }
}