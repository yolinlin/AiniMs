/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package scripting;

import client.MapleClient;
import constants.WorldConstants;
import java.util.Map;
import java.util.WeakHashMap;
import java.util.concurrent.locks.Lock;
import javax.script.Invocable;
import javax.script.ScriptEngine;
import server.quest.MapleQuest;
import tools.FileoutputUtil;

public class NPCScriptManager extends AbstractScriptManager {

    private final Map<MapleClient, NPCConversationManager> cms = new WeakHashMap<MapleClient, NPCConversationManager>();
    private static final NPCScriptManager instance = new NPCScriptManager();

    public static final NPCScriptManager getInstance() {
        return instance;
    }

    public final boolean hasScript(final MapleClient c, final int npc, String filename) {
        Invocable iv = getInvocable("npc/world" + (c.getPlayer() != null ? c.getPlayer().getWorld() : WorldConstants.defaultserver) + "/" + npc + ".js", c, true);
        if (filename != null) {
            iv = getInvocable("npc/world" + (c.getPlayer() != null ? c.getPlayer().getWorld() : WorldConstants.defaultserver) + "/" + filename + ".js", c, true);
        }
        if (iv == null) {
            return false;
        }
        return true;
    }

    public void start(MapleClient c, int npc, int npcMode, int asd) {
    Lock lock = c.getNPCLock();
    lock.lock();
    try {
       c.getPlayer().dropMessage(5, "您已经建立与NPC: " + npc + " 的对话。");
      if ((!this.cms.containsKey(c)) && (c.canClickNPC())) {
        Invocable iv;
        if (npcMode == 0)
          iv = getInvocable("npc/" + npc + ".js", c, true);
        else {
          iv = getInvocable("npc/" + npc + "_" + npcMode + ".js", c, true);
        }
        ScriptEngine scriptengine = (ScriptEngine)iv;
        final NPCConversationManager cm = new NPCConversationManager(c, npc, -1, (byte) -1, iv);
        if ((iv == null) || (getInstance() == null)) {
          if (iv == null)
            cm.sendOk("对不起，我并没有被管理员设置可使用，如果您觉得我应该工作的，那就请您汇报给管理员.\r\n我的ID编号: #r" + npc + "#k."); dispose(c);
          return; 
        } 
        this.cms.put(c, cm);
        scriptengine.put("cm", cm);

        c.getPlayer().setConversation(1);
        c.setClickedNPC();
        try {
          iv.invokeFunction("start", new Object[0]);
        } catch (NoSuchMethodException nsme) {
          iv.invokeFunction("action", (byte) 1, (byte) 0, 0);
        }
      } else {
        dispose(c);
      }
    } catch (Exception e) {
      System.err.println("执行NPC脚本出错 NPC ID : " + npc + " 模式: " + npcMode + " 错误信息: " + e);
      FileoutputUtil.log("log\\Script_Except.log", "执行NPC脚本出错 NPC ID : " + npc + " 模式: " + npcMode + ".\r\n错误信息: " + e);
      dispose(c);
      notice(c, npc);
    } finally {
      lock.unlock();
    }
  }
    
    private void notice(MapleClient c, int id) {
    c.getPlayer().dropMessage(1, "这个NPC脚本是错误的，请联系管理员修复它.NPCID: " + id);
  }
    
