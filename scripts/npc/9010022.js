/**
 * Dimensional Mirror
 * Warps you to Party Quests/Special Maps
 */
var text = "";

function start() {
    if (cm.getPlayerStat("LVL") < 10) {
		cm.askMapSelection("");
		cm.dispose();
		return;
    }
	text += "#0# 阿里安特竞技场"; // Ariant Coliseum
   	if (cm.getPlayerStat("LVL") >= 0) {
        text += "#801# 海外旅游";
    }
    if (cm.getPlayerStat("LVL") >= 25) {
        text += "#1# 武陵道场";
    }
    if (cm.getPlayerStat("LVL") >= 30) {
        text += "#2# 怪物嘉年华 I";
    }
    if (cm.getPlayerStat("LVL") >= 50) {
        text += "#3# 怪物嘉年华 II";
    }
    /*if (cm.getPlayerStat("LVL") >= 60) {
        text += "#4# 幽灵船";
    }*/
    if (cm.getPlayerStat("LVL") >= 40) {
        text += "#5# 奈特的金字塔";
    }
    if (cm.getPlayerStat("LVL") >= 25 && cm.getPlayerStat("LVL") <= 30) {
        text += "#6# 废弃地铁";
    }
    //text += "#7# 幸福村";
    //text += "#8# 黄金寺庙";
    text += "#9# 月秒的年糕";
    text += "#803# 转蛋屋";
	if (cm.getPlayerStat("LVL") >= 20) {
		text += "#10# 组队训练场";
	}
	if (cm.getPlayerStat("LVL") >= 30) {
		text += "#11# 时空裂缝";
	}
	if (cm.getPlayerStat("LVL") >= 40) {
		text += "#12# 毒雾森林";
	}
	if (cm.getPlayerStat("LVL") >= 50) {
		text += "#13# 女神的痕迹";
	}
	if (cm.getPlayerStat("LVL") >= 60) {
		text += "#14# 阿斯旺";
	}
	if (cm.getPlayerStat("LVL") >= 70) {
		text += "#15# Romeo and Juliet";
	}
	if (cm.getPlayerStat("LVL") >= 80) {
		text += "#16# Resurrection of the Hoblin King";
	}
	if (cm.getPlayerStat("LVL") >= 100) {
		text += "#17# Dragon's Nest"; // dragon rider pq
	}
    //text += "#18# The Moon";	
    text += "#19# 闹鬼的宅子";	
	if (cm.getPlayerStat("LVL") >= 25) {
		text += "#802# 地狱大公";
	}

    // text += "#99# Nest of Dead dragon"; // 683010000
    cm.askMapSelection(text);
}

function action(mode, type, selection) {
    if (mode == 1) {
		if (cm.getPlayerStat("LVL") < 10) { // they cannot use any
			cm.dispose();
			return;
		}
		switch (selection) {
			case 0: // Boss Party Quest / Ariant Coliseum
				cm.saveReturnLocation("MULUNG_TC");
				cm.warp(980010000, 3);
				break;
			case 1: // Mu Lung Training Center
				if (cm.getPlayerStat("LVL") >= 25) {
					cm.saveReturnLocation("MULUNG_TC");
					cm.warp(925020000, 4);
				}
				break;
			case 2: // Monster Carnival 1
				if (cm.getPlayerStat("LVL") >= 30) {
					cm.saveReturnLocation("MULUNG_TC");
					cm.warp(980000000, 4);
				}
				break;
			case 3: // Monster Carnival 2
				if (cm.getPlayerStat("LVL") >= 50) {
					cm.saveReturnLocation("MULUNG_TC");
					cm.warp(980030000, 4);
				}
				break;
			case 4: // Dual Raid
				if (cm.getPlayerStat("LVL") >= 60) {
					cm.saveReturnLocation("MULUNG_TC");
					cm.warp(923020000, 0);
				}
				break;
			case 5: // Nett's Pyramid
				if (cm.getPlayerStat("LVL") >= 40) {
					cm.saveReturnLocation("MULUNG_TC");
					cm.warp(926010000, 4);
				}
				break;
			case 6: // Kerning Subway
				if (cm.getPlayerStat("LVL") >= 25 && cm.getPlayerStat("LVL") <= 30) {
					cm.saveReturnLocation("MULUNG_TC");
					cm.warp(910320000, 2);
				}
				break;
			case 7: // Happyville
				cm.saveReturnLocation("MULUNG_TC");
				cm.warp(209000000, 0);
				break;
			case 8: // Golden Temple
				cm.saveReturnLocation("MULUNG_TC");
				cm.warp(950100000, 9);
				break;
			case 9: // Moon Bunny
				cm.saveReturnLocation("MULUNG_TC");
				cm.warp(910010500, 0);
				break;
			case 10: // First Time Together
				if (cm.getPlayerStat("LVL") >= 20) {
					cm.saveReturnLocation("MULUNG_TC");
					cm.warp(910340700, 0);
				}
				break;
			case 11: // Dimensional Crack
				if (cm.getPlayerStat("LVL") >= 30) {
					cm.saveReturnLocation("MULUNG_TC");
					cm.warp(221023300, 2);
				}
				break;
			case 12: // Forest of Poison Haze
				if (cm.getPlayerStat("LVL") >= 40) {
					cm.saveReturnLocation("MULUNG_TC");
					cm.warp(300030100, 1);
				}
				break;
			case 13: // Remnant of the Goddess
				if (cm.getPlayerStat("LVL") >= 50) {
					cm.saveReturnLocation("MULUNG_TC");
					cm.warp(200080101, 1);
				}
				break;
			case 14: // Lord Pirate
				if (cm.getPlayerStat("LVL") >= 60) {
					cm.saveReturnLocation("MULUNG_TC");
					cm.warp(262000000);
				}
				break;
			case 15: // Romeo and Juliet
				if (cm.getPlayerStat("LVL") >= 70) {
					cm.saveReturnLocation("MULUNG_TC");
					cm.warp(261000021, 5);
				}
				break;
			case 16: // Resurrection of the Hoblin King
				if (cm.getPlayerStat("LVL") >= 80) {
					cm.saveReturnLocation("MULUNG_TC");
					cm.warp(211000002, 0);
				}
				break;
			case 17: // Dragon's Nest
				if (cm.getPlayerStat("LVL") >= 100) {
					cm.saveReturnLocation("MULUNG_TC");
					cm.warp(240080000, 2);
				}
				break;
			case 19: // Haunted Mansion
				cm.saveReturnLocation("MULUNG_TC");
				cm.warp(682000000, 0);				
				break;
			case 802: // Astaroth
				if (cm.getPlayerStat("LVL") >= 25) {
					cm.saveReturnLocation("MULUNG_TC");
					cm.warp(677000010, 0);
				}
				break;
			case 801: // 海外旅游
					cm.saveReturnLocation("LVYOU");
					cm.warp(950000000);
				break;
		case 803: // 转蛋屋
					cm.saveReturnLocation("ZHUANDAN");
					cm.warp(749050400);
				break;
		}
    }
    cm.dispose();
}