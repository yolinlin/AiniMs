
var status = 0;

function start() {
    cm.sendYesNo("你真的想去金银岛?");
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(104020000);
    }
    cm.dispose();
}