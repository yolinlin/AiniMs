/* Grandpa Luo
	Mu Lung VIP Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("��ӭ�������������ꡣ�������#b���ܻ�Ա��#k�Ļ����ҿ��Ը���ı䷢�͡�������һ����\r\n#b#L0#�������ͣ�ʹ�ø߼���Ա����#l\r\n#L1#Ⱦɫ��ʹ�ø߼���Ա����#l");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            beauty = 1;
            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [30250, 30350, 30270, 30150, 30300, 30600, 30160];
            } else {
                hair_Colo_new = [31040, 31250, 31310, 31220, 31300, 31680, 31160, 31030, 31230];
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            cm.askAvatar("�ҵ������������ǳ������ġ��������#b���ܻ�Ա��#k�Ϳ����û�һ������.��ѡ��ϲ���ķ��Ͱ�", hair_Colo_new);
        } else if (selection == 1) {
            var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
            hair_Colo_new = [];
            beauty = 2;
            for (var i = 0; i < 8; i++) {
                hair_Colo_new[i] = currenthaircolo + i;
            }
            cm.askAvatar("��ô������һ��ͷ����ɫ����һ�����顣�����#b���ܻ�Ա��#kk��Ա���Ϳ�������������һ����ɫ.", hair_Colo_new);
        }
    } else if (status == 2) {
        if (beauty == 1) {
            if (cm.setAvatar(5150052, hair_Colo_new[selection]) == 1) {
                cm.sendOk("Enjoy your new and improved hairstyle!");
            } else {
                cm.sendOk("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't give you a haircut without it. I'm sorry...");
            }
        } else {
            if (cm.setAvatar(5151036, hair_Colo_new[selection]) == 1) {
                cm.sendOk("Enjoy your new and improved hair colour!");
            } else {
                cm.sendOk("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't dyle your hair without it. I'm sorry...");
            }
        }
        cm.dispose();
    }
}