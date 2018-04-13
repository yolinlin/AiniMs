/* Author: Xterminator
	NPC Name: 		�ޱ�
	Map(s): 		Maple Road : Snail Hunting Ground I (40000)
	Description: 		Beginner Helper
*/
var mainmenu = "��ӭ����������ڿ�ʼð��֮ǰ����ʲô���ʾ����ʰɡ�\r\n#b#L0#�����ƶ�������#l\r\n#L1#���˹���ķ�����#l\r\n#L2#��ȡ��Ʒ�ķ�����#l\r\n#L3#������ô�죿#l\r\n#L4#��ôѧϰְҵ���ܣ�#l\r\n#L5#�����ҹ��������#l\r\n#L6#�����ҿ��Ե�սʿ�İ취��#l\r\n#L7#�����ҿ��Ե������ֵİ취��#l\r\n#L8#�����ҿ��Ե������İ취��#l\r\n#L9#�����ҿ��Ե�ħ��ʦ�İ취��#l\r\n#L10#�����ҿ��Ե������İ취��#l\r\n#L12#���Ķ���ȷ���Ҽ�ȡ�ĵ��ߣ�#l\r\n#L13#��ô��װ�����ߣ�#l\r\n#L14#��ô��ȷ������װ���ĵ��ߣ�#l\r\n#L15#����(K)��ʲô��#l\r\n#L16#��ô��ȥ��������#l\r\n#L17#�����ʲô��#l";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status == 2 && mode == 0) {
            cm.sendNext("Here's how to take down a monster. Every monster possesses an HP of its own and you'll take them down by attacking with either a weapon or through spells. Of course the stronger they are, the harder it is to take them down.");
        }
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            cm.sendSimple(mainmenu);
        } else if (status == 1) {
            if (selection == 0) { // How do I move?
                status = -1;
                cm.sendNext("�Ҹ���������ƶ���������#b���Ҽ�#k������ƽ�ػ�б�������ߣ���#b Alt��#k������Ծ����ЩЬ�ӿ�����������ƶ��ٶȻ���Ծ������\r\\r\#fUI/DialogImage.img/Help/0#");
            } else if (selection == 1) { // How do I take down the monsters?
                cm.sendNext("�Ҹ�������˹���ķ�����ÿֻ���ﶼ���Լ�������������������ħ�����������Դ��˹��������Щ������������������Ǻܲ�����");
            } else if (selection == 2) { // How can I pick up an item?
                status = 5;
                cm.sendNext("�Ҹ������ȡ��Ʒ�ķ��������˹����ս��Ʒ���ڵ��ڵ��ϣ���ʱ��վ����Ʒǰ��#b Z��#k��#b����0 ��#k���Ϳ��Լ�ȡ��Ʒ��\r\n\r\n#fUI/DialogImage.img/Help/2#");
            } else if (selection == 3) { // What happens when I die?
                status = 8;
                cm.sendNext("��֪������Ҫ��ô�죿�����ս�����������ֵΪ0����ͻ������顣����ȥ��λ�û����Ĺ�������˿���˵�����������������ܽ��С�");
            } else if (selection == 4) { // When can I choose a job?
                status = 11;
                cm.sendNext("��֪��ʲôʱ����תְ������~�������Լ���ÿ��ְҵ���й��е�תְ������һ��8~10����Ϳ���ѡ��ְҵ��Ŭ������");
            } else if (selection == 5) { // Tell me more about this island!
                status = 14;
                cm.sendNext("��֪�������������������ǽвʺ絺�Ŀ��и���������Զ�ž�������Ϸ����ˣ����������ٳ������͵Ĺ����������԰�ȫ�ĵ�����������ϰ�ĺõط���");
            } else if (selection == 6) { // What should I do to become a Warrior?
                status = -1;
                cm.sendNext("���뵱#bսʿ#k���š�������ô�����Ҫȥ��������������������սʿ֮�壬��#r��ʿ����#k��ȥ������#b��������#k������������ѵ����ͻᵱսʿ����Ҫ��սʿ��ĵȼ�����ﵽ10��.");
            } else if (selection == 7) { // What should I do to become a Bowman?
                status = -1;
                cm.sendNext("���뵱���������ڽ�������ᵱ�����֡��ڽ������ϲ��й����ֵĴ��䣬���ִ塣����������Ȼ�����㵱�����ֵķ��������ؼ���Ҫ����������ĵȼ�Ӧ����10����");
            } else if (selection == 8) {
                status = -1;
                cm.sendNext("���뵱����������Ҫȥ�����������ķ������С��϶��Ĵ��³�ͻ�����㵱�����İ취���ؼ�����Ϊ�˵���������ĵȼ�Ӧ����10����");
            } else if (selection == 9) { // What should I do to become a Magician?
                status = 19;
                cm.sendNext("���뵱ħ��ʦ��������Ҫȥ������������ħ�����֡��������������ܶ�ħ��ʦ��������������Ҫ����˹�����ͻ����㵱ħ��ʦ��");
            } else if (selection == 10) { // What should I do to become a Thief?
                status = -1;
                cm.sendNext("�����Ϊ#b����#k����Ҫתְ�Ļ������뵽������ȥ����#rŵ����˹#k�ĺ���������Լ���#b����#��");
            } else if (selection == 11) { // How do I raise the character stats? (S)
                status = 22;
                cm.sendNext("You want to know how to raise your character's ability stats? First press #bS#k to check out the ability window. Every time you level up, you'll be awarded 5 ability points aka AP's. Assign those AP's to the ability of your choice. It's that simple.");
            } else if (selection == 12) { // How do I check the items that I just picked up?
                status = -1;
                cm.sendNext("����֪���������ȷ�����ȡ�ĵ����أ��㰴��Z�����Լ�ȡ���ϵ���Ʒ����Щ��Ʒ�Զ��ŵ����߱������㰴��I������ȷ�ϱ��������ݡ�");
                cm.ShowWZEffect("UI/tutorial.img/28");
            } else if (selection == 13) { // How do I put on an item?
                status = -1;
                cm.sendNext("����װ���������ȴ򿪱���(I)�ɡ��������ȷ�������еĵ���Ȼ��˫��һ�����߰ɡ���ô��Ϳ���װ���õ��ߡ�����Ҫע����Ǵ��װ��������ְҵ���ȼ������������ơ���������ȷ�ϵ��ߵ�װ����������ʹ�õ��߰ɡ��������װ����(E)�������ߺ�ֱ�ӰѸõ����ƶ�������װ���Ĳ��֡�");
                cm.ShowWZEffect("UI/tutorial.img/29");
            } else if (selection == 14) { // How do I check out the items that I'm wearing?
                status = -1;
                cm.sendNext("����ȷ������װ���ĵ����𣿰���E������Դ�װ��������������Ϳ���ȷ�����װ������װ����˫�����ߵĻ������߾ͱ��ص�����(I)��");
            } else if (selection == 15) { // What are skills? (K)
                status = -1;
                cm.sendNext("תְ�������ѧϰ�����רҵ���ܣ�������趨��ݼ�������Щ����ʹ�����������ס���������Ҳ���ð�Ctrl����ֻ�ÿ�ݼ��Ϳ��Է���������K������Դ򿪼��ܴ���");
                cm.ShowWZEffect("UI/tutorial.img/23");
            } else if (selection == 16) { // How do I get to Victoria Island?
                status = -1;
                cm.sendNext("���ϸ۳˴����ȥ������������W�������ȷ�������ڵ�λ�á���Ҫ�˴���Ҫһ���Ľ�ң�����������Թ���׬Ǯ�ɡ�");
            } else if (selection == 17) { // What are mesos?
                status = -1;
                cm.sendNext("�����ð�յ��Ļ��ҡ��ý������Թ�����ֵ��ߡ����Թ�������̵������߻�����������Ϳ��Ի�ý�ҡ�");
            }
        } else if (status == 2) { // How do I take down the monsters?
            cm.sendNextPrev("Ϊ�˴��˹����Ӧ��װ����������#b I��#k�򿪱���������#b װ��#kȻ��˫������װ�����������ɡ�����װ���ú�#b Ctrl��#k���Ϳ���ʹ��������ֻҪ�����������ţ��Ϳ��Ը����׵ش��˹��\r\n\r\n#fUI/DialogImage.img/Help/1#");
        } else if (status == 3) { // How do I take down the monsters?
            cm.sendNextPrev("תְ�������ѧϰ�����רҵ���ܣ�������趨��ݼ�������Щ����ʹ�����������ס���������Ҳ���ð�Ctrl����ֻ�ÿ�ݼ��Ϳ��Է�����");
        } else if (status == 4) {
            status = 0;
            cm.sendSimple(mainmenu);
        } else if (status == 5) { // How can I pick up an item?
            cm.sendNext("�Ҹ������ȡ��Ʒ�ķ��������˹����ս��Ʒ���ڵ��ڵ��ϣ���ʱ��վ����Ʒǰ��#b Z��#k��#b����0 ��#k���Ϳ��Լ�ȡ��Ʒ��\r\n\r\n#fUI/DialogImage.img/Help/2#");
        } else if (status == 6) { // How can I pick up an item?
            cm.sendNextPrev("���������ı������ˣ��Ͳ����ټ�ȡ��Ʒ������Ӧ�ðѲ���Ҫ����Ʒ�����̵���ȥ��������������תְ������ӡ�");
        } else if (status == 7) {
            status = 0;
            cm.sendSimple(mainmenu);
        } else if (status == 8) { // What happens when I die?
            cm.sendNext("��֪������Ҫ��ô�죿�����ս�����������ֵΪ0����ͻ������顣����ȥ��λ�û����Ĺ�������˿���˵�����������������ܽ��С�");
        } else if (status == 9) { // What happens when I die?
            cm.sendNextPrev("���ֱ���������û���κ���ʧ�ġ����Ƕ���ְҵ������˵Ӱ��ʹ��ˣ���Ϊ��������Ͷ�ʧ���־���ֵ��Ҫ���ذ�");
        } else if (status == 10) {
            status = 0;
            cm.sendSimple(mainmenu);
        } else if (status == 11) { // When can I choose a job?
            cm.sendNext("��֪��ʲôʱ����תְ������~�������Լ���ÿ��ְҵ���й��е�תְ������һ��8~10����Ϳ���ѡ��ְҵ��Ŭ������");
        } else if (status == 12) { // When can I choose a job?
            cm.sendNextPrev("Level isn't the only thing that determines the advancement, though. You also need to boost up the levels of a particular ability based on the occupation. For example, to be a warrior, your STR has to be over 35, and so forth, you know what I'm saying? Make sure you boost up the abilities that has direct implications to your job.");
        } else if (status == 13) {
            status = 0;
            cm.sendSimple(mainmenu);
        } else if (status == 14) { // Tell me more about this island!
            cm.sendNext("��֪�������������������ǽвʺ絺�Ŀ��и���������Զ�ž�������Ϸ����ˣ����������ٳ������͵Ĺ����������԰�ȫ�ĵ�����������ϰ�ĺõط���");
        } else if (status == 15) { // Tell me more about this island!
            cm.sendNextPrev("������������ø�ǿ�󣬾�Ҫ�뿪����������㲻����ѧ��ְҵ���ܡ�����������и���ĵ�������������������������������û�������ȡ�");
        } else if (status == 16) { // Tell me more about this island!
            cm.sendNextPrev("��ôȥ������������������ϲ���һ����#m60000#�ĸۿڣ��������кܴ�ķɴ����ڴ�ǰ����������Ҵ��Ĵ�����������֪���ˡ�");
        } else if (status == 17) { // Tell me more about this island!
            cm.sendNextPrev("�����һ�Ҫ������һ���¡�����㲻֪���������Ķ����Ͱ�#bw��#k������ִ��ͼ�������ȷ�����λ�ã����ص�����·����#bEsc������#k�ٴΰ�#bw��#k�����ͼ�ͻ�رա�");
        } else if (status == 18) {
            status = 0;
            cm.sendSimple(mainmenu);
        } else if (status == 19) { // What should I do to become a Magician?
            cm.sendNext("���뵱ħ��ʦ��������Ҫȥ������������ħ�����֡��������������ܶ�ħ��ʦ��������������Ҫ����˹�����ͻ����㵱ħ��ʦ��");
        } else if (status == 20) { // What should I do to become a Magician?
            cm.sendNextPrev("����ħ��ʦ�����ְҵ��ͬ������8��תְ����Ȼħ��ʦ�����תְ����Ҫ����Ŭ��Ҳ�ȱ��ְҵ����ú�ѡ��ְҵ�ɡ�");
        } else if (status == 21) {
            status = 0;
            cm.sendSimple(mainmenu);
        } else if (status == 22) { // How do I raise the character stats? (S)
            cm.sendNext("You want to know how to raise your character's ability stats? First press #bS#k to check out the ability window. Every time you level up, you'll be awarded 5 ability points aka AP's. Assign those AP's to the ability of your choice. It's that simple.");
        } else if (status == 23) { // How do I raise the character stats? (S)
            cm.sendNextPrev("Place your mouse cursor on top of all abilities for a brief explanation. For example, STR for warriors, DEX for bowman, INT for magician, and LUK for thief. That itself isn't everything you need to know, so you'll need to think long and hard on how to emphasize your character's strengths through assigning the points.");
        } else if (status == 24) {
            status = 0;
            cm.sendSimple(mainmenu);
        }
    }
}