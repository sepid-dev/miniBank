export class Bank{
    constructor() {
        this.accounts=[];
    }
 addAccountList(account){
     return this.accounts.push(account);
    }

    getAccount(){
        return this.accounts;
    }
}