    public final void start(final MapleClient c, final int npc, String filename) {
        final Lock lock = c.getNPCLock();
        lock.lock();
        try {
            c.getPlayer().dropMessage(-1,"目标·对话     行动代号：" + npc + "      爱慕抗命！");           
            if (!cms.containsKey(c) && c.canClickNPC()) {
                Invocable iv = getInvocable("npc/" + npc + ".js", c, true); // Safe disposal
                if (filename != null) {
                    iv = getInvocable("npc/" + filename + ".js", c, true); // Safe disposal
                }
                if (iv == null) {
                    iv = getInvocable("npc/world" + (c.getPlayer() != null ? c.getPlayer().getWorld() : WorldConstants.defaultserver) + "/" + npc + ".js", c, true);
                    if (filename != null) {
                        iv = getInvocable("npc/world" + (c.getPlayer() != null ? c.getPlayer().getWorld() : WorldConstants.defaultserver) + "/" + filename + ".js", c, true);
                    }
                    if (iv == null) {
                        iv = getInvocable("npc/default/" + npc + ".js", c, true); // Safe disposal
                        if (filename != null) {
                            iv = getInvocable("npc/default/" + filename + ".js", c, true); // Safe disposal
                        }
                        if (iv == null) {
                            iv = getInvocable("npc/notcoded.js", c, true); // Safe disposal
                            if (iv == null) {
                                iv = getInvocable("npc/world" + (c.getPlayer() != null ? c.getPlayer().getWorld() : WorldConstants.defaultserver) + "/notcoded.js", c, true); // Safe disposal
                                if (iv == null) {
                                    dispose(c);
                                    return;
                                }
                            }
                        }
                    }
                }
                final ScriptEngine scriptengine = (ScriptEngine) iv;
                final NPCConversationManager cm = new NPCConversationManager(c, npc, -1, (byte) -1, iv);
                cms.put(c, cm);
                scriptengine.put("cm", cm);

                c.getPlayer().setConversation(1);
                c.setClickedNPC();
                //System.out.println("NPCID started: " + npc);
                try {
                    iv.invokeFunction("start"); // Temporary until I've removed all of start
                } catch (NoSuchMethodException nsme) {
                    iv.invokeFunction("action", (byte) 1, (byte) 0, 0);
                }
            }
        } catch (final Exception e) {
            System.err.println("× ——  对话/出错‖编号(" + npc + ")" + e);
            FileoutputUtil.log(FileoutputUtil.ScriptEx_Log, "× ——  对话/出错‖编号(" + npc + ")" + e);
            dispose(c);
        } finally {
            lock.unlock();
        }
    }

    public final void action(final MapleClient c, final byte mode, final byte type, final int selection) {
        if (mode != -1) {
            final NPCConversationManager cm = cms.get(c);
            if (cm == null || cm.getLastMsg() > -1) {
                return;
            }
            final Lock lock = c.getNPCLock();
            lock.lock();
            try {
                if (cm.pendingDisposal) {
                    dispose(c);
                } else {
                    c.setClickedNPC();
                    cm.getIv().invokeFunction("action", mode, type, selection);
                }
            } catch (final Exception e) {
                System.err.println("× ——  对话/出错‖编号(" + cm.getNpc() + ")" + e);
                dispose(c);
                FileoutputUtil.log(FileoutputUtil.ScriptEx_Log, "× ——  对话/出错‖编号(" + cm.getNpc() + ")" + e);
            } finally {
                lock.unlock();
            }
        }
    }

    public final void startQuest(final MapleClient c, final int npc, final int quest) {
        if (!MapleQuest.getInstance(quest).canStart(c.getPlayer(), null)) {
            return;
        }
        final Lock lock = c.getNPCLock();
        lock.lock();
        try {
   c.getPlayer().dropMessage(-1,"目标·任务     行动代号：" + quest + "      爱慕抗命！"); 
            if (!cms.containsKey(c) && c.canClickNPC()) {
                final Invocable iv = getInvocable("quest/" + quest + ".js", c, true);
                if (iv == null) {
             System.out.println("× ——  任务/未定义‖编号(" + quest + ") ");            
                    dispose(c);
                    return;
                }
                final ScriptEngine scriptengine = (ScriptEngine) iv;
                final NPCConversationManager cm = new NPCConversationManager(c, npc, quest, (byte) 0, iv);
                cms.put(c, cm);
                scriptengine.put("qm", cm);

                c.getPlayer().setConversation(1);
                c.setClickedNPC();
                //System.out.println("NPCID started: " + npc + " startquest " + quest);
                iv.invokeFunction("start", (byte) 1, (byte) 0, 0); // Start it off as something
            }
        } catch (final Exception e) {
            System.err.println("× ——  任务/出错‖编号(" + quest + ") —— NPC编号(" + npc + ")" + e);
            FileoutputUtil.log(FileoutputUtil.ScriptEx_Log, "× ——  任务/出错‖编号(" + quest + ") —— NPC编号(" + npc + ")" + e);
            dispose(c);
        } finally {
            lock.unlock();
        }
    }

    public final void startQuest(final MapleClient c, final byte mode, final byte type, final int selection) {
        final Lock lock = c.getNPCLock();
        final NPCConversationManager cm = cms.get(c);
        if (cm == null || cm.getLastMsg() > -1) {
            return;
        }
        lock.lock();
        try {
c.getPlayer().dropMessage(-1,"目标·任务     行动代号：" + cm.getQuest() + "   编号："+ cm.getNpc());            
            if (cm.pendingDisposal) {
                dispose(c);
            } else {
                c.setClickedNPC();
                cm.getIv().invokeFunction("start", mode, type, selection);
            }
        } catch (Exception e) {
            System.err.println("× ——  任务/出错‖编号(" + cm.getQuest() + ") —— NPC编号(" + cm.getNpc() + ")" + e);
            FileoutputUtil.log(FileoutputUtil.ScriptEx_Log, "× ——  任务/出错‖编号(" + cm.getQuest() + ") —— NPC编号(" + cm.getNpc() + ")" + e);
            dispose(c);
        } finally {
            lock.unlock();
        }
    }

