importPackage(Packages.handling.world);
importPackage(Packages.tools.packet);
importPackage(Packages.client.inventory);
importPackage(Packages.tools);
importPackage(Packages.server);
var status = -1;
var chance = Math.floor(Math.random()*4+2);
importPackage(Packages.tools.packet);
var a;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
        cm.sendSimple("�����������Ƕ����Ĳ��������е�ȯ��"+ cm.getPlayer().getCSPoints(2) +"\r\n����ʹ��������ᣬҲ����ʹ��һҹ�ص����ǰ��");
    } else if (status == 1) {
	if (cm.getPlayer().getCSPoints(2) < 1) {
	    cm.sendNext("����һëǮ��û��̫���˰�.");
	    cm.dispose();
	} else {
      if(cm.getClient().getAccID()==1153) {
      cm.sendGetNumber("����ע��ȯ��", chance * 1000,1,210000000);
      } else {
	    cm.sendGetNumber("����ע��ȯ��", 1000,1,210000000);
	}
    }
    } else if (status == 2) {
    	if(cm.getPlayer().getCSPoints(2) < selection) {
		cm.sendNext("��ĵ�ȯ����?");
		cm.dispose();
	    }
    a = selection;
    cm.sendSimple("��ѡ����Ҫ�µ����֡�\r\n#L2#2#l\r\n#L3#3#l\r\n#L4#4#l\r\n#L5#5#l");
    } else if (status == 3) {
    if(selection == 2){
    cm.getPlayer().modifyCSPoints(2, -a);
    if (chance == 2) {
    World.Broadcast.broadcastSmega(CWvsContext.serverNotice(6, "��ҹ�ϲ " + cm.getPlayer().getName() + "�н���. ����� "+ a * 2 +" �ĵ�ȯ.ʵ�����֣�"+ chance +"����ѡ���ǣ�"+ selection +""));
    cm.getPlayer().modifyCSPoints(2,a * 2);
    cm.dispose();
    } else {
    World.Broadcast.broadcastSmega(CWvsContext.serverNotice(6, "���Ĭ�� " + cm.getPlayer().getName() + "�н�ʧ��. ʧȥ�� "+ a +" �ĵ�ȯ.ʵ�����֣�"+ chance +"����ѡ���ǣ�"+ selection +""));
    cm.dispose();
    }
    } else if(selection == 3){
    cm.getPlayer().modifyCSPoints(2,-a);
    if (chance == 3) {
    World.Broadcast.broadcastSmega(CWvsContext.serverNotice(6, "��ҹ�ϲ " + cm.getPlayer().getName() + "�н���. ����� "+ a * 3 +" �ĵ�ȯ.ʵ�����֣�"+ chance +"����ѡ���ǣ�"+ selection +""));
    cm.getPlayer().modifyCSPoints(2,a * 3);
    cm.dispose();
    } else {
    World.Broadcast.broadcastSmega(CWvsContext.serverNotice(6, "���Ĭ�� " + cm.getPlayer().getName() + "�н�ʧ��. ʧȥ�� "+ a +" �ĵ�ȯ.ʵ�����֣�"+ chance +"����ѡ���ǣ�"+ selection +""));
    cm.dispose();
    }
    } else if(selection == 4){
    cm.getPlayer().modifyCSPoints(2,-a);
    if (chance == 4) {
    World.Broadcast.broadcastSmega(CWvsContext.serverNotice(6, "��ҹ�ϲ " + cm.getPlayer().getName() + "�н���. ����� "+ a * 4 +" �ĵ�ȯ.ʵ�����֣�"+ chance +"����ѡ���ǣ�"+ selection +""));
    cm.getPlayer().modifyCSPoints(2,a * 4);
    cm.dispose();
    } else {
    World.Broadcast.broadcastSmega(CWvsContext.serverNotice(6, "���Ĭ�� " + cm.getPlayer().getName() + "�н�ʧ��. ʧȥ�� "+ a +" �ĵ�ȯ.ʵ�����֣�"+ chance +"����ѡ���ǣ�"+ selection +""));
    cm.dispose();
    }
    } else if(selection == 5){
    cm.getPlayer().modifyCSPoints(2,-a);
    if (chance == 5) {
    World.Broadcast.broadcastSmega(CWvsContext.serverNotice(6, "��ҹ�ϲ " + cm.getPlayer().getName() + "�н���. ����� "+ a * 5 +" �ĵ�ȯ.ʵ�����֣�"+ chance +"����ѡ���ǣ�"+ selection +""));
    cm.getPlayer().modifyCSPoints(2,a * 5);
    cm.dispose();
    } else {
    World.Broadcast.broadcastSmega(CWvsContext.serverNotice(6, "���Ĭ�� " + cm.getPlayer().getName() + "�н�ʧ��. ʧȥ�� "+ a +" �ĵ�ȯ.ʵ�����֣�"+ chance +"����ѡ���ǣ�"+ selection +""));
    cm.dispose();
    }
    }
    }
    }