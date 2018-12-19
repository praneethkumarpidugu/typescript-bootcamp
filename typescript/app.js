"use strict";
// implicit declaration
// String
var myVar = "hello";
// Not right myVar = 1
// Number
var myNum = 1;
// Boolean
var myBool = true;
// explicit declaration
var anyType;
anyType = 27;
// anyType = '27';
// Array
var myArray = ["cooking", "guitar"];
console.log(typeof myArray);
//  Not Good => myArray = [1];
myArray = ["This is a string"];
// Tuples
var myTuples = ["hello", 99];
// Enum
var myColors;
(function (myColors) {
    myColors[myColors["Yellow"] = 0] = "Yellow";
    myColors[myColors["Green"] = 1] = "Green";
    myColors[myColors["Blue"] = 2] = "Blue";
})(myColors || (myColors = {}));
var myEnum = myColors.Yellow;
console.log("myEnum " + myEnum);
// Lets see how Enums affect the order.
var myNumbers;
(function (myNumbers) {
    myNumbers[myNumbers["order1"] = 0] = "order1";
    myNumbers[myNumbers["order2"] = 100] = "order2";
    myNumbers[myNumbers["order3"] = 101] = "order3";
})(myNumbers || (myNumbers = {}));
var myResult = myNumbers.order3;
console.log(myResult);
