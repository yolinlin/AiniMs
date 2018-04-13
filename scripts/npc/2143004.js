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
                cm.sendOk("你是来自寻死路的吗？");
                cm.dispose();
                return;
            }
            cm.sendSimple("如果想要创建远征队挑战女皇就要从我这里开始，你想？ #b\r\n\r\n#L0#创建远征队伍#l\r\n#L1#参加远征队伍#l\r\n\r\n#d");
        } else if (status == 1) {
            state = selection;
            if (selection == 0)
                cm.sendGetText("创建新的远征队伍，你需要设置一个密码来控制不必要的进入！在下面输入进入密码。并告诉你希望和你一起战斗的人！#k\r\n");
            
            else if (selection == 1)
                cm.sendGetText("如果想要加入挑战女皇的队伍，您需要输入密码。如果你不知道它是什么，请你需要你的队伍领导。");
            
        } else if (status == 2) {
            var em = cm.getEventManager("CygnusBattle");
            var passwd = cm.getText();
            if (em == null)
                cm.sendOk("系统错误.请稍后再试!");
            else {
                if (state == 0) { // Leader
                    if (getEimForString(em,passwd) != null)
                        cm.sendOk("你不能使用此密码!");
                    else { // start Zakum Battle
                        var eim = em.newInstance("Cygnus" + passwd);
                        em.startInstance(eim,cm.getPlayer().getName());
                        eim.registerPlayer(cm.getPlayer());
                    }
                }
                if (state == 1) { // Member
                    var eim = getEimForString(em,passwd);
                    if (eim == null)
                        cm.sendOk("目前这个密码并未注册任何战斗！");
                    else {
                            if (eim.getPlayers().size() < maxPlayers)
                                eim.registerPlayer(cm.getPlayer());
                            else
                                cm.sendOk("对不起,里面已经满员了!");
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