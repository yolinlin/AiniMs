importPackage(Packages.tools.packet);

var status = 42;

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 43) {
        cm.sendNextS("······啊······", 5, 1402100);
    } else if (status == 44)
        cm.sendNextPrevS("果然一点光都没有。难道真还不够清楚吗？", 5, 1402400);
    else if (status == 45)
        cm.sendNextPrevS("...", 5, 1402100);
    else if (status == 46)
        cm.sendNextPrevS("现在下结论还早，女皇。", 5, 1402102);
    else if (status == 47)
        cm.sendNextPrevS("是啊，女皇陛下，谁知道那个光到底是不是真的呢？", 5, 1402106);
    else if (status == 48)
        cm.sendNextPrevS("没，没错！发光的魔法，我也会用。", 5, 1402103);
    else if (status == 49)
        cm.sendNextPrevS("等神兽回来之后，就会真相大白。希纳斯，绝对不能相信那个女人的话。", 5, 1402104);
    else if (status == 50)
        cm.sendNextPrevS("如果连你也动摇的话，大家就都会动摇。打起精神。", 5, 1402105);
    else if (status == 51)
        cm.sendNextPrevS("好不容易决定组成联盟，为联合冒险岛世界的所有力量打下了基础。希纳斯女皇，真说不定是什么人的阴谋，想趁机离间我们，让我们互相猜疑。不要被那个来历不明的女人的话欺骗。", 5, 1402101);
    else if (status == 52)
        cm.sendNextPrevS("大家······", 5, 1402100);
    else if (status == 53)
        cm.sendNextPrevS("哎呀······你的骑士团们想否定事实吗？", 5, 1402400);
    else if (status == 54)
        cm.sendNextPrevS("之前你率领圣地的骑士团，把冒险岛世界带上了正确的道路，希纳斯······我不想否定你的功劳。你是个聪明人，现在还不算太晚，希望你能做出正确的选择。", 5, 1402400);
    else if (status == 55)
        cm.sendNextPrevS("说出真正的皇帝是谁，并把皇帝的位子让出来。", 5, 1402400);
    else if (status == 56)
        cm.sendNextPrevS("然后把这件事告诉联盟。", 5, 1402400);
    else if (status == 57)
        cm.sendNextPrevS("我不想催你，你现在一定不知所措，我给你时间，让你整理一下心情。如果你怀疑我的话，欢迎你继续对我进行调查。", 5, 1402400);
    else if (status == 58)
        cm.sendNextPrevS("但最终你会知道，冒险岛世界的皇帝是我，希拉······", 5, 1402400);
    else if (status == 59)
        cm.sendNextPrevS("(阿尔弗雷德应该准备好了吧······现在该我出场了吗？好的，深呼吸，一，二，三！)", 17);
    else if (status == 60) {
        cm.dispose();
        cm.showPhantomWait();
    }
}