
var status = 0;

function start() {
    cm.sendYesNo("你真的想去万神殿?");
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(400000000);
    }
    cm.dispose();
}