var mapid = new Array(200000110,200000120,200000130,200000140,200000150,200000160,200000170);
var platform = new Array("金银岛","玩具城","神木村","武陵","阿里安特","圣地","埃德尔斯坦");
var flight = new Array("飞船","飞船","飞船","仙鹤","Geenie","飞船","飞船");
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
	cm.sendOk("请确定你要去什么地方在做选择。");
	cm.dispose();
	return;
    }
    if(mode == 1)
	status++;
    else
	status--;
    if(status == 0) {
	menu = "在天空之城的码头，有很多升降场。根据目的地的不同，必须找到对应的升降场才行。你想到哪个升降场去，乘坐去哪里的船呢";
	for(var i=0; i < platform.length; i++) {
	    menu += "\r\n#L"+i+"##b开往 "+platform[i]+"#k#l";
	}
	cm.sendSimple(menu);
    } else if(status == 1) {
	select = selection;
	cm.sendYesNo("你确定要乘坐 #b "+flight[select]+" 去 "+platform[select]+"#k?");
    } else if(status == 2) {
	cm.warp(mapid[select], 1);
	cm.dispose();
    }
}