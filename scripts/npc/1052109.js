function start() {
    if(cm.isQuestActive(20710)) {
        cm.gainItem(4032136, 1);
        cm.sendNext("发现一个奇怪的玩偶，去拿给马迪尔斯看看吧。");
    } else
        cm.sendNext("垃圾桶你都要翻？什么都没有翻到，只有肮脏的垃圾！");
    cm.dispose();
}