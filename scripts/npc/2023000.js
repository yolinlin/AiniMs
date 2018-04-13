var toMap = new Array(211040200,220050300,240030000,211000000,220000000,240000000,105000000,105030000);
var cost = new Array(10000,25000,55000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,10000,25000,55000);
var location;
var status = 0;

function start() {
    switch(cm.getPlayer().getMapId()) {
        case toMap[3]: location = 0; break;
        case toMap[4]: location = 1; break;
        case toMap[5]: location = 2; break;
        case toMap[6]: location = 7; break;
        case toMap[7]: location = 6; break;
        case toMap[0]: location = 3; break;
        case toMap[1]: location = 4; break;
        case toMap[2]: location = 5; break;
    }
    cm.sendNext("你好!这里是危险出租车，你想方便又快捷的从 #r#m"+cm.getPlayer().getMap().getId()+"##k 到达 #b#m"+toMap[location]+"##k 吗？ 只需要付车费 #b"+cost[location]+" 金币#k 就可以到达了！");
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else if (mode == 0)
        cm.dispose();
    else
        status++;
    if (status == 1)
        cm.sendYesNo("你真的打算付出 #b"+cost[location]+" 金币#k去 #b#m"+toMap[location]+"##k?");
    else if (status == 2) {
        if (cm.getMeso() < cost[location]) {
            cm.sendNext("你的金币不够啊，真穷");
        } else {
            cm.warp(toMap[location]);
            cm.gainMeso(-cost[location]);
        }
        cm.dispose();
    }
}