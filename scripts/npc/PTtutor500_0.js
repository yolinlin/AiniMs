importPackage(Packages.tools.packet);

var status = -1;

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 0)
        cm.sendNextS("(大家果然都聚集起来了。好像还没开始······她好像还没登场。要先找个位子坐下来吗？)", 17);
    else if (status == 1) {
        cm.dispose();
        cm.movePhantom();
    }
}