var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.sendNext("�š��������Ǹ������������п������ҵ�С����");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendAcceptDecline("��û����ɣ�����Ҫ�������ӣ������һ��ΰ��Ĺ��̣���Ḷ��Ѫ�Ĵ��ۣ����Ҫ������׼����");
    } 
     else if (status == 1) {
        qm.forceStartQuest();
        qm.sendNext("�ðɣ�������Ӧ�ÿ��ǵĺ������\r\n����ͷ�ϵ���ֻƯƯ���ƺ�����Ģ�����ܸ���Ȥ��");

    } 
    else if (status == 2) {
        qm.sendNext("��������������������������һ��֮����\r\n \r\n ����Ϊ���������֧���� #r10,000,000#n ��� \r\n#k ����ˣ��������Ұ����㣿����Ҳ����֧�����Ǯ�����ǵ���˵������Ḷ��Ѫ�Ĵ�����");
    } 
    else if (status == 3) {
	    qm.warp(923030000, 0);
	    qm.dispose(); 
    }
}
function end(mode, type, selection) {

}