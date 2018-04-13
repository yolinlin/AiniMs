function use() {
    if (im.getChar().getGender() == 0) {
        im.gainItem(1040154,1)  
        im.gainItem(1003192,1) 
        im.gainItem(1060145,1)      
            } 
    else if(im.getChar().getGender() == 1){
        im.gainItem(1041156,1)  
        im.gainItem(1003193,1) 
        im.gainItem(1061166,1)    
            }   
        im.removeAll(2430191);             
        im.gainItem(3700012,1)  
        im.gainItem(1142263,1)  
	im.dispose(); 
}