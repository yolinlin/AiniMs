importPackage(Packages.tools.packet);

function enter(pi) {
    pi.getClient().getSession().write(CField.NPCPacket.getNPCTalk(1402001, 0, "��ѽ�������������Ѿ���ʼ���𣿲�����΢�����", "00 00", 17, 1402001));
    return true;
}