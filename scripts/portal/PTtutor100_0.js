function enter(pi) {
    if (pi.isQuestActive(25000) || pi.isQuestFinished(25000)) {  
        pi.warp(915000200, "out00");
    } else {
        pi.getPlayer().dropMessage(5, "还没跟管家确认准备是否完成，无法执行计划。去和管家谈谈吧。");
    }
}