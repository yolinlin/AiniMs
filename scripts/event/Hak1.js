importPackage(Packages.tools);

var lienTo = new Array(140020300, 104000000);
var rideTo = new Array(104000000, 140020300);
var birdRide = new Array(200090070, 200090069);
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
    returnMap = em.getChannelServer().getMapFactory().getMap(lienTo[myRide]);
    onRide = em.getChannelServer().getMapFactory().getMap(birdRide[myRide]);
    em.setProperty("isRiding","true");
    player.changeMap(onRide, onRide.getPortal(0));
    eim.startEventTimer(timeOnRide * 1000);
}

function scheduledTimeout() {
	var iter = em.getInstance("Hak1").getPlayers().iterator();
	while (iter.hasNext()) {
		var player = iter.next();
		player.changeMap(docked, docked.getPortal(0));
		em.getInstance("Hak1").unregisterPlayer(player);
	}
	em.setProperty("isRiding","false");
	em.disposeInstance("Hak1");
}

function playerDisconnected(eim, player) {
	em.setProperty("isRiding","false");
  eim.stopEventTimer();
}

function cancelSchedule() {
}
