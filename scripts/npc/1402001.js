var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0)
        cm.sendNextS("�浤�����Ѿ������������ϴ��һ��������к��أ�", 2);
    else if (status == 1)
        cm.sendNextPrev("�����������������𣿱�Ǹ���Ҽǲ������ˡ�������");
    else if (status == 2)
        cm.sendNextPrevS("��Ȼ���������кܶ࣬����ϣ�����ܼ�ס�ҵ��������Ѿ���������ü����ˡ�����������̫�����ˡ�", 2);
    else if (status == 3)
        cm.sendNextPrev("�ԣ��Բ�����Ҳ֪����������������պܽ��š���ʿ��Ա�Ƕ��ۼ�������������������");
    else if (status == 4)
        cm.sendNextPrevS("����������������ô������?", 2);
    else if (status == 5)
        cm.sendNextPrev("�ǵ�Ȼ��֮ǰ�ػ���ϣ��˹Ů�ʿ��ܲ��������Ļʵ�Ѫͳ����������ô�ܲ������أ�");
    else if (status == 6)
        cm.sendNextPrevS("����������Ҳ�ǣ�ԭ����ˡ���˵֮����Ҳ����һ������æ���˻�����", 2);
    else if (status == 7)
        cm.sendNextPrev("һֱ�������ᶨ����������ʿ�ŵ�ϣ��˹Ů�ʺ�����Ϊ������ܵ��˺ܴ�Ĵ�����������ղ�ȥ������ʱ��������ɫ����ǳ��԰ף�����������");
    else if (status == 8)
        cm.sendNextPrevS("���ڳ���ϣ��˹֮�⻹�������ʵ۵����飬�����̫���˰���", 2);
    else if (status == 9)
        cm.sendNextPrev("�ǵ�Ȼ����һֱ���ǳ�Ŭ������ʿ���������ڵķ�չ��Ҳȫ��������������ͻȻ��ð���������Ļʵۡ�������");
    else if (status == 10)
        cm.sendNextPrevS("�治�����š�ϣ��˹������ͳ�Ļ�����˭�����ڵĻʵ��أ�", 2);
    else if (status == 11)
        cm.sendNextPrev("�����ϣ������ʲô�ģ��Ǹ�Ů�������Լ��������Ļʵۡ���������˵���б������۵ģ�������ʿ�ŵ��˶����𾪡�");
    else if (status == 12)
        cm.sendNextPrevS("�������ղŻ���ô���Ű�������������", 2);
    else if (status == 13)
        cm.sendNextPrev("�ǰ�������ʱ��Ҫ�������ڵĻ��ͺ��ˣ�ƫƫ���ֲ��ڡ�����������");
    else if (status == 14)
        cm.sendNextPrev("�Ǹ�Ů�˸���ƫƫ�����ʱ��ĳ�����˵Ҫ֤���Լ���Ѫͳ�������������������ڵ����Ӱ�������");
    else if (status == 15)
        cm.sendNextPrevS("�������������������", 2);
    else if (status == 16)
        cm.sendNextPrev("ϣ������������ƽ�������������ϣ��˹Ů�ʲ��������Ļʵ�Ѫͳ�Ļ�������ô���ء������������Ǿ��Բ���׷��ϣ��˹֮��Ļʵ۵ġ�������");
    else if (status == 17)
        cm.sendNextPrev("�ֲ��ܰ�ʥ�طֳ����顤�����������е����ˡ�������");
    else if (status == 18)
        cm.sendNextPrevS("��̫���ģ��浤��һ������˳������ġ�", 2);
    else if (status == 19)
        cm.sendNextPrev("��Ը��ˡ��������Ǹ���ϣ����Ů��һ��Ҳ����һ���İ��գ��Ż�������ô����¶˵ġ�");
    else if (status == 20)
        cm.sendNextPrevS("Ӧ���ǡ�������������˭��֪���أ�˵�������и������������һ���Ӱ��������ˡ�", 2);
    else if (status == 21)
        cm.sendNextPrev("�������������������˵˭�أ�");
    else if (status == 22)
        cm.sendNextPrevS("������������������������֮��̫���ġ����ҵ�����鳡�Ǳ�ȥ������", 2);
    else if (status == 23)
        cm.sendPrev("�õģ��ټ�");
    else
        cm.dispose();
}