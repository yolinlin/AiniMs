var mapid = new Array(200000110,200000120,200000130,200000140,200000150,200000160,200000170);
var platform = new Array("������","��߳�","��ľ��","����","���ﰲ��","ʥ��","���¶�˹̹");
var flight = new Array("�ɴ�","�ɴ�","�ɴ�","�ɺ�","Geenie","�ɴ�","�ɴ�");
var menu;
var select;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if(mode == 0) {
	cm.sendOk("��ȷ����Ҫȥʲô�ط�����ѡ��");
	cm.dispose();
	return;
    }
    if(mode == 1)
	status++;
    else
	status--;
    if(status == 0) {
	menu = "�����֮�ǵ���ͷ���кܶ�������������Ŀ�ĵصĲ�ͬ�������ҵ���Ӧ�����������С����뵽�ĸ�������ȥ������ȥ����Ĵ���";
	for(var i=0; i < platform.length; i++) {
	    menu += "\r\n#L"+i+"##b���� "+platform[i]+"#k#l";
	}
	cm.sendSimple(menu);
    } else if(status == 1) {
	select = selection;
	cm.sendYesNo("��ȷ��Ҫ���� #b "+flight[select]+" ȥ "+platform[select]+"#k?");
    } else if(status == 2) {
	cm.warp(mapid[select], 1);
	cm.dispose();
    }
}