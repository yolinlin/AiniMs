var Message = new Array(
"��ӭ����ð�յ�Online."
);


function init() {
    scheduleNew();
}

 function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.SECOND, 5);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 3; // Every 3 minute
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}
 
function start() {
    scheduleNew();
    em.getChannelServer().SaveAll(); 
    //em.getChannelServer().ChannelBroadcastMSG(0,"��Ϸ���ݱ���.");   
    }