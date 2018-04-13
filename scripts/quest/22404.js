var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.sendNext("嗯····那个····你有看见过我的小猪吗？");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendAcceptDecline("我没听错吧？你想要制作鞍子？这可是一项伟大的工程，你会付出血的代价，你可要有心理准备！");
    } 
     else if (status == 1) {
        qm.forceStartQuest();
        qm.sendNext("好吧，我想你应该考虑的很清楚了\r\n（我头上的两只漂漂猪似乎对这蘑菇房很感兴趣）");

    } 
    else if (status == 2) {
        qm.sendNext("少侠，请留步，请允许我助你一臂之力！\r\n \r\n 但作为代价你必须支付我 #r10,000,000#n 金币 \r\n#k 后悔了？不想让我帮助你？那你也必须支付这笔钱，还记得我说过，你会付出血的代价吗？");
    } 
    else if (status == 3) {
	    qm.warp(923030000, 0);
	    qm.dispose(); 
    }
}
function end(mode, type, selection) {

}