
function action(mode, type, selection) {
  returnmap = cm.getSavedLocation("MULUNG_TC");
  cm.warp(returnmap);
  cm.clearSavedLocation("MULUNG_TC");
	cm.dispose();
}