/*
	Description: 	Quest - Hungry Baby Dragon
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 3) {
	    qm.sendNext("*����*����ô�ܾܾ��������������Ű����ͯ��");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("Ӵ�����ˡ������Ҹ�����������ʲô���ֵ�������֤�������ҵ���ʳ����Ҷ����ˣ���������ҵ�������������Ҫ�չ��ҡ�");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.sendNextPrevS("�ţ��һ������׷�����ʲô�����Ҳ�����һ��������С��������ģ�����ʳ���˵�ɣ������ʲô��", 2);
    } else if (status == 2) {
	qm.sendNextPrev("�ˣ����Ǽ�����ǰ�ŵ����ġ�����ô��֪���ҳ�ʲô��������֪�����ǣ�����һ����������������������ҵ����ˡ���Ҫ���Һã�");
    } else if (status == 3) {
	qm.askAcceptDecline("��������Ӧ��һ��ѧϰ�����Ҷ��ˡ����ˣ�����Զ�������Ҫ��ס������һ��Ӥ�����һ�޵ĺܿ죡");
    } else if (status == 4) {
	qm.forceStartQuest();
	qm.sendOkS("#b�������ƺ������ˡ�����������Ҳ����ְָ��������ʲô�Ľ��顣��", 2);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	qm.sendNext("����ʲô����������֪������ʲô����Ϊʲô���ţ��㷢����һ������");
    } else if (status == 1) {
	qm.sendNextS("#b(��ְָ����ҡ�)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrev("�š�������һ��������ȷ���ⲻ��һֻ�����棿�õģ����е��������Ǳ���ģ����������������������");
    } else if (status == 3) {
	qm.sendNextS("#b(�ְֺ����������������ţ����Ƿǳ�С�ġ��ְֻ����������������˵����)", 2);
    } else if (status == 4) {
	qm.sendNextPrev("�������һ����������������̫Σ���ˡ�Ҳ����������Ĳ���Ϊ����һ������Ϊ���Է���һҲ������Ӧ����һ��ð�ռ���ɱ��������");
    } else if (status == 5) {
	qm.sendNextS("#b(�����ɱ�����֣���������û�������κ��£���)", 2);
    } else if (status == 6) {
	qm.sendNextPrev("��Ȼ���Ҹҿ϶��ⲻ��һ��������ֻ��������ľ�塣");
    } else if (status == 7) {
	qm.sendNextS("#b�����������������ȷ�ģ��һ�������������Ȼ������ֻ��һ�����棡#k", 2);
    } else if (status == 8) {
	qm.sendNextPrev("�ǵģ��Һܿ϶�������һ����������棬��������������Σ�ա�����԰���������ߡ�");
    } else if (status == 9) {
	qm.sendNextS("#b(Ϊ���Լ��İ�ȫ������ò�Ҫ���κ���֪����������)#k", 2);
    } else if (status == 10) {
	qm.sendOk("Ŷ����˵����Ѱ�ҵĶ���ι���棿������һ�롣");
    } else if (status == 11) {
	qm.gainExp(180);
	qm.forceCompleteQuest();
	qm.dispose();
    }
}