/* Ali
 * 
 * Adobis's Mission I: The Room of Tragedy (280090000)
 * 
 * Zakum Quest NPC Exit
*/

function start() {
    if (cm.haveItem(4031061)) {
	cm.sendNext( "��ϲ����ɽ׶�1! �ð� ... ȥ�� #b#p2030008##k ���н�������ս��." );
    } else {
	cm.sendNext("����û���꣬���ɵ��.");
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