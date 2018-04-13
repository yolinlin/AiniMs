function enter(pi) {
    var returnMap = pi.getSavedLocation("LVYOU");
    pi.clearSavedLocation("LVYOU");

    if (returnMap  == 123456789) {
	returnMap = 102000000;
    }
    var target = pi.getMap(returnMap);
    var portal;
    if (portal == null) {
	portal = target.getPortal(0);
    }
    if (pi.getMapId() != target) {
	pi.getPlayer().changeMap(target, portal);
    }
}