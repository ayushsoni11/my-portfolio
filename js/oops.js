class Demo{
    
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    work() {
        console.log("working");
    }
}

// const obj1 = new Demo("Ayush soni", 21);
// obj1.name = "Aastha kanade";
// obj1["name"] = "Ayush"
// obj1["age"] = 32
// obj1.work();

// const a = 8;
// let ar = [];
// ar.push("jhj");
// ar = [2,7];
// console.log(ar)

// console.log(obj1.name);
// console.log(obj1.age);
// console.log(obj1.work())

// Inheritance
class Animal {
    walk() {
        console.log("Animal is Barking");
    }
}

class Dogs extends Animal{
    bark(){
        console.log("dog is barking");
    }
}

let obj1 = new Animal();
let obj2 = new Dogs();
obj2.bark();
obj2.walk();
obj1.walk();