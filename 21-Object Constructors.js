/*var person1={
    name: "isim1",
    lastName: "soyisim1",
    age: 30
}
console.log(person1);

var person2={
    name: "isim2",
    lastName: "soyisim2",
    age: 25
}
console.log(person2);*/

function Player(name,surname,age){
    this.name=name;
    this.surname=surname;
    this.age=age;
}

/*var person1=new Player("isim1","soyisim1",30);
var person2=new Player("isim2","soyisim2",25);
var person3=new Player("isim3","soyisim3",20);

console.log(players1);
console.log(players2);
console.log(players3);*/

var players=[
    new Player("isim1","soyisim1",30),
    new Player("isim2","soyisim2",25),
    new Player("isim3","soyisim3",20)
];

console.log(players[0]);
console.log(players[1].name);
console.log(players[2].surname);