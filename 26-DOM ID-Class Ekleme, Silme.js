var myNode=document.querySelector("#myHeader");
console.log(myNode);

/*myNode.removeAttribute("id");
console.log(myNode);

myNode.setAttribute("id","kimlik");
console.log(myNode);

console.log(myNode.hasAttribute("id"));*/

console.log(myNode.classList.length);

myNode.classList.add("sinif");
console.log(myNode);
console.log(myNode.classList.length);

myNode.classList.remove("display-3");
console.log(myNode);

myNode.classList.toggle("hidden");
console.log(myNode);

myNode.classList.toggle("hidden");
console.log(myNode);