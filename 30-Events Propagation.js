var square=document.querySelector("#square");
var rectangle=document.querySelector("#rectangle");

square.addEventListener("click",clickSquare);
rectangle.addEventListener("click",clickRectangle);

function clickSquare(event){
    event.stopPropagation();
    console.log("Square Clicked");
}
function clickRectangle(){
    console.log("Rectangle Clicked");
}