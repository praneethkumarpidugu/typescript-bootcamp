type BankAccount = {money: number, deposit: (val: number) => void};

let bankAccount: BankAccount = {
    money: 2000,
    deposit(money: number): void {
        this.money += value;
    }
};

let myself: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
    name: "max",
    bankAccount: bankAccount,
    hobbies: ["sports", "cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);