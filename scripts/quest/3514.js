var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
      if(qm.getMeso() < 1000000){
	    qm.sendOk("ÇîB.");
	    qm.dispose();
	    } else {
	    qm.sendOk("ÍÁºÀ");
	    qm.gainMeso(-1000000);
	    qm.forceStartQuest();
	    qm.forceStartQuest(3514);
	    qm.dispose();
    }
    }
    }
}

function end(mode, type, selection) {
    if (mode == 0) {
	status--;
    } else {
	status++;
    }
    if (status == 0) {
    if(qm.getMeso() < 1000000){
	    qm.sendOk("ÇîB.");
	    qm.dispose();
	    } else {
	qm.sendOk("ÍÁºÀ");
	    qm.gainMeso(-1000000);
	    qm.forceCompleteQuest();
	    qm.forceCompleteQuest(3514);
	    qm.dispose();
    }
}
}