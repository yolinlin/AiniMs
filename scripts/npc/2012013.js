/* 
	NPC Name: 		Sunny
	Map(s): 		Orbis: Station<To Ludibrium> (200000121)
	Description: 		Orbis Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    train = cm.getEventManager("Trains");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendNext("�㻹��ʲô����������û�������");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(train == null) {
	    cm.sendNext("�ű�������������ϵ����Ա�����");
	    cm.dispose();
	} else if (train.getProperty("entry").equals("true")) {
	    cm.sendYesNo("�ǳ��ã����ϻ����㹻��λ�ã���׼������ĳ�Ʊ�����ǽ��������������У����ǲ������ϳ���");
	} else if (train.getProperty("entry").equals("false") && train.getProperty("docked").equals("false")) {
	    cm.sendNext("�����Ѿ���������ȴ���һ�κ��ࡣ");
	    cm.dispose();
	} else {
	    cm.sendNext("�𳵳���ǰ1������ֹͣ��Ʊ����ע��ʱ�䡣");
	    cm.dispose();
	}
    } else if(status == 1) {
	    cm.warp(200000122, 0);
	cm.dispose();
    }
}