/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package custom;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;

/**
 *
 * @author Itzik
 */
public class MoonlightAchievements {

    private Map<Integer, MoonlightAchievement> achievements = new LinkedHashMap<Integer, MoonlightAchievement>();
    private static MoonlightAchievements instance = new MoonlightAchievements();

    protected MoonlightAchievements() {
     // Moonlight Achievements: (Reset per day)
        achievements.put(99001, new MoonlightAchievement("登陆", 0));
        achievements.put(99002, new MoonlightAchievement("升级", 0));
        achievements.put(99003, new MoonlightAchievement("完成武陵道场", 0));
        achievements.put(99004, new MoonlightAchievement("得到一点声望", 0));
        achievements.put(99005, new MoonlightAchievement("完成一个副本", 0));
        achievements.put(99006, new MoonlightAchievement("完成怪物公园", 0));
        achievements.put(99007, new MoonlightAchievement("完成 Azwan", 0));
        achievements.put(99008, new MoonlightAchievement("杀死一个BOSS", 0));
        achievements.put(99009, new MoonlightAchievement("完成一个组队任务", 0));
        achievements.put(99010, new MoonlightAchievement("Craft an 物品", 0));
    }

    public static MoonlightAchievements getInstance() {
        return instance;
    }

    public MoonlightAchievement getById(int id) {
        return achievements.get(id);
    }

    public Integer getByMapleAchievement(MoonlightAchievement ma) {
        for (Entry<Integer, MoonlightAchievement> achievement : this.achievements.entrySet()) {
            if (achievement.getValue() == ma) {
                return achievement.getKey();
            }
        }
        return null;
    }
}