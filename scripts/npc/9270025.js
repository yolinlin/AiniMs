/* 	Xan
	Lian Hua Hua Skin Care
*/
var status = -1;
var skin = [0, 1, 2, 3, 4, 9];

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendNext("�ޣ���ð�����ӭ���١��������������ġ����������Լ���Ƥ����ø���һ�������¡������������#b���ܻ�Ա��#k�Ļ������Ǿ��ܰ������ã�����ӵ���Լ����������Ƥ������");
    } else if (status == 1) {
        cm.askAvatar("��������ר�ŵĻ�������������ǰ�����Լ����������ӡ�����Ҫ��ʲô����Ƥ��������ѡ��", skin);
    } else if (status == 2) {
        if (cm.setRandomAvatar(5153015, skin) == 1) {
            cm.sendOk("�����,����������̾����·�ɫ��!");
        } else {
            cm.sendOk("�ƺ���û�л����Ա������Ǹ���������޷�Ϊ���ṩ����");
        }
        cm.safeDispose();
    }
}