/* Ali
 * 
 * Adobis's Mission I: The Room of Tragedy (280090000)
 * 
 * Zakum Quest NPC Exit
*/

function start() {
    if (cm.haveItem(4031061)) {
	cm.sendNext( "恭喜你完成阶段1! 好吧 ... 去找 #b#p2030008##k 进行接下来的战斗." );
    } else {
	cm.sendNext("任务都没做完，你个傻逼.");
    }
}

function action(mode, type, selection){
    if (mode == 1) {
	cm.removeAll(4001015);
	cm.removeAll(4001016);
	cm.removeAll(4001018);
	cm.warp(211042300, 0);
    }
    cm.dispose();
}