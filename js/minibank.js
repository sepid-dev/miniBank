import {Account} from "./account.js";
import {Ui} from "./ui.js";
import {Bank} from "./bank.js";
export const accountList = new Bank();
const account=new Account();
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
accountDisplay.addEventListener('click',function (e){
    let balanceText=e.target.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.firstElementChild.textContent;
    let amount=Number(e.target.parentElement.parentElement.firstElementChild.value);
    let balanceB=Number(balanceText);
    e.preventDefault();
    if(e.target.classList.contains('withdraw')){
        e.target.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.firstElementChild.textContent=account.withdraw(balanceB,amount);
        e.target.parentElement.parentElement.firstElementChild.value="";
    }
    if(e.target.classList.contains('deposit')){
        e.target.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.firstElementChild.textContent=account.deposit(balanceB,amount);
        e.target.parentElement.parentElement.firstElementChild.value="";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    console.log(accountList.accounts);
    console.log(account.id);
})
