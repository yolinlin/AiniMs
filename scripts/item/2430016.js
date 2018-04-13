function use() {
    var chance = Math.floor(Math.random()*5+1);
		im.gainItem(2430016,-1);
    im.gainItem(5220040,chance);
    im.dispose(); 
}