    public final void endQuest(final MapleClient c, final int npc, final int quest, final boolean customEnd) {
        if (!customEnd && !MapleQuest.getInstance(quest).canComplete(c.getPlayer(), null)) {
            return;
        }
        final Lock lock = c.getNPCLock();
        lock.lock();
        try {
            if (!cms.containsKey(c) && c.canClickNPC()) {
                final Invocable iv = getInvocable("quest/" + quest + ".js", c, true);
                if (iv == null) {
                   System.out.println("× ——  任务/未定义‖编号(" + quest + ") ");            
                    dispose(c);
                    return;
                }
                final ScriptEngine scriptengine = (ScriptEngine) iv;
                final NPCConversationManager cm = new NPCConversationManager(c, npc, quest, (byte) 1, iv);
                cms.put(c, cm);
                scriptengine.put("qm", cm);

                c.getPlayer().setConversation(1);
                c.setClickedNPC();
                iv.invokeFunction("end", (byte) 1, (byte) 0, 0); // Start it off as something
            }
        } catch (Exception e) {
            System.err.println("× ——  任务/出错‖编号(" + quest + ") —— NPC编号(" + npc + ")" + e);
            FileoutputUtil.log(FileoutputUtil.ScriptEx_Log, "× ——  任务/出错‖编号(" + quest + ") —— NPC编号(" + npc + ")" + e);
            dispose(c);
        } finally {
            lock.unlock();
        }
    }

    public final void endQuest(final MapleClient c, final byte mode, final byte type, final int selection) {
        final Lock lock = c.getNPCLock();
        final NPCConversationManager cm = cms.get(c);
        if (cm == null || cm.getLastMsg() > -1) {
            return;
        }
        lock.lock();
        try {
            if (cm.pendingDisposal) {
                dispose(c);
            } else {
                c.setClickedNPC();
                cm.getIv().invokeFunction("end", mode, type, selection);
            }
        } catch (Exception e) {
            System.err.println("× ——  任务/出错‖编号(" + cm.getQuest() + ") —— NPC编号(" + cm.getNpc() + ")" + e);
            FileoutputUtil.log(FileoutputUtil.ScriptEx_Log, "× ——  任务/出错‖编号(" + cm.getQuest() + ") —— NPC编号(" + cm.getNpc() + ")" + e);
            dispose(c);
        } finally {
            lock.unlock();
        }
    }

    public final void startItemScript(final MapleClient c, final int npc, final String script, final int itemid) {
        final Lock lock = c.getNPCLock();
        lock.lock();
        try {
            if (!cms.containsKey(c) && c.canClickNPC()) {
                final Invocable iv = getInvocable("item/" + itemid + ".js", c, true);
                if (iv == null) {
                    System.out.println("× ——  物品/未定义‖编号(" + itemid + ")");
                    dispose(c);
                    return;
                }
                final ScriptEngine scriptengine = (ScriptEngine) iv;
                final NPCConversationManager cm = new NPCConversationManager(c, npc, -1, (byte) -1, iv);
                cms.put(c, cm);
                scriptengine.put("im", cm);
                c.getPlayer().setConversation(1);
                c.setClickedNPC();
                iv.invokeFunction("use");
            }
        } catch (final Exception e) {
            System.err.println("× ——  物品/出错‖编号(" + itemid + ")" + e);
            FileoutputUtil.log(FileoutputUtil.ScriptEx_Log,"× ——  物品/出错‖编号(" + itemid + ")" + e);
            dispose(c);
        } finally {
            lock.unlock();
        }
    }
    
    public final void dispose(final MapleClient c) {
        final NPCConversationManager npccm = cms.get(c);
        if (npccm != null) {
            cms.remove(c);
            if (npccm.getType() == -1) {
                c.removeScriptEngine("scripts/npc/" + npccm.getNpc() + ".js");
                c.removeScriptEngine("scripts/npc/notcoded.js");
            } else {
                c.removeScriptEngine("scripts/quest/" + npccm.getQuest() + ".js");
            }
        }
        if (c.getPlayer() != null && c.getPlayer().getConversation() == 1) {
            c.getPlayer().setConversation(0);
        }
    }

    public final NPCConversationManager getCM(final MapleClient c) {
        return cms.get(c);
    }
}