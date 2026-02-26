import {alertCreate} from './minibank.js';
import {accountDisplay} from './minibank.js';
import {accountList} from './minibank.js'

export class Ui {
    static creatAlert(message, classAlert) {
        alertCreate.innerHTML = "";
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
            div.className = 'col-md-5 account';
            div.setAttribute('data-id',i.id.toString())
            div.innerHTML = `<div class="p-3" style="display: flex;flex-direction: column;gap:10px">
                <span class="spanM">account : <span class="spanV">${i.id}</span></span>
                <span class="spanM">owner: <span class="spanV">${i.owner}</span></span>
                <span class="spanM">balance : <span class="spanV balance-value">${i.balance}</span></span>
               </div>
           <form class="my-2 p-3">
            <input class="p-2 amount" placeholder="enter amount" type="number">
            <div class="my-3 flex flex-row">
            <button  class="btn btn-success withdraw" >withdraw</button>
            <button  class="btn btn-danger deposit">deposit</button>
            </div>
</form>`;
            accountDisplay.appendChild(div);
        })
    }

    static addAccount(account) {
        if (account.owner === "" || isNaN(account.balance)) {
            Ui.creatAlert("you must fill the fields", 'danger');
        } else {
            accountList.addAccountList(account);
            Ui.createAccountsDiv(accountList.getAccount());
        }
    }

    static clearInputs() {
        document.getElementById('owner').value = "";
        document.getElementById('balance').value = "";
    }
}

