/* Author: Xterminator
	NPC Name: 		���
	Map(s): 		Maple Road : Amherst (1010000)
	Description: 		Talks about Amherst
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNext("������λ�ڲʺ絺�������Ľ�#b#m1010000##k�Ĵ���...���Ѿ�֪���ʺ絺��������ϰ�ĵط��ɣ�����ֻ���ֱȽ����Ĺ��ޣ���������İɡ�");
    } else if (status == 1) {
        cm.sendNextPrev("�����ϣ����ø�ǿ�󣬾�ȥ#b#m60000##k��������˴�ȥ#b������#k���Ǹ����Ĺ�ģ�ܴ�������ǱȲ��ϵá�");
    } else if (status == 2) {
        cm.sendPrev("��˵�ڽ���������ѧ��ר�ŵ�ְҵ���ܡ������ǽ�#b#m102000000##k����...�� ����˵���ﻹ�зǳ������ĸ�ԭ��ׯ���������кܶ�սʿ���Ǹ�ԭ...��������ô���ĵط��أ�");
    } else if (status == 3) {
        cm.dispose();
    }
}