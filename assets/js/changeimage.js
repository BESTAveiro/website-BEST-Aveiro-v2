function changeImage(){
    var section=document.getElementById("home");
    section.backgroundImage=images[x];
    x++;

    if(x >=images.length){
        x=0;
    }

    fadeImg(img,100,true);
    setTimeout("changeImage()",30000);
}

function fadeImg(e1, val, fade){
    if(fade==true){
        val--;
    }else{
        val++;
    }
    if(val>0 && val<100){
        e1.style.opacity=val/100;
        setTimeout(function(){fadeImg(e1,val,fade);},10);
    }
}

var images=[];
x=0;
images[0]="url(../images/homebg.jpg) no-repeat center left";
images[1]="url(../images/featurebg.jpg) no-repeat center left";
// images[0]="image1.jpg";
setTimeout("changeImage()",30000);
