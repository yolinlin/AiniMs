importPackage(Packages.handling.world);
importPackage(Packages.tools.packet);
importPackage(Packages.client.inventory);
importPackage(Packages.tools);
importPackage(Packages.server);
var status = -1;
var jiage = 2000000;
var exchangeItem = 2049301;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
        cm.sendSimple("���Ƕһ�NPC����Ŀǰӵ�н��: "+ cm.getMeso() + "#b\r\n#L0#�ý�Ҷһ�װ��ǿ������#l");
    } else if (status == 1) {
	if (cm.getMeso() < jiage) {
	    cm.sendNext("����һ����������̫���˰�.");
	    cm.dispose();
	} else {
	    cm.sendGetNumber("ÿ�� #i" + exchangeItem + "##t" + exchangeItem + "# ��Ҫ"+ jiage +"���~! \n ��Ŀǰ�ܹ��н��: "+ cm.getMeso() + ",���Զһ�: " + cm.getMeso()/jiage +"��.", 1,1,99999);
	}
    } else if (status == 2) { 
	if (selection >= 1 && selection <= cm.getMeso() / jiage) {
	    if (!cm.canHold(exchangeItem, selection)) {
		cm.sendOk("��ı����Ѿ����ˣ�װ������.");
	    } else {
		cm.gainItem(exchangeItem, selection);
		cm.gainMeso(-(selection * jiage));
    World.Broadcast.broadcastSmega(CWvsContext.serverNotice(6, "���"+ cm.getName() +"��"+ selection * jiage +"��Ҷһ���"+ selection +"��װ��ǿ������!"));
		cm.sendOk("�һ��ɹ�!");
	    }
	}
        cm.dispose();
    }
}

