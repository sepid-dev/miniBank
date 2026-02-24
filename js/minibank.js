import {Account} from "./account.js";
import {Ui} from "./ui.js";
import {Bank} from "./bank.js";
export const accountList = new Bank();
const formCreate = document.getElementById('formCreate');
export const alertCreate = document.getElementById('alertCreate');
export const accountDisplay = document.getElementById('accountDisplay');
formCreate.addEventListener('submit', function (e) {
    e.preventDefault();
    const owner = document.getElementById('owner').value;
    const balance = Number(document.getElementById('balance').value);
    const account = new Account(owner, balance);
    Ui.addAccount(account);
    Ui.clearInputs();
})
document.addEventListener("DOMContentLoaded", function () {
    console.log(accountList.accounts);
})
