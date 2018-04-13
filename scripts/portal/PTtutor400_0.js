importPackage(Packages.tools.packet);

function enter(pi) {
    pi.getClient().getSession().write(CField.NPCPacket.getNPCTalk(1402001, 0, "哎呀······已经开始了吗？不能稍微晚点吗？", "00 00", 17, 1402001));
    return true;
}