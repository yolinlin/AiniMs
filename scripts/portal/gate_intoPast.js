function enter(pi) {
    if (pi.getQuestStatus(3501) == 1 || pi.getQuestStatus(3501) == 2)
    pi.warp(270010000, 4);
    else
    pi.playerMessage("没有接受任务不能进入下一个地点.");
}