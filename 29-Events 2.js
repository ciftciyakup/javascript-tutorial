var num1=document.querySelector("#numberOne");
var num2=document.querySelector("#numberTwo");
var sum=document.querySelector("#sum");

num1.addEventListener("input",topla);
num2.addEventListener("input",topla);

function topla(){
    var one=parseInt(num1.value)||0;
    var two=parseInt(num2.value)||0;

    sum.innerHTML="Toplama Sonucu: "+(one+two);
}