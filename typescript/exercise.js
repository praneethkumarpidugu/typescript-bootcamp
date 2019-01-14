"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "max",
    bankAccount: bankAccount,
    hobbies: ["sports", "cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
// How Code gets Compiled
var myNewName = "hello";
myNewName = 27;
