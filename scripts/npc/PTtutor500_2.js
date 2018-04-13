importPackage(Packages.tools.packet);

var status = 12;

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 13) {
        cm.sendNextS("来了这么多人啊。你们都是来听我的说明的吗？真的非常感谢。我就是斗胆宣称拥有真正皇帝血统的人，我叫希拉。", 5, 1402400);
    } else if (status == 14)
        cm.sendNextPrevS("...", 5, 1402100);
    else if (status == 15)
        cm.sendNextPrevS("······我只是想证明那句话是假的，只是为了这个。", 5, 1402101);
    else if (status == 16)
        cm.sendNextPrevS("啊，当然······你们可能不会相信我的话。但是真相就是真相。现在，我想说说圣地的很多人都遗忘了的过去的故事。关于黑魔法师支配冒险岛世界的时候，那时候的皇帝阿莉亚······", 5, 1402400);
    else if (status == 17)
        cm.sendNextPrevS("(······阿莉亚······)", 17);
    else if (status == 18)
        cm.sendNextPrevS("大家都知道，当时圣地的很多东西都被黑魔法师破坏，几乎没有记录流传下来。但是有意见事大家都知道，当时的皇帝阿莉亚拥有一件名叫司卡亚的宝物。", 5, 1402400);
    else if (status == 19)
        cm.sendNextPrevS("阿莉亚皇帝拥有的圣地的宝物司卡亚······那只传给冒险岛世界的皇帝的神秘宝石，拥有保护皇帝，增强皇帝能力的力量。", 5, 1402400);
    else if (status == 20)
        cm.sendNextPrevS("有关司卡亚的记录确实存在，但是没人知道那个宝石拥有什么样的力量。", 5, 1402104);
    else if (status == 21)
        cm.sendNextPrevS("这是当然的。因为希纳斯没有司卡亚。但是我不一样，因为司卡亚传给了我。", 5, 1402400);
    else if (status == 22)
        cm.sendNextPrevS("由于黑魔法师和军团长们的攻击，司卡亚从圣地消失······这就是你们知道的全部。但是皇帝的神物司卡亚怎么可能就这样消失？那么重要的东西，先祖们会把它丢掉吗？", 5, 1402400);
    else if (status == 23)
        cm.sendNextPrevS("怎么可能？司卡亚被非常小心的传了下来。为了防止黑魔法师和手下们的攻击，被秘密地······传给了拥有真正皇帝血统的人，就这样传了数百年。", 5, 1402400);
    else if (status == 24)
        cm.sendNextPrevS("那是说那个人是你吗？", 5, 1402105);
    else if (status == 25)
        cm.sendNextPrevS("这是事实。", 5, 1402400);
    else if (status == 26)
        cm.sendNextPrevS("但，但是······你怎么证明你拥有的那个司卡亚是真的呢？你完全可以拿个假的来骗我们嘛。", 5, 1402103);
    else if (status == 27)
        cm.sendNextPrevS("呵呵，问的好。司卡亚虽然名气大，但却是一块几乎没有人见过的神秘宝石。现在冒险岛世界中知道司卡亚长什么样的人，只有你们这些见过司卡亚的画的人。", 5, 1402400);
    else if (status == 28)
        cm.sendNextPrevS("如果我拥有的司卡亚，和各位见到的样子一样的话，不就简单了吗？", 5, 1402400);
    else if (status == 29)
        cm.sendNextPrevS("喂，你在说神秘？宝石都长得差不多，我们又没办法断定其它地方没有留下有关司卡亚的记录，不是吗？", 5, 1402106);
    else if (status == 30)
        cm.sendNextPrevS("我们又不是几百年前的人，不，就算是几百年前的人，也几乎没人见过司卡亚······老实说，我觉得可能性微乎其微。", 5, 1402400);
    else if (status == 31)
        cm.sendNextPrevS("还有其他证据。希纳斯软弱的身体就是证明。如果希纳斯拥有真正的皇帝血统，就不会被神兽的力量压制······所以她的身体才会那么弱。希纳斯，你也知道吧？你那么弱的原因······", 5, 1402400);
    else if (status == 32)
        cm.sendNextPrevS("你太无礼了！", 5, 1402102);
    else if (status == 33)
        cm.sendNextPrevS("哎呀······让你觉得无礼了吗？真对不起。但是我没说错，不是吗？", 5, 1402400);
    else if (status == 34)
        cm.sendNextPrevS("我并不是让大家现在就相信我的话。但是，如果觉得我的话有道理的话，就先听着，然后好好讨论一番。真难道不是你应该做的吗，希纳斯？", 5, 1402400);
    else if (status == 35)
        cm.sendNextPrevS("······是的，我能坐上现在的位子······不是因为我很特别。只，只是因为这是与身俱来的。", 5, 1402100);
    else if (status == 36)
        cm.sendNextPrevS("但是我的正统性······不容有任何怀疑。需要的话······我可以把一切都说给大家听。", 5, 1402100);
    else if (status == 37)
        cm.sendNextPrevS("希纳斯！", 5, 1402101);
    else if (status == 38)
        cm.sendNextPrevS("为了我们认为正确的道路，不断把其他人拖入我们的战争，而我却在这里受到所有人的保护。这都是因为我是皇帝，不是因为别的。但是如果我没有成为皇帝的资格的话······", 5, 1402100);
    else if (status == 39)
        cm.sendNextPrevS("我没有资格领导冒险岛世界的这么多人······", 5, 1402100);
    else if (status == 40)
        cm.sendNextPrevS("(声音虽然在颤抖，但目光很坚定。虽然看上去很柔弱，但其实意志很坚强。策士脸上一副绝对不能接受的表情，团长们则摆出了战斗的姿势，看来人望还挺高的吗？真的是阿莉亚的······)", 17);
    else if (status == 41)
        cm.sendNextPrevS("好吧，那就不用兜圈子了。我们就在这里证明谁是拥有真正皇帝血统的人吧。据说司卡亚放在真正的主人手上就会发光。圣地的女皇希纳斯······如果你拥有真正的皇帝血统，就拿起司卡亚吧。", 5, 1402400);
    else if (status == 42)
        cm.sendNextPrevS("如果你是真正的冒险岛世界的皇帝，司卡亚一定会发光······", 5, 1402400);
    else if (status == 43) {
        cm.dispose();
        cm.showSkaia();
    }
}