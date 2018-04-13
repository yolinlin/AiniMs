importPackage(java.util);
importPackage(Packages.client.inventory);
importPackage(Packages.tools);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
var chance = Math.floor(Math.random()*10+1);
//var chance = 10;
var luk =0 ;
var status = 0;
var display;
var jilv;
var needap = 0;
var beilv = 0.2;   //副装备属性相加后相乘的倍率
var beilv1 = 0.4;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
        status++;
        if (status == 0) {
          if(cm.haveItem(5062300)) {
            chance=chance+2;
          }
          if(cm.getPlayer().isGM())
          chance=10;
        cm.sendNext("#d你好，你需要进行装备强化么?#k #k\r\n#g===================#k#d强化说 明#k#g===================#k\r\n#r注：装备栏的前一格不得为空！强化装备+2包括2以上失败的话会直接损坏,请勇士们做好心理准备！#k #k\r\n强化金币消耗是根据您强化的装备来变更的！");
        } else if (status == 1) {
          if (cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
              cm.sendOk("请把你需要强化的装备放入背包第一格！");
              cm.dispose();
        } else if (cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() > -1) {
              cm.sendOk("对不起，有时限的装备无法被强化!");
              cm.dispose();
        } else {
        var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
        var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
        var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
          if (level <= 15) {
            if (item1.getLevel() == 0)
              var needap = 20000 * 5;
            else
              var needap = 20000 * 5 * (item1.getLevel()+1);
            } else {
              if (item1.getLevel() == 0){
              var needap = level * 5 * 356;
            }else{
              var needap = level * 5 * 356 * (item1.getLevel()+1);
              }
              }
        if (cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getLevel() >= 10) {
		   var newstr = (item1.getStr())* beilv1;
		   var newdex = (item1.getDex())* beilv1;
		   var newint = (item1.getInt())* beilv1;
		   var newluk = (item1.getLuk())* beilv1;
		   var newwatk = (item1.getWatk())* beilv1;
		   var newmatk = (item1.getMatk())* beilv1;
        } else {
		   var newstr = (item1.getStr())* beilv;
		   var newdex = (item1.getDex())* beilv;
		   var newint = (item1.getInt())* beilv;
		   var newluk = (item1.getLuk())* beilv;
		   var newwatk = (item1.getWatk())* beilv;
		   var newmatk = (item1.getMatk())* beilv;
          }
        if(item1.getStr() >= 5){
		   var sumstr = item1.getStr() + newstr;
} else {
var sumstr = item1.getStr();
}
if(item1.getDex() >= 5){
var sumdex = item1.getDex() + newdex;
} else {
var sumdex = item1.getDex();
}
if(item1.getInt() >= 5){
var sumint = item1.getInt() + newint;
} else {
var sumint = item1.getInt();
}
if(item1.getLuk() >= 5){
var sumluk = item1.getLuk() + newluk;
} else {
var sumluk = item1.getLuk();
}
if(item1.getWatk() >= 5){
var sumwatk = item1.getWatk() + newwatk;
} else {
var sumwatk = item1.getWatk();
}
if(item1.getMatk() >= 5){
var summatk = item1.getMatk() + newmatk;
} else {
var summatk = item1.getMatk();
}
       var mek ="";
                       if (item1.getStr() != 0) {
                       mek+="\r\n     >> 力量:"+item1.getStr();
                       }
                       if (item1.getDex() != 0) {
                       mek+="\r\n     >> 敏捷:"+item1.getDex();
                       }
                       if (item1.getInt() != 0) {
                       mek+="\r\n     >> 智力:"+item1.getInt();
                       }
                       if (item1.getLuk() != 0) {
                       mek+="\r\n     >> 运气:"+item1.getLuk();
                       }
                       if (item1.getWatk() != 0) {
                       mek+="\r\n     >> 物理攻击力:"+item1.getWatk();
                       }
                       if (item1.getMatk() != 0) {
                       mek+="\r\n     >> 魔法攻击力:"+item1.getMatk();
                       }
                   var pai ="";
                       if (newstr >= 1) {
                       pai+="\r\n     >> 力量增加:"+newstr;
                       }
                       if (newdex >= 1) {
                       pai+="\r\n     >> 敏捷增加:"+newdex;
                       }
                       if (newint >= 1) {
                       pai+="\r\n     >> 智力增加:"+newint;
                       }
                       if (newluk >= 1) {
                       pai+="\r\n     >> 运气增加:"+newluk;
                       }
                       if (newwatk >= 1) {
                       pai+="\r\n     >> 物理攻击力增加:"+newwatk;
                       }
                       if (newmatk >= 1) {
                       pai+="\r\n     >> 魔法攻击力增加:"+newwatk;
                       }
                   var paiid ="";
                       if (sumstr >= 1) {
                       paiid+="\r\n     >> 力量:"+sumstr;
                       }
                       if (sumdex >= 1) {
                       paiid+="\r\n     >> 敏捷:"+sumdex;
                       }
                       if (sumint >= 1) {
                       paiid+="\r\n     >> 智力:"+sumint;
                       }
                       if (sumluk >= 1) {
                       paiid+="\r\n     >> 运气:"+sumluk;
                       }
                        if (sumwatk >= 1) {
                       paiid+="\r\n     >> 物理攻击力:"+sumwatk;
                       }
                       if (summatk >= 1) {
                       paiid+="\r\n     >> 魔法攻击力:"+summatk;
                       }
		        var add="#r强化前属性#k：\r\n"+mek;

		       add+="\r\n\r\n#r强化增加属性：\r\n#k"+pai;

		       add+="\r\n\r\n#r强化后综合属性：\r\n#k"+paiid;
cm.sendNext("#b"+cm.getPlayer().getName()+"你好,您当前装备#v"+itemId1+"#的强化次数为：#k#r("+item1.getLevel()+"次)#k\r\n\r\n本次强化，金币："+needap+"\r\n"+add);
}
		} else if (status == 2 ) {
var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var item = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
          if (level <= 15) {
            if (item1.getLevel() == 0)
              var needap = 20000 * 5;
            else
              var needap = 20000 * 5 * (item1.getLevel()+1);
            } else {
              if (item1.getLevel() == 0){
              var needap = level * 5 * 356;
            }else{
              var needap = level * 5 * 356 * (item1.getLevel()+1);
              }
              }
              if (cm.getMeso() < needap) {
		            cm.sendOk("#b您的余额不足!#k强化需要#b  "+needap+"金币！");
                  cm.dispose();
                } else {
                cm.gainMeso(-needap);
                }
         if (item.getLevel() <= 1) {
			   if (chance <= 0 ) {
			   if(cm.haveItem(5062300,1)){
			   cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"失败了！此次强化增加了20%几率.",true,cm.getClient().getChannel(),item));
         MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
			   cm.gainItem(5062300,-1);
			   } else 
          cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"失败了！",true,cm.getClient().getChannel(),item));
          MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
				    cm.dispose();
                }
                else if (chance >= 1) {
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
                       cm.sendNext("#r确定要开始强化武器?");
                    luk = 1 ;
                }
}
		  else if ((item.getLevel() >= 2)&&(item.getLevel() <= 8))
           {
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
           if (chance <= 4) {
		   var newstr = (item1.getStr())* 0.17;
		   var newdex = (item1.getDex())* 0.17;
		   var newint = (item1.getInt())* 0.17;         
		   var newluk = (item1.getLuk())* 0.17;
		   var newwatk = (item1.getWatk())* 0.17;
		   var newmatk = (item1.getMatk())* 0.17;
if(item1.getStr() >= 5){
var sumstr = item1.getStr() - newstr;
} else {
var sumstr = item1.getStr();
}
if(item1.getDex() >= 5){
var sumdex = item1.getDex() - newdex;
} else {
var sumdex = item1.getDex();
}
if(item1.getInt() >= 5){
var sumint = item1.getInt() - newint;
} else {
var sumint = item1.getInt();
}
if(item1.getLuk() >= 5){
var sumluk = item1.getLuk() - newluk;
} else {
var sumluk = item1.getLuk();
}
if(item1.getWatk() >= 5){
var sumwatk = item1.getWatk() - newwatk;
} else {
var sumwatk = item1.getWatk();
}
if(item1.getMatk() >= 5){
var summatk = item1.getMatk() - newmatk;
} else {
var summatk = item1.getMatk();
}
var item = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
item.setWatk(sumwatk); //WATK    
item.setMatk(summatk); //MATK    
item.setLevel((item.getLevel() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
if(cm.haveItem(5062300,1)){
			   cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"失败了！此次强化增加了20%几率.",true,cm.getClient().getChannel(),item));
			   cm.gainItem(5062300,-1);
			   } else 
cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"失败了！装备消失了！",true,cm.getClient().getChannel(),item));
cm.dispose();
                }
                 else if (chance >= 5) {
                   			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
                    cm.sendNext("#r确定要开始强化武器?");
                    luk = 1 ;
}
           
           }
           else if (item.getLevel() == 8 )
           {
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
           if (chance <= 7) {
		   var newstr = (item1.getStr())* 0.765;
		   var newdex = (item1.getDex())* 0.765;
		   var newint = (item1.getInt())* 0.765;
		   var newluk = (item1.getLuk())* 0.765;
		   var newwatk = (item1.getWatk())* 0.765;
		   var newmatk = (item1.getMatk())* 0.765;
if(item1.getStr() >= 5){
var sumstr = item1.getStr() - newstr;
} else {
var sumstr = item1.getStr();
}
if(item1.getDex() >= 5){
var sumdex = item1.getDex() - newdex;
} else {
var sumdex = item1.getDex();
}
if(item1.getInt() >= 5){
var sumint = item1.getInt() - newint;
} else {
var sumint = item1.getInt();
}
if(item1.getLuk() >= 5){
var sumluk = item1.getLuk() - newluk;
} else {
var sumluk = item1.getLuk();
}
if(item1.getWatk() >= 5){
var sumwatk = item1.getWatk() - newwatk;
} else {
var sumwatk = item1.getWatk();
}
if(item1.getMatk() >= 5){
var summatk = item1.getMatk() - newmatk;
} else {
var summatk = item1.getMatk();
}
var item = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
item.setWatk(sumwatk); //WATK    
item.setMatk(summatk); //MATK    
					item.setLevel((item.getLevel() - 8));
					MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
					if(cm.haveItem(5062300,1)){
			   cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"失败了！此次强化增加了20%几率.",true,cm.getClient().getChannel(),item));
			   cm.gainItem(5062300,-1);
			   } else 
          cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"失败了！装备消失了！",true,cm.getClient().getChannel(),item));
				    cm.dispose();
                }
                 else if (chance >= 8) {
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
                    cm.sendNext("#r确定要开始强化武器?");
                    luk = 1 ;
}
           
           }
           else if (item.getLevel() == 9 )
           {
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
           if (chance <= 9) {
		   var newstr = (item1.getStr())* 0.805;
		   var newdex = (item1.getDex())* 0.805;
		   var newint = (item1.getInt())* 0.805;
		   var newluk = (item1.getLuk())* 0.805;
		   var newwatk = (item1.getWatk())* 0.805;
		   var newmatk = (item1.getMatk())* 0.805;
if(item1.getStr() >= 5){
var sumstr = item1.getStr() - newstr;
} else {
var sumstr = item1.getStr();
}
if(item1.getDex() >= 5){
var sumdex = item1.getDex() - newdex;
} else {
var sumdex = item1.getDex();
}
if(item1.getInt() >= 5){
var sumint = item1.getInt() - newint;
} else {
var sumint = item1.getInt();
}
if(item1.getLuk() >= 5){
var sumluk = item1.getLuk() - newluk;
} else {
var sumluk = item1.getLuk();
}
if(item1.getWatk() >= 5){
var sumwatk = item1.getWatk() - newwatk;
} else {
var sumwatk = item1.getWatk();
}
if(item1.getMatk() >= 5){
var summatk = item1.getMatk() - newmatk;
} else {
var summatk = item1.getMatk();
}
var item = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
item.setWatk(sumwatk); //WATK    
item.setMatk(summatk); //MATK    
					item.setLevel((item.getLevel() - 9));
					MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
					if(cm.haveItem(5062300,1)){
			   cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"失败了！此次强化增加了20%几率.",true,cm.getClient().getChannel(),item));
			   cm.gainItem(5062300,-1);
			   } else 
          cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"失败了！装备消失了！",true,cm.getClient().getChannel(),item));
				    cm.dispose();
                }
                 else if (chance >= 1) {
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
                    cm.sendNext("#r确定要开始强化武器?");
                    luk = 1 ;
}
           
           }
           else if (item.getLevel() >= 10 ){
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
           if (chance <= 9) {
          MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
					var statup = new java.util.ArrayList();
					if(cm.haveItem(5062300,1)){
			   cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"失败了！此次强化增加了20%几率.",true,cm.getClient().getChannel(),item));
			   cm.gainItem(5062300,-1);
			   } else 
          cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"失败了！装备消失了！",true,cm.getClient().getChannel(),item));
                    cm.gainItem(5062300,1);
				    cm.dispose();
                }
                else if (chance >= 8 ) {
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
                    cm.sendNext("#r确定要开始强化?");
                    luk = 1 ;
}
}
			}else if ((status == 3)||(luk == 1)) {
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
        if (cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getLevel() >= 10) {
		   var newstr = (item1.getStr())* beilv1;
		   var newdex = (item1.getDex())* beilv1;
		   var newint = (item1.getInt())* beilv1;
		   var newluk = (item1.getLuk())* beilv1;
		   var newwatk = (item1.getWatk())* beilv1;
		   var newmatk = (item1.getMatk())* beilv1;
      } else {
		   var newstr = (item1.getStr())* beilv;
		   var newdex = (item1.getDex())* beilv;
		   var newint = (item1.getInt())* beilv;
		   var newluk = (item1.getLuk())* beilv;
		   var newwatk = (item1.getWatk())* beilv;
		   var newmatk = (item1.getMatk())* beilv;
      }
		   var sumstr = item1.getStr() + newstr;
		   var sumdex = item1.getDex() + newdex;
		   var sumint = item1.getInt() + newint;
		   var sumluk = item1.getLuk() + newluk;
		    var sumwatk = item1.getWatk() + newwatk;
		   var summatk = item1.getMatk() + newmatk;
		   var item = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
        item.setStr(sumstr); // STR     
        item.setDex(sumdex); // DEX     
        item.setInt(sumint); // INT 
        item.setLuk(sumluk); // INT       
        item.setWatk(sumwatk); //WATK    
        item.setMatk(summatk); //MATK    
					item.setLevel((item.getLevel() + 1));
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getPlayer().getClient(), item, true, false);
					if(cm.haveItem(5062300,1)){
			   cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " :  +"+(item1.getLevel()+1)+"成功！此次强化增加了20%几率.",true,cm.getClient().getChannel(),item));
			   cm.gainItem(5062300,-1);
			   } else 
cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " :  +"+(item1.getLevel()+1)+"成功！",true,cm.getClient().getChannel(),item));
				    cm.dispose();
		}
		
	}
}