/* Author: aaroncsn (MapleSea Like)(Incomplete- Needs skin id)
	NPC Name: 		Laila
	Map(s): 		The Burning Road: Ariant(2600000000)
	Description: 	Skin Care Specialist
*/

var status = 0;
var skin = Array(0, 1, 2, 3, 4);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status >= 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendNext("�Ǻǡ���ã���ӭ���ٰ��ﰲ�ػ������ġ�������Ů��������˵ĸ߼��������ġ�ֻҪ��#b���ܻ�Ա��#k�Ļ�������ʱ���Ե�����������Ƥ�������������Կ���");
        } else if (status == 1) {
            cm.sendStyle("�����ǻ������Ŀ��ŵĻ�е�����Բ鿴�������Ч��������Ҫʲô����Ƥ���أ�����ѡһ�¡�", skin);
        } else if (status == 2) {
            cm.dispose();
            if (cm.haveItem(5153015) == true) {
                cm.gainItem(5153015, -1);
                cm.setSkin(skin[selection]);
                cm.sendOk("Enjoy your new and improved skin!");
            } else {
                cm.sendNext("Hmmm... I don't think you have our Skin Care coupon with you. Without it, I can't give you the treatment");
            }
        }
    }
}