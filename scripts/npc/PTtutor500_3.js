importPackage(Packages.tools.packet);

var status = 42;

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 43) {
        cm.sendNextS("��������������������������", 5, 1402100);
    } else if (status == 44)
        cm.sendNextPrevS("��Ȼһ��ⶼû�С��ѵ��滹���������", 5, 1402400);
    else if (status == 45)
        cm.sendNextPrevS("...", 5, 1402100);
    else if (status == 46)
        cm.sendNextPrevS("�����½��ۻ��磬Ů�ʡ�", 5, 1402102);
    else if (status == 47)
        cm.sendNextPrevS("�ǰ���Ů�ʱ��£�˭֪���Ǹ��⵽���ǲ�������أ�", 5, 1402106);
    else if (status == 48)
        cm.sendNextPrevS("û��û�������ħ������Ҳ���á�", 5, 1402103);
    else if (status == 49)
        cm.sendNextPrevS("�����޻���֮�󣬾ͻ������ס�ϣ��˹�����Բ��������Ǹ�Ů�˵Ļ���", 5, 1402104);
    else if (status == 50)
        cm.sendNextPrevS("�������Ҳ��ҡ�Ļ�����ҾͶ��ᶯҡ��������", 5, 1402105);
    else if (status == 51)
        cm.sendNextPrevS("�ò����׾���������ˣ�Ϊ����ð�յ�������������������˻�����ϣ��˹Ů�ʣ���˵������ʲô�˵���ı����û�������ǣ������ǻ�����ɡ���Ҫ���Ǹ�����������Ů�˵Ļ���ƭ��", 5, 1402101);
    else if (status == 52)
        cm.sendNextPrevS("��ҡ�����������", 5, 1402100);
    else if (status == 53)
        cm.sendNextPrevS("��ѽ�����������������ʿ���������ʵ��", 5, 1402400);
    else if (status == 54)
        cm.sendNextPrevS("֮ǰ������ʥ�ص���ʿ�ţ���ð�յ������������ȷ�ĵ�·��ϣ��˹�������������Ҳ������Ĺ��͡����Ǹ������ˣ����ڻ�����̫��ϣ������������ȷ��ѡ��", 5, 1402400);
    else if (status == 55)
        cm.sendNextPrevS("˵�������Ļʵ���˭�����ѻʵ۵�λ���ó�����", 5, 1402400);
    else if (status == 56)
        cm.sendNextPrevS("Ȼ�������¸������ˡ�", 5, 1402400);
    else if (status == 57)
        cm.sendNextPrevS("�Ҳ�����㣬������һ����֪���룬�Ҹ���ʱ�䣬��������һ�����顣����㻳���ҵĻ�����ӭ��������ҽ��е��顣", 5, 1402400);
    else if (status == 58)
        cm.sendNextPrevS("���������֪����ð�յ�����Ļʵ����ң�ϣ��������������", 5, 1402400);
    else if (status == 59)
        cm.sendNextPrevS("(�������׵�Ӧ��׼�����˰ɡ��������������ڸ��ҳ������𣿺õģ��������һ����������)", 17);
    else if (status == 60) {
        cm.dispose();
        cm.showPhantomWait();
    }
}