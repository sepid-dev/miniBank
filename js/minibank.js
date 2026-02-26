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
accountDisplay.addEventListener('click', function (e) {
    e.preventDefault();
    const card = e.target.closest(".account");
    if (!card) return;
    const id = card.dataset.id;
    const account = accountList.getAccount().find(acc => acc.id.toString()===id);
    if (!account) return;
    const amountInput = card.querySelector("input");
    const amount = Number(amountInput.value);
    const balanceV = card.querySelector('.balance-value');
    const actionBtn = e.target.closest('button');
    if (!actionBtn) return;
    if (actionBtn.classList.contains('withdraw')) {
        if (!amountInput.value) {
            Ui.creatAlert("Please enter an amount", 'danger');
            return;
        }
        const result = account.withdraw(amount);
        if (result.status) {
            balanceV.textContent = result.balance.toString();
            Ui.creatAlert(`The amount of ${amount} toman has been deducted from your account ( ${account.id} )`, 'success');
            accountList.updateLocalStorage();
        } else {
            Ui.creatAlert(result.message, 'danger');
        }
        amountInput.value = "";
    }
    if (actionBtn.classList.contains('deposit')) {
        if (!amountInput.value) {
            Ui.creatAlert("Please enter an amount", 'danger');
            return;
        }
        const result = account.deposit(amount);
        if (result.status) {
            balanceV.textContent = result.balance.toString();
            Ui.creatAlert(`The amount of ${amount} toman has been added to your account  ( ${account.id} )`, 'success');
            accountList.updateLocalStorage();
        } else {
            Ui.creatAlert(result.message, 'danger');
        }
        amountInput.value = "";
    }
});


document.addEventListener("DOMContentLoaded", function () {
    accountList.restoreFromLocalStorage();
    Ui.createAccountsDiv(accountList.getAccount());
});
