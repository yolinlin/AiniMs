/* Dr. Feeble
	Henesys Random Eye Change.
*/
var status = 0;
var beauty = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNext("�뻻��������? �����������µ���ò���³���������? ��~ �Ұ�����Ը�Գ�.\r\n#L0##b ����(ʹ������������ͨ��Ա��)#l");
    } else if (status == 1) {
        cm.sendYesNo("ʹ����ͨ��Ա���Ļ�,������任����... �����ʹ��#b���ܻ�Ա��#k�任������?");
    } else if (status == 2) {
        var face = cm.getPlayerStat("FACE");
        var facetype;
        if (cm.getPlayerStat("GENDER") == 0) {
            facetype = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014];
        } else {
            facetype = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014];
        }
        for (var i = 0; i < facetype.length; i++) {
            facetype[i] = facetype[i] + face % 1000 - (face % 100);
        }
        if (cm.setRandomAvatar(5152056, facetype) == 1) {
            cm.sendOk("����,���������һ���ϲ�������!");
        } else {
            cm.sendOk("��...��û������ҽԺר�û�Ա��...������˼�޷����������������ޡ�");
        }
        cm.dispose();
    }
}