var myElement=document.querySelector("button");

/*myElement.onclick=function(){
    alert("Hello");
};*/

myElement.addEventListener("click",function1);

myElement.addEventListener("click",function2);

function function1(){
    alert("Merhaba");
}

function function2(){
    console.log("Merhaba2");
}