/* 	Kelvin
	SingaPore VIP Face changer
*/
var status = -1;
var beauty = 0;
var mface = Array(20109, 20110, 20106, 20108, 20112, 20013);
var fface = Array(21021, 21009, 21010, 21006, 21008, 21012);
var facenew = Array();

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
        facenew = Array();
        if (cm.getChar().getGender() == 0) {
            for (var i = 0; i < mface.length; i++) {
                facenew.push(mface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
            }
        }
        if (cm.getChar().getGender() == 1) {
            for (var i = 0; i < fface.length; i++) {
                facenew.push(fface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
            }
        }
        cm.sendStyle("���ǿ��������ܳ��׸ı������ò�����볢��һ������#b���ܻ�Ա��#k�Ļ�����Ϳ��Եõ��Լ�ϲ������ò������ʱ��ѡ��һ���Լ�ƫ�õ����ݰɡ�", facenew);
    } else if (status == 1) {
        if (cm.setAvatar(5152056, facenew[selection]) == 1) {
            cm.sendOk("����,���������һ���ϲ�������!");
        } else {
            cm.sendOk("�š����ƺ�û������������Ҫ���ض���Ա�����ܱ�Ǹ����û�л�Ա�����Ǿ��޷�Ϊ��������������");
        }
        cm.safeDispose();
    }
}