// var square=document.querySelector("#square");
// var rectangle=document.querySelector("#rectangle");

// square.addEventListener("click",clickSquare);
// rectangle.addEventListener("click",clickRectangle,/*true*/);

/*function clickSquare(event){
    // console.log(event.target);
    // event.target.style.backgroundColor="black";
    console.log(event.clientX,event.clientY);
    event.stopPropagation();
    console.log("Square Clicked");
}
function clickRectangle(){
    console.log(event.target);
    console.log("Rectangle Clicked");
}*/

/*var thumb1=document.getElementById("thumb1")
var thumb2=document.getElementById("thumb2")
var thumb3=document.getElementById("thumb3")

thumb1.addEventListener("click",showImage);
thumb1.addEventListener("click",showImage);
thumb1.addEventListener("click",showImage);*/

var thumb=new Array;

for(var i=1;i<4;i++){
    thumb[i]=document.getElementById("thumb"+i);
    thumb[i].addEventListener("click",showImage);
}

function showImage(){
    
    var allBigImages=document.querySelectorAll("#image1,#image2,#image3");

    for(var x=0;x<allBigImages.length;x++){
        allBigImages[x].className="hide";
    }
    
    var imgID=this.attributes["data-pic"].value;
    var picture=document.getElementById(imgID);
    // Daha kısa bir kod yazmak için If Else yerine
    // picture.classList.toggle("hide"); Yazılabilir
    if(picture.className==="hide"){
        picture.className="";
    }else{
        picture.className="hide";
    }
}