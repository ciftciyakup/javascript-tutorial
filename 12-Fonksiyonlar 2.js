/*var findX=function(t,V){
    var x=t*V;
    return x;
}*/
function findX(t,V, fn){
    var x=t*V;
    return fn(x);
}

function sum10(para1){
    return para1+10;
}
var yol1=findX(4,50,sum10);
console.log(yol1);

var yol2=findX(7,63,sum10);
console.log(yol2);

/*var yol1=findX(4,50, 8);
console.log(yol1);*/

/*var yol2=findX(7);
console.log(yol2);*/