var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0)
        cm.sendNextS("穿过这个传送口，就是圣地······那里有很多骑士，所以一定要小心。让我发挥一下过去的实力吧，呵呵。", 17);
    else if (status == 1) {
        cm.warp(915000300, 0);
        cm.dispose();
    }
}