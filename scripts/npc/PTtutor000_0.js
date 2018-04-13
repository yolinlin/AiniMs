var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0)
        cm.sendNextS("决定的时间终于到了吗？", 17);
    else if (status == 1)
        cm.sendNextPrevS("还挺紧张的。是因为好久没活动了吗？当然，并不是说没有自信。", 17);
    else if (status == 2)
        cm.sendNextPrevS("准备应该全部结束了吧？要是再拖下去，耽误了时机的话，那就太丢脸了。虽然感觉还是有点生疏，不过还是去试试看吧。", 17);
    else if (status == 3) {
        cm.introEnableUI(0);
        cm.dispose();
    }
}