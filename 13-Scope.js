//var x=55; global variable (evrensel değişken)

function samplefunction(){
    var x=55; //local variable (yerel değişken)
    console.log(x);
}

samplefunction();

console.log(x);

//Statement Function (Geri Dönüşsüz Fonksiyon)

/*function funk1(){
    //kodlar...
}

if(){
    ...
}*/

//Expression Function (Geri Dönüşlü Fonksiyon)

/*var fonk2=function(){
    kodlar...
}*/

//4+5=9