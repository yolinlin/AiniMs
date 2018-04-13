importPackage(Packages.tools);

var lienTo = new Array(222020200, 222020100);
var rideTo = new Array(222020100, 222020200);
var birdRide = new Array(222020211, 222020111);
var myRide;
var returnMap;
var map;
var docked;

var timeOnRide = 10; //Seconds

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
	var iter = em.getInstance("elevator").getPlayers().iterator();
	while (iter.hasNext()) {
		var player = iter.next();
		player.changeMap(docked, docked.getPortal(0));
		em.getInstance("elevator").unregisterPlayer(player);
	}
	em.setProperty("isRiding","false");
	em.disposeInstance("elevator");
}

function playerDisconnected(eim, player) {
	em.setProperty("isRiding","false");
  eim.stopEventTimer();
}

function cancelSchedule() {
}
