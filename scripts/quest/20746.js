var status = -1;

function start(mode, type, selection) {
	qm.sendNext("������Ҫһ��ǿ���İ���!���ˣ�����˵�и��а�����ʮ���˵ã����Ǳ���Ҫȥ������");
	qm.forceStartQuest();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.dispose();
}