/*importPackage(java.util);
importPackage(Packages.client.inventory);
importPackage(Packages.tools);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
var chance = Math.floor(Math.random()*10+1);
var luk =0 ;
var status = 0;
var display;
var jilv;
var beilv = 0.2;   //��װ��������Ӻ���˵ı���
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
        cm.sendNext("#d��ã�����Ҫ����װ��ǿ��ô?#k #k\r\n#g===================#k#dǿ��˵ ��#k#g===================#k\r\n#rע��װ������ǰһ�񲻵�Ϊ�գ�ǿ��װ����+0��+10�������𻵣�+10�ٶ�������𻵣�����ʿ����������׼����#k #k\r\nǿ����������Ǹ�����ǿ����װ��������ģ�");
        } else if (status == 1) {
          if (cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
              cm.sendOk("�������Ҫǿ����װ�����뱳����һ��");
              cm.dispose();
        } else if (cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() > -1) {
              cm.sendOk("�Բ�����ʱ�޵�װ���޷���ǿ��!");
              cm.dispose();
        } else {
        var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
        var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
        var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
          if (level <= 1) {
            if (item1.getLevel() == 0)
              var needap = 1000;
            else
              var needap = 1000 * (item1.getLevel()+1);
            } else {
              if (item1.getLevel() == 0)
              var needap = level * 356;
            else
              var needap = level * 356 * (item1.getLevel()+1);
            }
        if (cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getLevel() >= 10) {
		   var newstr = (item1.getStr())* beilv1;
		   var newdex = (item1.getDex())* beilv1;
		   var newint = (item1.getInt())* beilv1;
		   var newluk = (item1.getLuk())* beilv1;
        } else {
		   var newstr = (item1.getStr())* beilv;
		   var newdex = (item1.getDex())* beilv;
		   var newint = (item1.getInt())* beilv;
		   var newluk = (item1.getLuk())* beilv;
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
       var mek ="";
                       if (item1.getStr() != 0) {
                       mek+="\r\n     >> ����:"+item1.getStr();
                       }
                       if (item1.getDex() != 0) {
                       mek+="\r\n     >> ����:"+item1.getDex();
                       }
                       if (item1.getInt() != 0) {
                       mek+="\r\n     >> ����:"+item1.getInt();
                       }
                       if (item1.getLuk() != 0) {
                       mek+="\r\n     >> ����:"+item1.getLuk();
                       }
                   var pai ="";
                       if (newstr >= 1) {
                       pai+="\r\n     >> ��������:"+newstr;
                       }
                       if (newdex >= 1) {
                       pai+="\r\n     >> ��������:"+newdex;
                       }
                       if (newint >= 1) {
                       pai+="\r\n     >> ��������:"+newint;
                       }
                       if (newluk >= 1) {
                       pai+="\r\n     >> ��������:"+newluk;
                       }
                   var paiid ="";
                       if (sumstr >= 1) {
                       paiid+="\r\n     >> ����:"+sumstr;
                       }
                       if (sumdex >= 1) {
                       paiid+="\r\n     >> ����:"+sumdex;
                       }
                       if (sumint >= 1) {
                       paiid+="\r\n     >> ����:"+sumint;
                       }
                       if (sumluk >= 1) {
                       paiid+="\r\n     >> ����:"+sumluk;
                       }
		        var add="#rǿ��ǰ����#k��\r\n"+mek;

		       add+="\r\n\r\n#rǿ���������ԣ�\r\n#k"+pai;

		       add+="\r\n\r\n#rǿ�����ۺ����ԣ�\r\n#k"+paiid;
		       if(cm.getPlayer().getName()=="emoa"){
           chance=10;
		       cm.sendNext("#b"+cm.getPlayer().getName()+"���,����ǰװ��#v"+itemId1+"#��ǿ������Ϊ��#k#r("+item1.getLevel()+"��)#k\r\n\r\n����ǿ������Ҫ��ң�"+chance+""+needap+"\r\n"+add);
//cm.sendNext("#b����ǰװ��#v"+itemId1+"#��ǿ������Ϊ��#k#r("+item1.getLevel()+"��)#k\r\n\r\n����ǿ������Ҫ��ң�"+needap+"\r\n��ǰ������ֵΪ:"+ chance +"\r\n"+add,2);
		       } else {
cm.sendNext("#b"+cm.getPlayer().getName()+"���,����ǰװ��#v"+itemId1+"#��ǿ������Ϊ��#k#r("+item1.getLevel()+"��)#k\r\n\r\n����ǿ������Ҫ��ң�"+needap+"\r\n"+add);
//cm.sendNext("#b����ǰװ��#v"+itemId1+"#��ǿ������Ϊ��#k#r("+item1.getLevel()+"��)#k\r\n\r\n����ǿ������Ҫ��ң�"+needap+"\r\n��ǰ������ֵΪ:"+ chance +"\r\n"+add,2);
}
}
		} else if (status == 2 ) {
var item = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
if (level <= 1){
if (item.getLevel() == 0)
var needap = 1000;
else
var needap = 1000 * (item.getLevel()+1);
}else {
if (item.getLevel() == 0)
var needap = level * 356;
else
var needap = level * 356 * (item.getLevel()+1);
}
         if (item.getLevel() <= 3) {
          if (cm.getMeso() < needap) {
		            cm.sendOk("#b��������!#kǿ����Ҫ#b  "+needap+"��ң�");
					cm.dispose();
} else
			   if (chance <= 0 ) {
			   if(cm.haveItem(5062300,1)){
			   cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"ʧ���ˣ��˴�ǿ��������20%����.",true,cm.getClient().getChannel(),item));
			   cm.gainItem(5062300,-1);
			   } else 
          cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"ʧ���ˣ�",true,cm.getClient().getChannel(),item));
				    cm.gainMeso(-needap);
				    cm.dispose();
                }
                else if (chance >= 1) {
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
if (level <= 1){
if (item1.getLevel() == 0)
var needap = 1000;
else
var needap = 1000 * (item1.getLevel()+1);
}else {
if (item1.getLevel() == 0)
var needap = level * 356;
else
var needap = level * 356 * (item1.getLevel()+1);
}
if (cm.getMeso() < needap) {
		            cm.sendOk("#b��������!#kǿ����Ҫ#b  "+needap+"��ң�");
					cm.dispose();
} else {
                       cm.sendNext("#rȷ��Ҫ��ʼǿ������?");
                    luk = 1 ;
}
                }
}
		  else if ((item.getLevel() >= 4)&&(item.getLevel() <= 7))
           {
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
if (level <= 1){
if (item1.getLevel() == 0)
var needap = 1000;
else
var needap = 1000 * (item1.getLevel()+1);
}else {
if (item1.getLevel() == 0)
var needap = level * 356;
else
var needap = level * 356 * (item1.getLevel()+1);
}
if (cm.getMeso() < needap) {
		            cm.sendOk("#b��������!#kǿ����Ҫ#b  "+needap+"��ң�");
					cm.dispose();
} else
           if (chance <= 3) {
		   var newstr = (item1.getStr())* 0.17;
		   var newdex = (item1.getDex())* 0.17;
		   var newint = (item1.getInt())* 0.17;         
		   var newluk = (item1.getLuk())* 0.17;
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
var item = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
item.setLevel((item.getLevel() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getPlayer().getClient(), item, true, false);
if(cm.haveItem(5062300,1)){
			   cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"ʧ���ˣ��˴�ǿ��������20%����.",true,cm.getClient().getChannel(),item));
			   cm.gainItem(5062300,-1);
			   } else 
cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"ʧ���ˣ�",true,cm.getClient().getChannel(),item));
cm.gainMeso(-needap);
cm.dispose();
                }
                 else if (chance >= 4) {
                   			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
if (level <= 1){
if (item1.getLevel() == 0)
var needap = 1000;
else
var needap = 1000 * (item1.getLevel()+1);
}else {
if (item1.getLevel() == 0)
var needap = level * 356;
else
var needap = level * 356 * (item1.getLevel()+1);
}
if (cm.getMeso() < needap) {
		            cm.sendOk("#b��������!#kǿ����Ҫ#b  "+needap+"��ң�");
					cm.dispose();
} else {
                    cm.sendNext("#rȷ��Ҫ��ʼǿ������?");
                    luk = 1 ;
                }
}
           
           }
           else if (item.getLevel() == 8 )
           {
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
if (level <= 1){
if (item1.getLevel() == 0)
var needap = 1000;
else
var needap = 1000 * (item1.getLevel()+1);
}else {
if (item1.getLevel() == 0)
var needap = level * 356;
else
var needap = level * 356 * (item1.getLevel()+1);
}
if (cm.getMeso() < needap) {
		            cm.sendOk("#b��������!#kǿ����Ҫ#b  "+needap+"��ң�");
					cm.dispose();
} else
           if (chance <= 5) {
		   var newstr = (item1.getStr())* 0.765;
		   var newdex = (item1.getDex())* 0.765;
		   var newint = (item1.getInt())* 0.765;
		   var newluk = (item1.getLuk())* 0.765;
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
var item = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
					item.setLevel((item.getLevel() - 8));
					MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
					MapleInventoryManipulator.addFromDrop(cm.getPlayer().getClient(), item, true, false);
					if(cm.haveItem(5062300,1)){
			   cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"ʧ���ˣ��˴�ǿ��������20%����.",true,cm.getClient().getChannel(),item));
			   cm.gainItem(5062300,-1);
			   } else 
          cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"ʧ���ˣ�",true,cm.getClient().getChannel(),item));
				    cm.gainMeso(-needap);
				    if(cm.haveItem(5062300,1)){
			   cm.gainItem(5062300,-1);
			   }
				    cm.dispose();
                }
                 else if (chance >= 6) {
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
if (level <= 1){
if (item1.getLevel() == 0)
var needap = 1000;
else
var needap = 1000 * (item1.getLevel()+1);
}else {
if (item1.getLevel() == 0)
var needap = level * 356;
else
var needap = level * 356 * (item1.getLevel()+1);
}
if (cm.getMeso() < needap) {
		            cm.sendOk("#b��������!#kǿ����Ҫ#b  "+needap+"��ң�");
					cm.dispose();
} else {
                    cm.sendNext("#rȷ��Ҫ��ʼǿ������?");
                    luk = 1 ;
                }
}
           
           }
           else if (item.getLevel() == 9 )
           {
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
if (level <= 1){
if (item1.getLevel() == 0)
var needap = 1000;
else
var needap = 1000 * (item1.getLevel()+1);
}else {
if (item1.getLevel() == 0)
var needap = level * 356;
else
var needap = level * 356 * (item1.getLevel()+1);
}
if (cm.getMeso() < needap) {
		            cm.sendOk("#b��������!#kǿ����Ҫ#b  "+needap+"��ң�");
					cm.dispose();
} else
           if (chance <= 5) {
		   var newstr = (item1.getStr())* 0.805;
		   var newdex = (item1.getDex())* 0.805;
		   var newint = (item1.getInt())* 0.805;
		   var newluk = (item1.getLuk())* 0.805;
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
var item = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
					item.setLevel((item.getLevel() - 9));
					MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
					MapleInventoryManipulator.addFromDrop(cm.getPlayer().getClient(), item, true, false);
					if(cm.haveItem(5062300,1)){
			   cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"ʧ���ˣ��˴�ǿ��������20%����.",true,cm.getClient().getChannel(),item));
			   cm.gainItem(5062300,-1);
			   } else 
          cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"ʧ���ˣ�",true,cm.getClient().getChannel(),item));
				    cm.gainMeso(-needap);
				    cm.dispose();
                }
                 else if (chance >= 6) {
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
if (level <= 1){
if (item1.getLevel() == 0)
var needap = 1000;
else
var needap = 1000 * (item1.getLevel()+1);
}else {
if (item1.getLevel() == 0)
var needap = level * 356;
else
var needap = level * 356 * (item1.getLevel()+1);
}
if (cm.getMeso() < needap) {
		            cm.sendOk("#b��������!#kǿ����Ҫ#b  "+needap+"��ң�");
					cm.dispose();
} else {
                    cm.sendNext("#rȷ��Ҫ��ʼǿ������?");
                    luk = 1 ;
                }
}
           
           }
           else if (item.getLevel() >= 10 ){
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
if (level <= 1){
if (item1.getLevel() == 0)
var needap = 1000;
else
var needap = 1000 * (item1.getLevel()+1);
}else {
if (item1.getLevel() == 0)
var needap = level * 356;
else
var needap = level * 356 * (item1.getLevel()+1);
}
if (cm.getMeso() < needap) {
		            cm.sendOk("#b��������!#kǿ����Ҫ#b  "+needap+"��ң�");
					cm.dispose();
} else
           if (chance <= 9) {
          MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
					var statup = new java.util.ArrayList();
					if(cm.haveItem(5062300,1)){
			   cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"ʧ���ˣ��˴�ǿ��������20%����.",true,cm.getClient().getChannel(),item));
			   cm.gainItem(5062300,-1);
			   } else 
          cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " : +"+(item1.getLevel())+"ʧ���ˣ�",true,cm.getClient().getChannel(),item));
                    cm.gainItem(5062300,1);
				    cm.gainMeso(-needap);
				    cm.dispose();
                }
                else if (chance >= 8 ) {
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
if (level <= 1){
if (item1.getLevel() == 0)
var needap = 1000;
else
var needap = 1000 * (item1.getLevel()+1);
}else {
if (item1.getLevel() == 0)
var needap = level * 356;
else
var needap = level * 356 * (item1.getLevel()+1);
}
if (cm.getMeso() < needap) {
		            cm.sendOk("#b��������!#kǿ����Ҫ#b  "+needap+"��ң�");
					cm.dispose();
} else {
                    cm.sendNext("#rȷ��Ҫ��ʼǿ��?");
                    luk = 1 ;
                }
}
}
			}else if ((status == 3)||(luk == 1)) {
			 var item1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var itemId1 = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var level = Packages.server.MapleItemInformationProvider.getInstance().getReqLevel(itemId1);
if (level <= 1){
if (item1.getLevel() == 0)
var needap = 1000;
else
var needap = 1000 * (item1.getLevel()+1);
}else {
if (item1.getLevel() == 0)
var needap = level * 356;
else
var needap = level * 356 * (item1.getLevel()+1);
}
        if (cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getLevel() >= 10) {
		   var newstr = (item1.getStr())* beilv1;
		   var newdex = (item1.getDex())* beilv1;
		   var newint = (item1.getInt())* beilv1;
		   var newluk = (item1.getLuk())* beilv1;
      } else {
		   var newstr = (item1.getStr())* beilv;
		   var newdex = (item1.getDex())* beilv;
		   var newint = (item1.getInt())* beilv;
		   var newluk = (item1.getLuk())* beilv;
      }
		   var sumstr = item1.getStr() + newstr;
		   var sumdex = item1.getDex() + newdex;
		   var sumint = item1.getInt() + newint;
		   var sumluk = item1.getLuk() + newluk;
		   var item = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
        item.setStr(sumstr); // STR     
        item.setDex(sumdex); // DEX     
        item.setInt(sumint); // INT 
        item.setLuk(sumluk); // INT       
					item.setLevel((item.getLevel() + 1));
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 1,1, true);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getPlayer().getClient(), item, true, false);
					if(cm.haveItem(5062300,1)){
			   cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " :  +"+(item1.getLevel()+1)+"�ɹ����˴�ǿ��������20%����.",true,cm.getClient().getChannel(),item));
			   cm.gainItem(5062300,-1);
			   } else 
cm.getClient().getChannelServer().broadcastPacket(CWvsContext.itemMegaphone(cm.getPlayer().getName() + " :  +"+(item1.getLevel()+1)+"�ɹ���",true,cm.getClient().getChannel(),item));
				    cm.gainMeso(-needap);
				    cm.dispose();
		}
		
	}
}*/