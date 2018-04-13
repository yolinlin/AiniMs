/*     */ package tools.wztosql;
/*     */ 
/*     */ import client.inventory.EquipAdditions;
/*     */ import client.inventory.MapleInventoryType;
/*     */ import constants.GameConstants;
/*     */ import database.DatabaseConnectionWZ;
/*     */ import java.io.File;
/*     */ import java.io.PrintStream;
/*     */ import java.sql.Connection;
/*     */ import java.sql.PreparedStatement;
/*     */ import java.sql.ResultSet;
/*     */ import java.util.HashMap;
/*     */ import java.util.Iterator;
/*     */ import java.util.LinkedHashSet;
/*     */ import java.util.List;
/*     */ import java.util.Map;
/*     */ import java.util.Map.Entry;
/*     */ import java.util.Set;
/*     */ import provider.MapleData;
/*     */ import provider.MapleDataDirectoryEntry;
/*     */ import provider.MapleDataFileEntry;
/*     */ import provider.MapleDataProvider;
/*     */ import provider.MapleDataProviderFactory;
/*     */ import provider.MapleDataTool;
/*     */ import server.life.Element;
/*     */ import tools.Pair;
/*     */ 
/*     */ public class DumpItemsNEW
/*     */ {
/*     */   private MapleDataProvider item;
/*  48 */   private MapleDataProvider string = MapleDataProviderFactory.getDataProvider(new File(new StringBuilder().append(System.getProperty("wzpath")).append("/String.wz").toString()));
/*     */   private MapleDataProvider character;
/*  49 */   protected final MapleData cashStringData = this.string.getData("Cash.img");
/*  50 */   protected final MapleData consumeStringData = this.string.getData("Consume.img");
/*  51 */   protected final MapleData eqpStringData = this.string.getData("Eqp.img");
/*  52 */   protected final MapleData etcStringData = this.string.getData("Etc.img");
/*  53 */   protected final MapleData insStringData = this.string.getData("Ins.img");
/*  54 */   protected final MapleData petStringData = this.string.getData("Pet.img");
/*  55 */   protected final Set<Integer> doneIds = new LinkedHashSet();
/*  56 */   protected boolean hadError = false;
/*  57 */   protected boolean update = false;
/*  58 */   protected int id = 0;
/*  59 */   private Connection con = DatabaseConnectionWZ.getConnection();
/*     */ 
/*     */   public DumpItemsNEW(boolean update) throws Exception {
/*  62 */     this.update = update;
/*  63 */     this.item = MapleDataProviderFactory.getDataProvider(new File(new StringBuilder().append(System.getProperty("wzpath")).append("/Item.wz").toString()));
/*  64 */     this.character = MapleDataProviderFactory.getDataProvider(new File(new StringBuilder().append(System.getProperty("wzpath")).append("/Character.wz").toString()));
/*  65 */     if ((this.item == null) || (this.string == null) || (this.character == null))
/*  66 */       this.hadError = true;
/*     */   }
/*     */ 
/*     */   public boolean isHadError()
/*     */   {
/*  71 */     return this.hadError;
/*     */   }
/*     */ 
/*     */   public void dumpItems() throws Exception {
/*  75 */     if (!this.hadError) {
/*  76 */       PreparedStatement psa = this.con.prepareStatement("INSERT INTO wz_itemadddata(itemid, `key`, `subKey`, `value`) VALUES (?, ?, ?, ?)");
/*  77 */       PreparedStatement psr = this.con.prepareStatement("INSERT INTO wz_itemrewarddata(itemid, item, prob, quantity, period, worldMsg, effect) VALUES (?, ?, ?, ?, ?, ?, ?)");
/*  78 */       PreparedStatement ps = this.con.prepareStatement("INSERT INTO wz_itemdata(itemid, name, msg, `desc`, slotMax, price, wholePrice, stateChange, flags, karma, meso, monsterBook, itemMakeLevel, questId, scrollReqs, consumeItem, totalprob, incSkill, replaceId, replaceMsg, `create`, afterImage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
/*  79 */       PreparedStatement pse = this.con.prepareStatement("INSERT INTO wz_itemequipdata(itemid, itemLevel, `key`, `value`) VALUES (?, ?, ?, ?)");
/*     */       try {
/*  81 */         dumpItems(psa, psr, ps, pse);
/*     */       } catch (Exception e) {
/*  83 */         System.out.println(new StringBuilder().append(this.id).append(" quest.").toString());
/*  84 */         e.printStackTrace();
/*  85 */         this.hadError = true;
/*     */       } finally {
/*  87 */         psr.executeBatch();
/*  88 */         psr.close();
/*  89 */         psa.executeBatch();
/*  90 */         psa.close();
/*  91 */         pse.executeBatch();
/*  92 */         pse.close();
/*  93 */         ps.executeBatch();
/*  94 */         ps.close();
/*     */       }
/*     */     }
/*     */   }
/*     */ 
/*     */   public void delete(String sql) throws Exception
/*     */   {
/* 101 */     PreparedStatement ps = this.con.prepareStatement(sql);
/* 102 */     ps.executeUpdate();
/* 103 */     ps.close();
/*     */   }
/*     */ 
/*     */   public boolean doesExist(String sql) throws Exception {
/* 107 */     PreparedStatement ps = this.con.prepareStatement(sql);
/* 108 */     ResultSet rs = ps.executeQuery();
/* 109 */     boolean ret = rs.next();
/* 110 */     rs.close();
/* 111 */     ps.close();
/* 112 */     return ret;
/*     */   }
/*     */ 
/*     */   public void dumpItems(MapleDataProvider d, PreparedStatement psa, PreparedStatement psr, PreparedStatement ps, PreparedStatement pse, boolean charz) throws Exception {
/* 116 */     for (MapleDataDirectoryEntry topDir : d.getRoot().getSubdirectories()) {
/* 117 */       if ((!topDir.getName().equalsIgnoreCase("Special")) && (!topDir.getName().equalsIgnoreCase("Hair")) && (!topDir.getName().equalsIgnoreCase("Face")) && (!topDir.getName().equalsIgnoreCase("Afterimage")))
/* 118 */         for (MapleDataFileEntry ifile : topDir.getFiles()) {
/* 119 */           MapleData iz = d.getData(new StringBuilder().append(topDir.getName()).append("/").append(ifile.getName()).toString());
/* 120 */           if ((charz) || (topDir.getName().equalsIgnoreCase("Pet")))
/* 121 */             dumpItem(psa, psr, ps, pse, iz);
/*     */           else
/* 123 */             for (MapleData itemData : iz)
/* 124 */               dumpItem(psa, psr, ps, pse, itemData);
/*     */         } }
/*     */     MapleDataDirectoryEntry topDir;
/*     */   }
/*     */ 
/*     */   public void dumpItem(PreparedStatement psa, PreparedStatement psr, PreparedStatement ps, PreparedStatement pse, MapleData iz)
/*     */     throws Exception
/*     */   {
/*     */     try
/*     */     {
/* 134 */       if (iz.getName().endsWith(".img"))
/* 135 */         this.id = Integer.parseInt(iz.getName().substring(0, iz.getName().length() - 4));
/*     */       else
/* 137 */         this.id = Integer.parseInt(iz.getName());
/*     */     }
/*     */     catch (NumberFormatException nfe) {
/* 140 */       return;
/*     */     }
/* 142 */     if ((this.doneIds.contains(Integer.valueOf(this.id))) || (GameConstants.getInventoryType(this.id) == MapleInventoryType.UNDEFINED)) {
/* 143 */       return;
/*     */     }
/* 145 */     this.doneIds.add(Integer.valueOf(this.id));
/* 146 */     if ((this.update) && (doesExist(new StringBuilder().append("SELECT * FROM wz_itemdata WHERE itemid = ").append(this.id).toString()))) {
/* 147 */       return;
/*     */     }
/* 149 */     ps.setInt(1, this.id);
/* 150 */     MapleData stringData = getStringData(this.id);
/* 151 */     if (stringData == null) {
/* 152 */       ps.setString(2, "");
/* 153 */       ps.setString(3, "");
/* 154 */       ps.setString(4, "");
/*     */     } else {
/* 156 */       ps.setString(2, MapleDataTool.getString("name", stringData, ""));
/* 157 */       ps.setString(3, MapleDataTool.getString("msg", stringData, ""));
/* 158 */       ps.setString(4, MapleDataTool.getString("desc", stringData, ""));
/*     */     }
/* 160 */     short ret = 0;
/* 161 */     MapleData smEntry = iz.getChildByPath("info/slotMax");
/* 162 */     if (smEntry == null) {
/* 163 */       if (GameConstants.getInventoryType(this.id) == MapleInventoryType.EQUIP)
/* 164 */         ret = 1;
/*     */       else
/* 166 */         ret = 100;
/*     */     }
/*     */     else {
/* 169 */       ret = (short)MapleDataTool.getIntConvert(smEntry, -1);
/*     */     }
/* 171 */     ps.setInt(5, ret);
/* 172 */     double pEntry = 0.0D;
/* 173 */     MapleData pData = iz.getChildByPath("info/unitPrice");
/* 174 */     if (pData != null) {
/*     */       try {
/* 176 */         pEntry = MapleDataTool.getDouble(pData);
/*     */       } catch (Exception e) {
/* 178 */         pEntry = MapleDataTool.getIntConvert(pData, -1);
/*     */       }
/*     */     } else {
/* 181 */       pData = iz.getChildByPath("info/price");
/* 182 */       if (pData == null)
/* 183 */         pEntry = -1.0D;
/*     */       else {
/* 185 */         pEntry = MapleDataTool.getIntConvert(pData, -1);
/*     */       }
/*     */     }
/* 188 */     if ((this.id == 2070019) || (this.id == 2330007)) {
/* 189 */       pEntry = 1.0D;
/*     */     }
/* 191 */     ps.setString(6, String.valueOf(pEntry));
/* 192 */     ps.setInt(7, MapleDataTool.getIntConvert("info/price", iz, -1));
/* 193 */     ps.setInt(8, MapleDataTool.getIntConvert("info/stateChangeItem", iz, 0));
/* 194 */     int flags = MapleDataTool.getIntConvert("info/bagType", iz, 0);
/* 195 */     if (MapleDataTool.getIntConvert("info/notSale", iz, 0) > 0) {
/* 196 */       flags |= 16;
/*     */     }
/* 198 */     if (MapleDataTool.getIntConvert("info/expireOnLogout", iz, 0) > 0) {
/* 199 */       flags |= 32;
/*     */     }
/* 201 */     if (MapleDataTool.getIntConvert("info/pickUpBlock", iz, 0) > 0) {
/* 202 */       flags |= 64;
/*     */     }
/* 204 */     if (MapleDataTool.getIntConvert("info/only", iz, 0) > 0) {
/* 205 */       flags |= 128;
/*     */     }
/* 207 */     if (MapleDataTool.getIntConvert("info/accountSharable", iz, 0) > 0) {
/* 208 */       flags |= 256;
/*     */     }
/* 210 */     if (MapleDataTool.getIntConvert("info/quest", iz, 0) > 0) {
/* 211 */       flags |= 512;
/*     */     }
/* 213 */     if (MapleDataTool.getIntConvert("info/tradeBlock", iz, 0) > 0) {
/* 214 */       flags |= 1024;
/*     */     }
/* 216 */     if (MapleDataTool.getIntConvert("info/accountShareTag", iz, 0) > 0) {
/* 217 */       flags |= 2048;
/*     */     }
/* 219 */     if ((MapleDataTool.getIntConvert("info/mobHP", iz, 0) > 0) && (MapleDataTool.getIntConvert("info/mobHP", iz, 0) < 100)) {
/* 220 */       flags |= 4096;
/*     */     }
/* 222 */     ps.setInt(9, flags);
/* 223 */     ps.setInt(10, MapleDataTool.getIntConvert("info/tradeAvailable", iz, 0));
/* 224 */     ps.setInt(11, MapleDataTool.getIntConvert("info/meso", iz, 0));
/* 225 */     ps.setInt(12, MapleDataTool.getIntConvert("info/mob", iz, 0));
/* 226 */     ps.setInt(13, MapleDataTool.getIntConvert("info/lv", iz, 0));
/* 227 */     ps.setInt(14, MapleDataTool.getIntConvert("info/questId", iz, 0));
/* 228 */     int totalprob = 0;
/* 229 */     StringBuilder scrollReqs = new StringBuilder(); StringBuilder consumeItem = new StringBuilder(); StringBuilder incSkill = new StringBuilder();
/* 230 */     MapleData dat = iz.getChildByPath("req");
/* 231 */     if (dat != null) {
/* 232 */       for (MapleData req : dat) {
/* 233 */         if (scrollReqs.length() > 0) {
/* 234 */           scrollReqs.append(",");
/*     */         }
/* 236 */         scrollReqs.append(MapleDataTool.getIntConvert(req, 0));
/*     */       }
/*     */     }
/* 239 */     dat = iz.getChildByPath("consumeItem");
/* 240 */     if (dat != null) {
/* 241 */       for (MapleData req : dat) {
/* 242 */         if (consumeItem.length() > 0) {
/* 243 */           consumeItem.append(",");
/*     */         }
/* 245 */         consumeItem.append(MapleDataTool.getIntConvert(req, 0));
/*     */       }
/*     */     }
/* 248 */     ps.setString(15, scrollReqs.toString());
/* 249 */     ps.setString(16, consumeItem.toString());
/* 250 */     Map<Integer, Map<String, Integer>> equipStats = new HashMap<Integer, Map<String, Integer>>();
/* 251 */     equipStats.put(Integer.valueOf(-1), new HashMap());
/* 252 */     dat = iz.getChildByPath("mob");
/* 253 */     if (dat != null) {
/* 254 */       for (MapleData child : dat) {
/* 255 */         ((Map)equipStats.get(Integer.valueOf(-1))).put(new StringBuilder().append("mob").append(MapleDataTool.getIntConvert("id", child, 0)).toString(), Integer.valueOf(MapleDataTool.getIntConvert("prob", child, 0)));
/*     */       }
/*     */     }
/* 258 */     dat = iz.getChildByPath("info/level/case");
/* 259 */     if (dat != null) {
/* 260 */       for (MapleData info : dat) {
/* 261 */         for (MapleData data : info) {
/* 262 */           if ((data.getName().length() == 1) && (data.getChildByPath("Skill") != null)) {
/* 263 */             for (MapleData skil : data.getChildByPath("Skill")) {
/* 264 */               int incSkillz = MapleDataTool.getIntConvert("id", skil, 0);
/* 265 */               if (incSkillz != 0) {
/* 266 */                 if (incSkill.length() > 0) {
/* 267 */                   incSkill.append(",");
/*     */                 }
/* 269 */                 incSkill.append(incSkillz);
/*     */               }
/*     */             }
/*     */           }
/*     */         }
/*     */       }
/*     */     }
/* 276 */     dat = iz.getChildByPath("info/level/info");
/* 277 */     if (dat != null)
/* 278 */       for (MapleData info : dat)
/* 279 */         if (MapleDataTool.getIntConvert("exp", info, 0) != 0)
/*     */         {
/* 282 */           final int lv = Integer.parseInt(info.getName());
/* 283 */           if(equipStats.get(lv) == null) {
/* 284 */             equipStats.put(Integer.valueOf(lv), new HashMap());
/*     */           }
/* 286 */           for (MapleData data : info)
/* 287 */             if (data.getName().length() > 3)
/* 288 */               ((Map)equipStats.get(Integer.valueOf(lv))).put(data.getName().substring(3), Integer.valueOf(MapleDataTool.getIntConvert(data, 0)));
/*     */         }
		dat = iz.getChildByPath("info");
		if (dat != null) {
			ps.setString(22, MapleDataTool.getString("afterImage", dat, ""));
			final Map<String, Integer> rett = equipStats.get(-1);
        		for (final MapleData data : dat.getChildren()) {
            			if (data.getName().startsWith("inc")) {
					final int gg = MapleDataTool.getIntConvert(data, 0);
					if (gg != 0) {
                				rett.put(data.getName().substring(3), gg);
					}
            			}
        		}
			//s
/*     */ 
/* 306 */       for (String stat : GameConstants.stats) {
/* 307 */         MapleData d = dat.getChildByPath(stat);
/* 308 */         if (stat.equals("canLevel")) {
/* 309 */           if (dat.getChildByPath("level") != null)
/* 310 */             rett.put(stat, Integer.valueOf(1));
/*     */         }
/* 312 */         else if (d != null)
/*     */         {
/* 314 */           if (stat.equals("skill")) {
/* 315 */             for (int i = 0; i < d.getChildren().size(); i++)
/* 316 */               rett.put(new StringBuilder().append("skillid").append(i).toString(), Integer.valueOf(MapleDataTool.getIntConvert(Integer.toString(i), d, 0)));
/*     */           }
/*     */           else {
/* 319 */             int dd = MapleDataTool.getIntConvert(d, 0);
/* 320 */             if (dd != 0)
/* 321 */               rett.put(stat, Integer.valueOf(dd));
/*     */           }
/*     */         }
/*     */       }
/*     */     }
/*     */     else {
/* 327 */       ps.setString(22, "");
/*     */     }
/* 329 */     pse.setInt(1, this.id);
		for (Entry<Integer, Map<String, Integer>> stats : equipStats.entrySet()) {
			pse.setInt(2, stats.getKey());
			for (Entry<String, Integer> stat : stats.getValue().entrySet()) {
				pse.setString(3, stat.getKey());
				pse.setInt(4, stat.getValue());
				pse.addBatch();
			}
		}
/* 338 */     dat = iz.getChildByPath("info/addition");
/* 339 */     if (dat != null) {
/* 340 */       psa.setInt(1, this.id);
/* 341 */       for (MapleData d : dat.getChildren()) {
/* 342 */         EquipAdditions z = EquipAdditions.fromString(d.getName());
/* 343 */         if (z != null) {
/* 344 */           Pair incs = null;
/* 345 */           if (z.isElement()) {
/* 346 */             String ele = MapleDataTool.getString(z.getValue1(), d, "F30");
/* 347 */             incs = new Pair(Integer.valueOf(Element.getFromChar(ele.charAt(0)).getValue()), Integer.valueOf(Integer.parseInt(ele.substring(1, ele.length()))));
/*     */           } else {
/* 349 */             incs = new Pair(Integer.valueOf(MapleDataTool.getIntConvert(z.getValue1(), d, 0)), Integer.valueOf(MapleDataTool.getIntConvert(z.getValue2(), d, 0)));
/*     */           }
/* 351 */           psa.setString(2, d.getName());
/* 352 */           psa.setInt(3, ((Integer)incs.left).intValue());
/* 353 */           psa.setInt(4, ((Integer)incs.right).intValue());
/* 354 */           psa.addBatch();
/*     */         } else {
/* 356 */           System.out.println(new StringBuilder().append("UNKNOWN EQ ADDITION : ").append(d.getName()).append(" from ").append(this.id).toString());
/*     */         }
/*     */       }
/*     */     }
/* 360 */     dat = iz.getChildByPath("reward");
/* 361 */     if (dat != null) {
/* 362 */       psr.setInt(1, this.id);
/* 363 */       for (MapleData reward : dat) {
/* 364 */         psr.setInt(2, MapleDataTool.getIntConvert("item", reward, 0));
/* 365 */         psr.setInt(3, MapleDataTool.getIntConvert("prob", reward, 0));
/* 366 */         psr.setInt(4, MapleDataTool.getIntConvert("count", reward, 0));
/* 367 */         psr.setInt(5, MapleDataTool.getIntConvert("period", reward, 0));
/* 368 */         psr.setString(6, MapleDataTool.getString("worldMsg", reward, ""));
/* 369 */         psr.setString(7, MapleDataTool.getString("Effect", reward, ""));
/* 370 */         psr.addBatch();
/* 371 */         totalprob += MapleDataTool.getIntConvert("prob", reward, 0);
/*     */       }
/*     */     }
/* 374 */     ps.setInt(17, totalprob);
/* 375 */     ps.setString(18, incSkill.toString());
/* 376 */     dat = iz.getChildByPath("replace");
/* 377 */     if (dat != null) {
/* 378 */       ps.setInt(19, MapleDataTool.getInt("itemid", dat, 0));
/* 379 */       ps.setString(20, MapleDataTool.getString("msg", dat, ""));
/*     */     } else {
/* 381 */       ps.setInt(19, 0);
/* 382 */       ps.setString(20, "");
/*     */     }
/* 384 */     ps.setInt(21, MapleDataTool.getInt("info/create", iz, 0));
/* 385 */     ps.addBatch();
/*     */   }
/*     */ 
/*     */   public void dumpItems(PreparedStatement psa, PreparedStatement psr, PreparedStatement ps, PreparedStatement pse) throws Exception {
/* 389 */     if (!this.update) {
/* 390 */       delete("DELETE FROM wz_itemdata");
/* 391 */       delete("DELETE FROM wz_itemequipdata");
/* 392 */       delete("DELETE FROM wz_itemadddata");
/* 393 */       delete("DELETE FROM wz_itemrewarddata");
/* 394 */       System.out.println("Deleted wz_itemdata successfully.");
/*     */     }
/* 396 */     System.out.println("Adding into wz_itemdata.....");
/* 397 */     dumpItems(this.item, psa, psr, ps, pse, false);
/* 398 */     dumpItems(this.character, psa, psr, ps, pse, true);
/* 399 */     System.out.println("物品数据提取完成!");
/*     */   }
/*     */ 
/*     */   public int currentId() {
/* 403 */     return this.id;
/*     */   }
/*     */ 
/*     */   public static void main(String[] args) {
/* 407 */     boolean hadError = false;
/* 408 */     boolean update = false;
/* 409 */     long startTime = System.currentTimeMillis();
/* 410 */     for (String file : args) {
/* 411 */       if (file.equalsIgnoreCase("-update")) {
/* 412 */         update = true;
/*     */       }
/*     */     }
/* 415 */     int currentQuest = 0;
/*     */     try {
/* 417 */       DumpItemsNEW dq = new DumpItemsNEW(update);
/* 418 */       System.out.println("Dumping Items");
/* 419 */       dq.dumpItems();
/* 420 */       hadError |= dq.isHadError();
/* 421 */       currentQuest = dq.currentId();
/*     */     } catch (Exception e) {
/* 423 */       hadError = true;
/* 424 */       e.printStackTrace();
/* 425 */       System.out.println(new StringBuilder().append(currentQuest).append(" quest.").toString());
/*     */     }
/* 427 */     long endTime = System.currentTimeMillis();
/* 428 */     double elapsedSeconds = (endTime - startTime) / 1000.0D;
/* 429 */     int elapsedSecs = (int)elapsedSeconds % 60;
/* 430 */     int elapsedMinutes = (int)(elapsedSeconds / 60.0D);
/*     */ 
/* 432 */     String withErrors = "";
/* 433 */     if (hadError) {
/* 434 */       withErrors = " with errors";
/*     */     }
/* 436 */     System.out.println(new StringBuilder().append("Finished").append(withErrors).append(" in ").append(elapsedMinutes).append(" minutes ").append(elapsedSecs).append(" seconds").toString());
/*     */   }
/*     */ 
    protected final MapleData getStringData(final int itemId) {
        String cat = null;
        MapleData data;

  if (itemId >= 5010000) {
            data = cashStringData;
        } else if (itemId >= 2000000 && itemId < 3000000) {
            data = consumeStringData;
        } else if ((itemId >= 1132000 && itemId < 1190201) || (itemId >= 1010000 && itemId < 1040000) || (itemId >= 1122000 && itemId < 1123000)) {
            data = eqpStringData;
            cat = "Eqp/Accessory";
        } else if (itemId >= 1172000 && itemId < 1173000) {
            data = eqpStringData;
            cat = "Eqp/MonsterBook";
        } else if (itemId >= 1662000 && itemId < 1680000) {
            data = eqpStringData;
            cat = "Eqp/Android";
        } else if (itemId >= 1000000 && itemId < 1010000) {
            data = eqpStringData;
            cat = "Eqp/Cap";
        } else if (itemId >= 1102000 && itemId < 1103000) {
            data = eqpStringData;
            cat = "Eqp/Cape";
        } else if ((itemId >= 1040000 && itemId < 1050000) || itemId == 1102380) {
            data = eqpStringData;
            cat = "Eqp/Coat";
        } else if (itemId >= 20000 && itemId < 22000) {
            data = eqpStringData;
            cat = "Eqp/Face";
        } else if (itemId >= 1080000 && itemId < 1090000) {
            data = eqpStringData;
            cat = "Eqp/Glove";
        } else if (itemId >= 30000 && itemId < 38000) {
            data = eqpStringData;
            cat = "Eqp/Hair";
        } else if (itemId >= 1050000 && itemId < 1060000) {
            data = eqpStringData;
            cat = "Eqp/Longcoat";
        } else if (itemId >= 1060000 && itemId < 1070000) {
            data = eqpStringData;
            cat = "Eqp/Pants";
        } else if (itemId >= 1612000 && itemId < 1660000) {
            data = eqpStringData;
            cat = "Eqp/Mechanic";
        } else if (itemId >= 1802000 && itemId < 1832000) {
            data = eqpStringData;
            cat = "Eqp/PetEquip";
        } else if (itemId >= 1942000 && itemId < 2000000) {
            data = eqpStringData;
            cat = "Eqp/Dragon";
        } else if (itemId >= 1112000 && itemId < 1120000) {
            data = eqpStringData;
            cat = "Eqp/Ring";
        } else if ((itemId >= 1092000 && itemId < 1100000) || itemId == 1091000 || itemId == 1090000 || itemId == 1192000 || itemId == 1192001) {
            data = eqpStringData;
            cat = "Eqp/Shield";
        } else if (itemId >= 1070000 && itemId < 1080000) {
            data = eqpStringData;
            cat = "Eqp/Shoes";
        } else if (itemId >= 1900000 && itemId < 1920000) {
            data = eqpStringData;
            cat = "Eqp/Taming";
       } else if (itemId >= 1200000 && itemId < 1210000) {
            data = eqpStringData;
            cat = "Eqp/Totem";
        } else if (itemId >= 1212000 && itemId < 1800000) {
            data = eqpStringData;
            cat = "Eqp/Weapon";
        } else if (itemId >= 4000000 && itemId < 5000000) {
            data = etcStringData;
            cat = "Etc";
        } else if (itemId >= 3000000 && itemId < 4000000) {
            data = insStringData;
        } else if (itemId >= 5000000 && itemId < 5010000) {
            data = petStringData;
        } else {
            return null;
        }
        if (cat == null) {
            return data.getChildByPath(String.valueOf(itemId));
        } else {
            return data.getChildByPath(cat + "/" + itemId);
        }
    }
}