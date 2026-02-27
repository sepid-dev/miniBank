export class Account {
    constructor(owner, balance = 0,id=new Date().getTime(),transaction=[]) {
        this.owner = owner;
        this.balance = balance;
        this.id = id;
        this.transaction=transaction;
    }

    withdraw(amount) {
        if (amount <= 0) {
            return {status: false, message: "Invalid amount"};
        }
        if (amount > this.balance) {
            return {status: false, message: "Insufficient balance"};
        }

        this.balance -= amount;
        this.transaction.push({
            type: "withdraw",
            amount,
            date: new Date().toLocaleDateString()
        });
        return {status: true, balance: this.balance};
    }

    deposit(amount) {
        if (amount <= 0) {
            return {status: false, message: "Invalid amount"};
        }
        this.balance += amount;
        this.transaction.push({
            type: "deposit",
            amount,
            date: new Date().toLocaleDateString()
        });
        return {status: true, balance: this.balance};
    }
}