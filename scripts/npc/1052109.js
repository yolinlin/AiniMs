function start() {
    if(cm.isQuestActive(20710)) {
        cm.gainItem(4032136, 1);
        cm.sendNext("����һ����ֵ���ż��ȥ�ø���϶�˹�����ɡ�");
    } else
        cm.sendNext("����Ͱ�㶼Ҫ����ʲô��û�з�����ֻ�а����������");
    cm.dispose();
}