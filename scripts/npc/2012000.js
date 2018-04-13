function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    cm.sendOk("现在已经不需要买票了，请直接去码头吧.");
    cm.dispose();
}