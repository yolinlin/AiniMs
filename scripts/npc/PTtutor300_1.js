var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0)
        cm.sendNextS("切·····凭我的实力，这种事情太简单了。现在该把准备好的衣服穿上去了吗？", 17);
    else if (status == 1) {
        cm.warp(915000301, 0);
        cm.dispose();
    }
}