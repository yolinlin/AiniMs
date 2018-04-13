importPackage(Packages.tools);

var returnTo = new Array(104020130, 310000010);//¿ªÍùÎäÁê ¡ú ÎäÁêËÂÔº
var rideTo = new Array(310000010, 104020130);//ÎäÁêËÂÔº ¡ú ¿ªÍùÎäÁê
var birdRide = new Array(200090709, 200090710);//¿ªÍùÎäÁê  ¿ªÍùÌì¿ÕÖ®³Ç
var myRide;
var returnMap;
var map;
var docked;

var timeOnRide = 120; //Seconds

function init() {
    em.setProperty("isRiding","false");
}

function playerEntry(eim, player) {
    myRide = em.getProperty("myRide");
    docked = em.getChannelServer().getMapFactory().getMap(rideTo[myRide]);
    returnMap = em.getChannelServer().getMapFactory().getMap(returnTo[myRide]);
    onRide = em.getChannelServer().getMapFactory().getMap(birdRide[myRide]);
    em.setProperty("isRiding","true");
    player.changeMap(onRide, onRide.getPortal(0));
    eim.startEventTimer(timeOnRide * 1000);
}

function scheduledTimeout() {
	var iter = em.getInstance("aide").getPlayers().iterator();
	while (iter.hasNext()) {
		var player = iter.next();
		player.changeMap(docked, docked.getPortal(0));
		em.getInstance("aide").unregisterPlayer(player);
	}
	em.setProperty("isRiding","false");
	em.disposeInstance("aide");
}

function playerDisconnected(eim, player) {
	em.setProperty("isRiding","false");
  eim.stopEventTimer();
}

function cancelSchedule() {
}
