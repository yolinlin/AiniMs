importPackage(Packages.tools.packet);

var status = 0;

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 1) {
        cm.sendNextS("(现在的女皇和她的骑士团们吗······？气氛好像不太对，大家表情都很严肃。也是，在这种情况下，这也是必然的。)", 17);
    } else if (status == 2)
        cm.sendNextPrevS("(与会议员们的表情好像也不是很好。他们是怎么判断这个情况的呢？要偷听一下吗？)", 17);
    else if (status == 3)
        cm.sendNextS("希纳斯不是真的皇帝······是真的吗？", 5, 1402200);
    else if (status == 4)
        cm.sendNextPrevS("你说的太过分了。不是真皇帝的话，难道说我们是再服侍一位假皇帝吗？希纳斯现在还是皇帝呢。", 5, 1402201);
    else if (status == 5)
        cm.sendNextPrevS("虽然是真皇帝······但是正统性受到了怀疑，这难道不是事实吗？如果真的有人拥有圣地的宝物的话······", 5, 1402203);
    else if (status == 6)
        cm.sendNextPrevS("阿莉亚先皇留下的宝物······记录上确实有。", 5, 1402202);
    else if (status == 7)
        cm.sendNextPrevS("唉······真让人为难。如果那个宝物能够证明谁是真正的皇帝的话，如果真的拥有皇帝血统的人不是希纳斯，而是另有其人的话······我们该怎么办呢？", 5, 1402200);
    else if (status == 8)
        cm.sendNextPrevS("希纳斯一直领导着圣地，我们不能背叛她······但是又不能对拥有真正皇帝血统的人装作不知道······真是为难。", 5, 1402203);
    else if (status == 9)
        cm.sendNextPrevS("好不容易吧冒险岛世界的人聚集了起来，组建了联盟······大家都是相信希纳斯的，才会加入联盟。如果希纳斯之外的其他人成为皇帝的话，联盟一定会发生动摇的。", 5, 1402202);
    else if (status == 10)
        cm.sendNextPrevS("我们在这里讨论，也得不出什么结论。不知道那个声称拥有真正皇帝血统的人是什么人······应该先确认一下。", 5, 1402201);
    else if (status == 11)
        cm.sendNextPrevS("嘘······好像终于到了。", 5, 1402201);
    else if (status == 12)
        cm.sendNextS("(······终于，一切事情的导演者登场了。)", 17);
    else if (status == 13) {
        cm.dispose();
        cm.showHilla();
    }
}