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
		//Ellinia_docked.broadcastMessage(CWvsContext.serverNotice(5, "ħ�����ֿ������֮�ǵķɴ��Ѿ���վ����Ҫ�����ٶ��ϴ���"));
		//Orbis_Station.broadcastMessage(CWvsContext.serverNotice(5, "���֮�ǿ���ħ�����ֵķɴ��Ѿ���վ����Ҫ�����ٶ��ϴ���"));
	}
    em.schedule("stopentry", 240000); //����ǹر��ϴ���ʱ�䣡4���ӣ�
    em.schedule("takeoff", 300000); // ����Ƿɴ���ɵ�ʱ�䣡5����

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
    em.schedule("invasion", 180000); // �ٻ�����ֵ�ʱ�䣡  3����
    em.schedule("arrived", 600000); // ����Ƿɴ��ɵ�ʱ�䣡 10����
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