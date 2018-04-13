importPackage(Packages.tools.packet);
importPackage(Packages.server.life);
var Orbis_btf;
var Boat_to_Orbis;
var Orbis_Boat_Cabin;
var Orbis_docked;
var Ellinia_btf;
var Ellinia_Boat_Cabin;
var Ellinia_docked;
var toggleMsg = true;

function init() {
    Orbis_btf = em.getChannelServer().getMapFactory().getMap(200000112);
    Ellinia_btf = em.getChannelServer().getMapFactory().getMap(104020111);
    Boat_to_Orbis = em.getChannelServer().getMapFactory().getMap(200090010);
    Boat_to_Ellinia = em.getChannelServer().getMapFactory().getMap(200090000);
    Orbis_Boat_Cabin = em.getChannelServer().getMapFactory().getMap(200090011);
    Ellinia_Boat_Cabin = em.getChannelServer().getMapFactory().getMap(200090001);
    Orbis_docked = em.getChannelServer().getMapFactory().getMap(200000100);
    Ellinia_docked = em.getChannelServer();
    Orbis_Station = em.getChannelServer();
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("docked", "true");
    em.setProperty("entry", "true");
    em.setProperty("haveBalrog", "false");
	if(toggleMsg) {
		//Ellinia_docked.broadcastMessage(CWvsContext.serverNotice(5, "魔法密林开往天空之城的飞船已经到站，需要的请速度上船！"));
		//Orbis_Station.broadcastMessage(CWvsContext.serverNotice(5, "天空之城开往魔法密林的飞船已经到站，需要的请速度上船！"));
	}
    em.schedule("stopentry", 240000); //这个是关闭上船的时间！4分钟！
    em.schedule("takeoff", 300000); // 这个是飞船起飞的时间！5分钟

    em.getChannelServer().getMapFactory().getMap(200090000).killAllMonsters();
    em.getChannelServer().getMapFactory().getMap(200090010).killAllMonsters();
}

function stopentry() {
    em.setProperty("entry","false");
    em.getChannelServer().getMapFactory().getMap(200090011).resetReactors();
    em.getChannelServer().getMapFactory().getMap(200090001).resetReactors();
}

function takeoff() {
    em.warpAllPlayer(200000112, 200090000);
    em.warpAllPlayer(104020111, 200090010);
    em.setProperty("docked","false");
    em.schedule("invasion", 180000); // 召唤蝙蝠怪的时间！  3分钟
    em.schedule("arrived", 600000); // 这个是飞船飞的时间！ 10分钟
}

function arrived() {
    em.warpAllPlayer(200090010, 200000100);
    em.warpAllPlayer(200090011, 200000100);
    em.warpAllPlayer(200090000, 104020110);
    em.warpAllPlayer(200090001, 104020110);
    em.getChannelServer().getMapFactory().getMap(200090010).killAllMonsters();
    em.getChannelServer().getMapFactory().getMap(200090000).killAllMonsters();
    em.setProperty("haveBalrog", "false");
    scheduleNew();
}

function invasion() {
    var numspawn;
    var chance = Math.floor(Math.random()*10+1);
    if(chance <= 5)
        numspawn = 0;
    else
        numspawn = 2;
    if(numspawn > 0) {
        for(var i=0; i < numspawn; i++) {
            Boat_to_Orbis.spawnMonsterOnGroudBelow(MapleLifeFactory.getMonster(8150000), new java.awt.Point(485, -221));
            Boat_to_Ellinia.spawnMonsterOnGroudBelow(MapleLifeFactory.getMonster(8150000), new java.awt.Point(-590, -221));
        }
        Boat_to_Orbis.broadcastMessage(CField.musicChange("Bgm04/ArabPirate"));
        Boat_to_Ellinia.broadcastMessage(CField.musicChange("Bgm04/ArabPirate"));
        em.setProperty("haveBalrog","true");
    }
}

function cancelSchedule() {
}