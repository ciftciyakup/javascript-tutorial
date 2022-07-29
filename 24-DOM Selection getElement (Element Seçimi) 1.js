// console.log(document.getElementById("myHeader"));

// var myElement=document.getElementById("myHeader");

// console.log(myElement);

/*myElement.textContent="New Jumbotron";
myElement.innerText="Yeni Jumbotron";
myElement.innerHTML="<h2>Kucuk Baslik</h2>"*/

// console.log(myElement);

// myElement.style.backgroundColor="red";

/*var myClass=document.getElementsByClassName("nav-link");

console.log(myClass);

console.log(myClass[1]);

myClass[2].textContent="İletişim";
myClass[2].style.borderBottom="1px solid red";*/

var myElements=document.getElementsByTagName("h4");

console.log(myElements);

// myElements[0].textContent="H4 Başlıklar";

for(var i=0;i<myElements.length;i++){
    myElements[i].textContent="Yeni Baslik";
}