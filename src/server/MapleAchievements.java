/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
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
package server;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;

public class MapleAchievements {

    private Map<Integer, MapleAchievement> achievements = new LinkedHashMap<Integer, MapleAchievement>();
    private static MapleAchievements instance = new MapleAchievements();

    protected MapleAchievements() {
        achievements.put(1, new MapleAchievement("购买 Donor Point", 2000, false));
        achievements.put(2, new MapleAchievement("达到 1 转生", 40, false));
        achievements.put(3, new MapleAchievement("达到 5 转生", 200, false));
        achievements.put(4, new MapleAchievement("达到 10 转生", 400, false));
        achievements.put(5, new MapleAchievement("达到 20 转生", 800, false));
        achievements.put(7, new MapleAchievement("声望", 20, false));
        /*achievements.put(9, new MapleAchievement("equipped a Reverse Item", 100, false));
        achievements.put(10, new MapleAchievement("equipped a Timeless Item", 100, false));*/
        achievements.put(11, new MapleAchievement("说出 'I like MapleStory'", 90, false));
        achievements.put(12, new MapleAchievement("击败 Female BOSS", 1800, false));
        achievements.put(13, new MapleAchievement("击败 Papulatus", 1400, false));
        achievements.put(14, new MapleAchievement("击败 Pianus", 1000, false));
        achievements.put(15, new MapleAchievement("击败 Almighty Zakum", 6000, false));
        achievements.put(16, new MapleAchievement("击败 Horntail", 12000, false));
        achievements.put(17, new MapleAchievement("击败 品克缤", 30000, false));
        achievements.put(18, new MapleAchievement("击败第一个 BOSS", 40, false));
        achievements.put(19, new MapleAchievement("赢得 OX Quiz", 200, false));
        achievements.put(20, new MapleAchievement("赢得 MapleFitness", 200, false));
        achievements.put(21, new MapleAchievement("赢得 Ola Ola", 200, false));
        achievements.put(22, new MapleAchievement("在组队地狱模式任务中清除BOSS", 8000, false));
        achievements.put(23, new MapleAchievement("杀死了 Almighty Chaos Zakum", 14000, false));
        achievements.put(24, new MapleAchievement("杀死了 Chaos Horntail", 26000, false));
        achievements.put(25, new MapleAchievement("赢得 Survival Challenge", 200, false));
        //achievements.put(26, new MapleAchievement("dealt over 10000 Damage [That pain?]", 20, false));
        //achievements.put(27, new MapleAchievement("dealt over 50000 Damage [Pain killer]", 30, false));
        //achievements.put(28, new MapleAchievement("dealt over 100000 Damage [Here]", 40, false));
        //achievements.put(29, new MapleAchievement("dealt over 500000 Damage [Here]", 50, false));
        //achievements.put(30, new MapleAchievement("dealt 999999 Damage [No pain no gain]", 10, false));
        achievements.put(31, new MapleAchievement("拥有 1 金币", 10, false));
        achievements.put(32, new MapleAchievement("拥有 10 金币", 20, false));
        achievements.put(33, new MapleAchievement("拥有 100 金币", 30, false));
        achievements.put(34, new MapleAchievement("拥有 1,000 金币", 60, false));
        achievements.put(35, new MapleAchievement("创建了一个家族", 200, false));
        //achievements.put(36, new MapleAchievement("made a Family [Senior]", 250, false));
        achievements.put(37, new MapleAchievement("清除 Crimsonwood 组队任务", 300, false));
        achievements.put(38, new MapleAchievement("击败 Von Leon", 8000, false));
        achievements.put(39, new MapleAchievement("击败 Empress Cygnus", 24000, false));
        achievements.put(40, new MapleAchievement("穿戴10级装备", 10, false));
        achievements.put(41, new MapleAchievement("穿戴20级装备", 20, false));
        achievements.put(42, new MapleAchievement("拥有 10,000 金币", 120, false));
        achievements.put(43, new MapleAchievement("拥有 100,000 金币", 240, false)); 
        achievements.put(44, new MapleAchievement("拥有 1,000,000 金币", 480, false)); 
        achievements.put(45, new MapleAchievement("拥有 10,000,000 金币", 960, false)); 
        achievements.put(46, new MapleAchievement("拥有 100,000,000 金币", 1920, false)); 
        achievements.put(47, new MapleAchievement("拥有 1,000,000,000 金币", 3840, false)); 
        achievements.put(48, new MapleAchievement("拥有 2,147,483,647 金币", 7680, false)); 
        achievements.put(49, new MapleAchievement("拥有 5 Fames", 100, false));
        achievements.put(50, new MapleAchievement("拥有 10 Fames", 200, false));
        achievements.put(51, new MapleAchievement("拥有 25 Fames", 500, false));
        achievements.put(52, new MapleAchievement("拥有 50 Fames", 1000, false));
        achievements.put(53, new MapleAchievement("拥有 100 Fames", 2000, false));
        achievements.put(54, new MapleAchievement("说出 'MapleStoryNX'", 90, false));
        achievements.put(55, new MapleAchievement("说出 'MapleStory'", 80, false));
        achievements.put(56, new MapleAchievement("说出 'Live'", 80, false));
        achievements.put(57, new MapleAchievement("说出 'Nice'", 80, false));
        achievements.put(58, new MapleAchievement("说出 'Maple'", 80, false));
        achievements.put(59, new MapleAchievement("说出 'Story'", 70, false));
        achievements.put(60, new MapleAchievement("说出 'Love You'", 70, false));
        achievements.put(61, new MapleAchievement("说出 'So diao'", 70, false));
        achievements.put(62, new MapleAchievement("说出 'Your Very diao'", 100, false));
        achievements.put(63, new MapleAchievement("说出 'I'm Happy'", 90, false));
        achievements.put(64, new MapleAchievement("说出 'Mr.Wanghaichuan Is Shabi'", 100, false));
        achievements.put(65, new MapleAchievement("杀死 Boss", 4000, false));
        achievements.put(66, new MapleAchievement("杀死 Targa Boss", 5000, false));
        achievements.put(67, new MapleAchievement("杀死 Scarlion Boss", 5000, false));
        achievements.put(68, new MapleAchievement("杀死 Arkarium", 22000, false));
        achievements.put(69, new MapleAchievement("杀死120级的希拉", 4000, false));
        achievements.put(70, new MapleAchievement("杀死190级的希拉", 28000, false));
        achievements.put(71, new MapleAchievement("穿戴30级装备", 30, false));
        achievements.put(72, new MapleAchievement("穿戴40级装备", 40, false));
        achievements.put(73, new MapleAchievement("穿戴50级装备", 50, false));
        achievements.put(74, new MapleAchievement("穿戴60级装备", 60, false));
        achievements.put(75, new MapleAchievement("穿戴70级装备", 70, false));
        achievements.put(76, new MapleAchievement("穿戴80级装备", 80, false));
        achievements.put(77, new MapleAchievement("穿戴90级装备", 90, false));
        achievements.put(78, new MapleAchievement("穿戴100级装备", 100, false));
        achievements.put(79, new MapleAchievement("穿戴110级装备", 110, false));
        achievements.put(80, new MapleAchievement("穿戴120级装备", 120, false));
        achievements.put(81, new MapleAchievement("穿戴130级装备", 130, false));
        achievements.put(82, new MapleAchievement("穿戴140级装备", 140, false));
        achievements.put(83, new MapleAchievement("达到 40 Reborns", 1600, false));
        achievements.put(84, new MapleAchievement("达到 70 Reborns", 2800, false));
        achievements.put(85, new MapleAchievement("达到 120 Reborns", 4800, false));
        achievements.put(86, new MapleAchievement("达到 190 Reborns", 7600, false));
        achievements.put(87, new MapleAchievement("达到 300 Reborns", 12000, false));
        achievements.put(88, new MapleAchievement("达到 500 Reborns", 20000, false));
        achievements.put(89, new MapleAchievement("达到 800 Reborns", 32000, false));
        achievements.put(90, new MapleAchievement("等级达到 30级", 20, false));
        achievements.put(91, new MapleAchievement("等级达到 70级", 40, false));
        achievements.put(92, new MapleAchievement("等级达到 120级", 60, false));
        achievements.put(93, new MapleAchievement("等级达到 200级", 80, false));
        achievements.put(94, new MapleAchievement("力量增加", 10, false));
        achievements.put(95, new MapleAchievement("力量达到100点", 30, false));
        achievements.put(96, new MapleAchievement("力量达到1000点", 60, false));
        achievements.put(97, new MapleAchievement("力量达到10000点", 200, false));
        achievements.put(98, new MapleAchievement("力量达到30000点", 600, false));
        achievements.put(99, new MapleAchievement("敏捷增加", 10, false));
        achievements.put(100, new MapleAchievement("敏捷达到100点", 30, false));
        achievements.put(101, new MapleAchievement("敏捷达到1000点", 60, false));
        achievements.put(102, new MapleAchievement("敏捷达到10000点", 200, false));
        achievements.put(103, new MapleAchievement("敏捷达到30000点", 600, false));
        achievements.put(104, new MapleAchievement("智力增加", 10, false));
        achievements.put(105, new MapleAchievement("智力达到100点", 30, false));
        achievements.put(106, new MapleAchievement("智力达到1000点", 60, false));
        achievements.put(107, new MapleAchievement("智力达到10000点", 200, false));
        achievements.put(108, new MapleAchievement("智力达到30000点", 600, false));
        achievements.put(109, new MapleAchievement("运气增加", 10, false));
        achievements.put(110, new MapleAchievement("运气达到100点", 30, false));
        achievements.put(111, new MapleAchievement("运气达到1000点", 60, false));
        achievements.put(112, new MapleAchievement("运气达到10000点", 200, false));
        achievements.put(113, new MapleAchievement("运气达到30000点", 600, false));
        achievements.put(114, new MapleAchievement("HP.达到 99,999", 200, false));
        achievements.put(115, new MapleAchievement("MP.达到 99,999", 200, false));
        achievements.put(116, new MapleAchievement("购买游戏技能大师", 1000, false));
        //achievements.put(117, new MapleAchievement("have purchased the Donor Pack [Philanthropist]", 1500, true));
        achievements.put(118, new MapleAchievement("等级达到 200级", 200, false));
        achievements.put(119, new MapleAchievement("扩大好友到 100 人", 200, false));
        achievements.put(120, new MapleAchievement("已经杀死 Castellan Toad", 30000, false));
        achievements.put(121, new MapleAchievement("制作并装备 Genesis Bandana", 200, false));
        achievements.put(122, new MapleAchievement("制作并装备 Blizzard Helmet", 600, false));
        achievements.put(123, new MapleAchievement("制作并装备 Ice's Fur Hat", 600, false));
        //achievements.put(124, new MapleAchievement("have crafted and equipped the Blizzard Cape [Crafter] (Orange)", 600, false));
        achievements.put(125, new MapleAchievement("制作并装备 Blizzard Gloves", 600, false));
        achievements.put(126, new MapleAchievement("制作并装备 Blizzard Armour", 600, false));
        achievements.put(127, new MapleAchievement("制作并装备 Blizzard Armour", 600, false));
        achievements.put(128, new MapleAchievement("制作并装备 Blizzard Boots", 600, false));
        achievements.put(129, new MapleAchievement("制作并装备 Blizzard Polearm", 1000, false));
        //achievements.put(130, new MapleAchievement("have crafted and equipped Flaming Katana [Crafter] (Green)", 4000, false));
        //achievements.put(131, new MapleAchievement("have crafted and equipped Super Zakum Helmet [Crafter] (Red+++++) ", 10000, false));
        //achievements.put(132, new MapleAchievement("have crafted and equipped Chaos Horntail Necklace (+2) [Crafter] (Red++++++)", 20000, false));
        achievements.put(133, new MapleAchievement("制作并装备 Pink Bean Hat", 40000, false));
        //achievements.put(134, new MapleAchievement("have crafted and equipped Angelic Blessing [Crafter] (Red+++)", 10000, false));
        //achievements.put(135, new MapleAchievement("have crafted and equipped White Angelic Blessing [Crafter] (Red++++)", 20000, false));
        //achievements.put(136, new MapleAchievement("have crafted and equipped Awakening Mind of Maple Necklace [Crafter] (Red++)", 10000, false));
        //achievements.put(137, new MapleAchievement("have crafted and equipped Strawberry Popsicle [Crafter] (Red)", 7500, false));
        //achievements.put(138, new MapleAchievement("have crafted and equipped Spiegelmann's Gold Badge [Crafter] (Red+)", 10000, false));
        achievements.put(139, new MapleAchievement("装备 精灵吊坠", 100, false));
        achievements.put(140, new MapleAchievement("为家族贡献GP", 20, false));
        achievements.put(141, new MapleAchievement("家族GP达到 480 点", 100, false));
        achievements.put(142, new MapleAchievement("家族GP达到 3360 点", 1500, false));
        achievements.put(143, new MapleAchievement("家族GP达到 14400 点", 5000, false));
        achievements.put(144, new MapleAchievement("家族GP达到 28800 点", 11500, false));
        achievements.put(145, new MapleAchievement("家族GP达到 57600 点", 24000, false));
        achievements.put(146, new MapleAchievement("家族GP达到 115200 点", 50000, false));
        achievements.put(147, new MapleAchievement("获得并装备 Mark of the Beta", 20, false));
        //achievements.put(148, new MapleAchievement("have bought and equipped the OTP User's Bluff Medal [OTP]", 10, false));
        achievements.put(149, new MapleAchievement("清理组队任务简单模式下的BOSS", 400, false));
        achievements.put(150, new MapleAchievement("清理组队任务普通模式下的BOSS", 2000, false));
        achievements.put(151, new MapleAchievement("清理组队任务英雄模式下的BOSS", 4400, false));
        achievements.put(152, new MapleAchievement("清理罗密欧与朱丽叶组队任务", 200, false));
        achievements.put(153, new MapleAchievement("清理朱丽叶与罗密欧组队任务", 200, false));
        achievements.put(154, new MapleAchievement("清理毒雾森林组队任务", 300, false));
        achievements.put(155, new MapleAchievement("清理老海盗组队任务", 200, false));
        achievements.put(156, new MapleAchievement("清理陷入危险的坎特组队任务", 200, false));
        achievements.put(157, new MapleAchievement("清理怪物公园", 200, false));
        achievements.put(158, new MapleAchievement("交换并装备白色腰带", 100, false));
        achievements.put(159, new MapleAchievement("交换并装备黄色腰带", 300, false));
        achievements.put(160, new MapleAchievement("交换并装备蓝色腰带", 600, false));
        //achievements.put(161, new MapleAchievement("have exchanged and equipped Red Belt [Dojo] (Cyan)", 900, false));
        achievements.put(162, new MapleAchievement("交换并装备黑色腰带", 1200, false));
       //achievements.put(163, new MapleAchievement("have exchanged and equipped So Gong's Gloves [Dojo] (Orange)", 1800, false));
        //achievements.put(164, new MapleAchievement("have exchanged and equipped Mu Gong's Gloves [Dojo] (White)", 2200, false));
        //achievements.put(165, new MapleAchievement("have exchanged and equipped Hero's Gloves [Dojo] (Blue)", 3000, false));
        //achievements.put(166, new MapleAchievement("have exchanged and equipped Pink Zakum Helmet [As Pinky As Pie]", 400, false));
        achievements.put(167, new MapleAchievement("清理武陵道场", 300, false));
        achievements.put(168, new MapleAchievement("获得你的第一个跳跃任务点", 50, false));
        achievements.put(169, new MapleAchievement("共获得 10 个跳跃任务点", 180, false));
        achievements.put(170, new MapleAchievement("共获得 30 个跳跃任务点", 500, false));
        achievements.put(171, new MapleAchievement("共获得 70 个跳跃任务点", 1200, false));
        achievements.put(172, new MapleAchievement("共获得 120 个跳跃任务点", 2300, false));
        achievements.put(173, new MapleAchievement("共获得 200 个跳跃任务点", 4000, false));
        achievements.put(174, new MapleAchievement("银行存款 1 金币", 2, false));
        achievements.put(175, new MapleAchievement("银行存款 1,000 金币", 10, false));
        achievements.put(176, new MapleAchievement("银行存款 100,000 金币", 20, false));
        achievements.put(177, new MapleAchievement("银行存款 1,000,000 金币", 30, false));
        achievements.put(178, new MapleAchievement("银行存款 10,000,000 金币", 50, false));
        achievements.put(179, new MapleAchievement("银行存款 100,000,000 金币", 120, false));
        achievements.put(180, new MapleAchievement("银行存款 1,000,000,000 金币", 300, false));
        achievements.put(181, new MapleAchievement("银行存款 2,147,483,647 金币", 750, false));
        achievements.put(182, new MapleAchievement("you have a total of 1 ability point in your ability point bank [Saver] (Brown)", 2, false));
        achievements.put(183, new MapleAchievement("you have a total of 100 ability points in your ability point bank [Saver] (Grey)", 100, false));
        achievements.put(184, new MapleAchievement("you have a total of 1000 ability points in your ability point bank [Saver] (Magenta)", 1000, false));
        achievements.put(185, new MapleAchievement("you have a total of 30000 ability points in your ability point bank [Saver] (Cyan)", 3000, false));
        achievements.put(186, new MapleAchievement("you have a total of 100000 ability points in your ability point bank [Saver] (Orange)", 10000, false));
        achievements.put(187, new MapleAchievement("已达到200疲劳度", 600, false)); // 164 Achievements
        }

    public static MapleAchievements getInstance() {
        return instance;
    }

    public MapleAchievement getById(int id) {
        return achievements.get(id);
    }

    public Integer getByMapleAchievement(MapleAchievement ma) {
        for (Entry<Integer, MapleAchievement> achievement : this.achievements.entrySet()) {
            if (achievement.getValue() == ma) {
                return achievement.getKey();
            }
        }
        return null;
    }
}