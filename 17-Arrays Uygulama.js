var myArray=[4,7,5,2],toplam=0,carpim=1;

for(var i=0;i<myArray.length;i++){
    toplam+=myArray[i];
    carpim*=myArray[i];
}

console.log("Toplam: "+toplam+" Çarpım: "+carpim);