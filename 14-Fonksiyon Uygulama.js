/*Daire Çevresi = 2 * Pi * yarıçap
Daire Alanı = Pi * yarıçapın karesi*/

/*var yaricap=prompt("Lütfen yarıçapı giriniz.");

function daireCevreAlan(yaricap){
    var cevre=parseInt(2*Math.PI*yaricap);
    alert("Daire çevresi: "+cevre);
    var alan=parseInt(Math.PI*yaricap*yaricap);
    alert("Dairenin alanı: "+alan);
}

daireCevreAlan(yaricap);*/

//daireCevreAlan(20); Fonksiyon bu şekilde de çalışır ancak biz yarıçap değerini kullanıcıdan almak istiyoruz.

var vize=prompt("Lütfen Vize Notunu Giriniz");
var final=prompt("Lütfen Final Notunu Giriniz");

function dersSonucu(vize,final){
    var dersNotu=parseInt(vize*0.4+final*0.6);
    if(dersNotu>=50){
        alert("Dersi Geçtiniz, Notunuz: "+dersNotu);
    }
    else{
        alert("Dersi Geçemediniz, Notunuz: "+dersNotu);
    }
}

dersSonucu(vize,final);