importPackage(Packages.handling.world);
importPackage(Packages.tools.packet);
importPackage(Packages.client.inventory);
importPackage(Packages.tools);
importPackage(Packages.server);

var items = Array(2531000, 2531000, 5450000, 5450000, 5064200, 5064200, 2049301,2049301,5062300, 5062300, 4310020, 5510000, 5510000, 5211048, 5360042, 5040004, 5040004);
var coins = Array(11900, 119000, 560,  5600, 9990, 99900, 5000, 50000, 15900, 159000, 1000, 500, 5000, 20000, 20000, 9900, 99000);
var shuliang = Array(1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 1, 10, 1, 1, 1, 10);
var status = 0;

function start() {
    var selStr = "��ӭ�������﹫԰��������Ի�ȡ�ܶ����õĶ���Ŷ!\r\n���е��:"+ cm.getPlayer().getCSPoints(2) +"\r\n\r\n#b";
    for (var i = 0; i < items.length; i++) {
	selStr += "#L" + i + "##i" + items[i] + "# " + shuliang[i] + "�� " + coins[i] + " ��� (����)#l\r\n";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode == 1 && selection >= 0 && selection < items.length) {
	if (!cm.canHold(items[selection])) {
	    cm.sendOk("��ı���ʣ����������.");
	} else if (cm.getPlayer().getCSPoints(2)<coins[selection]) {
	    cm.sendOk("��û���㹻�ĵ��.");
	} else {
	    cm.getPlayer().modifyCSPoints(2, -coins[selection]);
	    cm.gainItem(items[selection], shuliang[selection]);
	}
    }
    cm.dispose();
}