// implicit declaration
// String
let myVar: string = "hello";
// Not right myVar = 1

// Number
let myNum: number = 1;

// Boolean
let myBool: boolean = true;

// explicit declaration
let anyType: number;
anyType = 27;
// anyType = '27';

// Array

let myArray = ["cooking", "guitar"];
console.log(typeof myArray);

//  Not Good => myArray = [1];

myArray = ["This is a string"];

// Tuples
let myTuples: [string, number] = ["hello", 99];

// Enum

enum myColors {
    Yellow,
    Green,
    Blue
}

let myEnum: myColors = myColors.Yellow;
console.log("myEnum " + myEnum);

// Lets see how Enums affect the order.

enum myNumbers {
    order1,
    order2 = 100,
    order3
}

let myResult: myNumbers = myNumbers.order3;
console.log(myResult);

// any

let anyTypes: any = "hello";
console.log(anyTypes);

anyTypes = {"a": "hello"};
console.log(anyTypes);

// Using Types in functions



