/* Author: aaroncsn(MapleSea Like)
	NPC Name: 		Small Trunk
	Map(s): 		Victoria Road : Top of the Tree That Grew (101010103)
	Description: 		A tree
*/
function start(){
	if (cm.isQuestActive(20716)) {
	    cm.gainItem(4032142,1);
	    cm.sendNext("这是我的全部树液，给你吧。");
	} else {
  cm.sendOk("树皮芬芳的气味让我的鼻子发痒。");
	cm.dispose();
 	 }
 	 	cm.dispose();
	}