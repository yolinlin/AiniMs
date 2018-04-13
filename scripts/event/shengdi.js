importPackage(Packages.tools);

var lienTo = new Array(104020120, 130000210);
var rideTo = new Array(130000210, 104020120);
var birdRide = new Array(200090032, 200090033);
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
	var iter = em.getInstance("shengdi").getPlayers().iterator();
	while (iter.hasNext()) {
		var player = iter.next();
		player.changeMap(docked, docked.getPortal(0));
		em.getInstance("shengdi").unregisterPlayer(player);
	}
	em.setProperty("isRiding","false");
	em.disposeInstance("shengdi");
}

function playerDisconnected(eim, player) {
	em.setProperty("isRiding","false");
  eim.stopEventTimer();
}

function cancelSchedule() {
}
