/* Author: aaroncsn(MapleSea Like)
	NPC Name: 		Small Trunk
	Map(s): 		Victoria Road : Top of the Tree That Grew (101010103)
	Description: 		A tree
*/
function start(){
	if (cm.isQuestActive(20716)) {
	    cm.gainItem(4032142,1);
	    cm.sendNext("�����ҵ�ȫ����Һ������ɡ�");
	} else {
  cm.sendOk("��Ƥ�ҷ�����ζ���ҵı��ӷ�����");
	cm.dispose();
 	 }
 	 	cm.dispose();
	}