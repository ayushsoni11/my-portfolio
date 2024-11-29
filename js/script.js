var a = 5;
var b = 6;

console.log(`The sum of ${a} and ${b} is ${a+b}`)

let str = "HelloWorld"
console.log(str.slice(-1));

let arr = [1,2,3]
console.log(arr.splice(-1));

var obj = {
    name : "Ayush",
    age : 21, 
    address : {  // Nested object
        street : "123 Main St",
        city : "Indore",
    }
}

var d = new Date("25 Aug 2015");
console.log(d)
console.log(obj.address.city);

console.log(1&1 , 1&0, 0&1, 0&0);
console.log(0|1, 0|0 , 1|1, 1|0);
console.log(~0)

var a = -6;
console.log(a++);
console.log(++a);
console.log(a--);
console.log(a)

// let age = prompt("Enter age : ")
// if(age <= 18) {
//     console.log('You are not eligible to vote');
// } else {
//     console.log("You are eligible to vote");
// }

let marks = 30;
if(marks > 0 && marks <=70 ) {
    console.log("Passed")
} else if(marks > 70) {
    console.log("C grade");
} else if(marks > 80) {
    console.log("B grade");
} else if (marks > 90 && marks <= 100) {
    console.log("A grade");
} else {
    console.log("Invalid Marks");
}


