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
        accountDisplay.innerHTML="";
        accountList.forEach(i => {
            const div = document.createElement('div');
            div.className = 'col-md-4 account';
            div.innerHTML = `<div>
                <span class="spanM">owner: <span class="spanV">${i.owner}</span></span>
                <span>balance : <span class="spanV">${i.balance}</span></span>
            </div>`;
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

