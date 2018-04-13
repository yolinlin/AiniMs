var status;
var minLevel = 50;
var state;
var maxPlayers = 30;
 
 
function start() {
    status = -1;
    action(1, 0, 0);
}
 
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if ((cm.getPlayer().getLevel() < minLevel)) {
                cm.sendOk("��������Ѱ��·����");
                cm.dispose();
                return;
            }
            cm.sendSimple("�����Ҫ����Զ������սŮ�ʾ�Ҫ�������￪ʼ�����룿 #b\r\n\r\n#L0#����Զ������#l\r\n#L1#�μ�Զ������#l\r\n\r\n#d");
        } else if (status == 1) {
            state = selection;
            if (selection == 0)
                cm.sendGetText("�����µ�Զ�����飬����Ҫ����һ�����������Ʋ���Ҫ�Ľ��룡����������������롣��������ϣ������һ��ս�����ˣ�#k\r\n");
            
            else if (selection == 1)
                cm.sendGetText("�����Ҫ������սŮ�ʵĶ��飬����Ҫ�������롣����㲻֪������ʲô��������Ҫ��Ķ����쵼��");
            
        } else if (status == 2) {
            var em = cm.getEventManager("CygnusBattle");
            var passwd = cm.getText();
            if (em == null)
                cm.sendOk("ϵͳ����.���Ժ�����!");
            else {
                if (state == 0) { // Leader
                    if (getEimForString(em,passwd) != null)
                        cm.sendOk("�㲻��ʹ�ô�����!");
                    else { // start Zakum Battle
                        var eim = em.newInstance("Cygnus" + passwd);
                        em.startInstance(eim,cm.getPlayer().getName());
                        eim.registerPlayer(cm.getPlayer());
                    }
                }
                if (state == 1) { // Member
                    var eim = getEimForString(em,passwd);
                    if (eim == null)
                        cm.sendOk("Ŀǰ������벢δע���κ�ս����");
                    else {
                            if (eim.getPlayers().size() < maxPlayers)
                                eim.registerPlayer(cm.getPlayer());
                            else
                                cm.sendOk("�Բ���,�����Ѿ���Ա��!");
                    }
                }
            }
            cm.dispose();
        }
    }
}
function getEimForString(em, name) {
    var stringId = "Cygnus" + name;
    return em.getInstance(stringId);
}