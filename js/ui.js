import {alertCreate} from './minibank.js';
import {accountDisplay} from './minibank.js';
import {accountList} from './minibank.js'

export class Ui {
    static creatAlert(message, classAlert) {
        const div = document.createElement('div');
        div.className = `alert alert-${classAlert} col-md-4 text-center`;
        div.textContent = message;
        alertCreate.appendChild(div);
        setTimeout(function () {
            alertCreate.innerHTML = "";
        }, 3000)
    }

    static createAccountsDiv(accountList) {
        accountDisplay.innerHTML = "";
        accountList.forEach(i => {
            const div = document.createElement('div');
            div.className = 'col-md-6 account';
            div.innerHTML = `<div class="p-3">
                <span class="spanM">account : <span class="spanV">${i.id}</span></span>
                <span class="spanM">owner: <span class="spanV">${i.owner}</span></span>
                <span class="spanM">balance : <span class="spanV">${i.balance}</span></span>
               </div>
           <form class="my-5 formTransaction">
            <input class="p-2" type="text" id="amount" placeholder="enter amount">
            <div class="my-3 flex flex-row">
            <button  class="btn btn-success withdraw" id="withdraw" type="submit" value="withdraw">withdraw</button>
            <button  class="btn btn-danger deposit" id="deposit" type="submit" value="deposit">deposit</button>
            </div>
</form>`;
            accountDisplay.appendChild(div);
        })
    }

    static createTransactionDiv() {
    }

    static addAccount(account) {
        if (account.owner === "" || isNaN(account.balance)) {
            Ui.creatAlert("you must fill the fields", 'danger');
        } else {
            accountList.addAccountList(account);
            Ui.createAccountsDiv(accountList.getAccount());
            Ui.createTransactionDiv();
        }
    }

    static clearInputs() {
        document.getElementById('owner').value = "";
        document.getElementById('balance').value = "";
    }
}

