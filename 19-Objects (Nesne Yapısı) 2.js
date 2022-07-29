var person1={
    name: "isim1",
    lastName: "soyisim1",
    age: 33,
    childs: ["cocuk1","cocuk2","cocuk3"],
    fullName: function(){
        // return person1.name+" "+person1.lastName;
        return this.name+" "+this.lastName;
    }
}

// console.log(person1);

// console.log(person1.childs[1]);

console.log(person1.fullName());