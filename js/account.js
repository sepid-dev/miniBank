
export class Account{
    constructor(owner,balance=0,id) {
        this.owner=owner;
        this.balance=balance;
        this.id=Date.now();
    }
    withdraw(balance,amount){
if(balance<0){
    alert('the cost is unacceptable');
}
else{
    return balance+amount;
}
    }

    deposit(balance,amount){
        if(balance<0){
            alert('the cost is unacceptable');
        }
        else{
            return balance-amount;
        }
    }

}