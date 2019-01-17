// implicit declaration
// String
let myVar: string = "hello";
let myName: string = "Max";
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

// Using Types in functions arguments and return
// types

function returnMyName(): string{
    return myName;
}
console.log(returnMyName());

function sayHello(): void {
    console.log("say hello");
}

// types in arguments

function multiply(value1:number, value2:number): number {
    return value1 * value2;
}

console.log(multiply(2, 2));

// Function Types
let myMultiply: (val1:number, val2:number) => number;

myMultiply = multiply;
console.log(myMultiply(5,2));

let userData: {name: string, age: number} = {
    name: "hello",
    age: 27
};

// userData = {
//     a: "hello",
//     b: 27
// };
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [10, 20, 30],
    output: function(all: boolean): number[] {
        return this.data;
    }
}

// exmaple practice 2
// let complex_data : {data: number[], output: (all : boolean) => number[]}
// = {
//     data: [10, 20, 30],
//     output: function (all: boolean){
//         return this.data;
//     }
// }

// Type aliases

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2 : Complex = {
    data: [10, 0.5, 30],
    output: function(all: boolean) {
        return this.data;
    }
}

// Union Types
let myRealRealAge: string | number = 27;
myRealRealAge = "27";

// Checking types during runTime
let finalValue = 20;

if(typeof finalValue == "number")
{
    console.log("This is a number");
    
}

// The never type added with Typescript 2.0

function neverReturns():never
{
    throw new Error('An Error!');
}

// Nullable types with Typescript 2.0

let treatisAsNull: number | null = 12;
treatisAsNull = null;

let treatisAlsoAsNull;
treatisAlsoAsNull = null;

// Avoiding Implicit Any
let anything: any;
anything = 27;

// Link to more compiler options : https://www.typescriptlang.org/docs/handbook/compiler-options.html

