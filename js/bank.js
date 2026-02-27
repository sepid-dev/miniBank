import {Account} from "./account.js";

export class Bank{
    constructor() {
        this.accounts = [];
    }

    addAccountList(account){
        this.accounts.push(account);
        this.updateLocalStorage();
    }

    getAccount(){
        return this.accounts;
    }

    updateLocalStorage(){
        const plainAccounts = this.accounts.map(acc => ({
            owner: acc.owner,
            balance: acc.balance,
            id: acc.id,
            transaction:acc.transaction
        }));
        localStorage.setItem('account', JSON.stringify(plainAccounts));
    }

    restoreFromLocalStorage(){
        const data = JSON.parse(localStorage.getItem('account')) || [];
        this.accounts = data.map(acc => new Account(acc.owner, acc.balance, acc.id, acc.transaction));
    }
}