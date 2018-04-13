function enter(pi) {
    if (pi.getQuestStatus(21720) == 1) {
	pi.warp(910050200,0);
  	} else if (pi.isQuestActive(21728)){
    pi.showInstruction("原来洞穴就在这里，可是怎么进不去！我还是回去找日吉吧！", 110, 20); 
    pi.forceCompleteQuest(21728);
  	} else if (pi.isQuestActive(21731)){
      pi.warp(910510201, 1);    
   	} else if (pi.isQuestActive(21730)){
      pi.warp(910510201, 1);   
    } else {
    	pi.warp(910050300,0);
    }
}