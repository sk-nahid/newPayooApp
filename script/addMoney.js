document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amountAdd = getValueById("add-amount");
    const pin = getValueById("add-money-pin");
    const balance = getTextById("main-balance");
    const account = document.getElementById("addmoney-account").value;
    const accountLength = account.length;
    console.log(accountLength);
    
    
    if(pin === 1234){
        const sum = amountAdd + balance;
        doSumById('main-balance', sum);

        const p = document.createElement('p');
        p.innerText =`
        added ${amountAdd} from ${account} account
        `
        const container = document.getElementById('transaction')
        container.appendChild(p)
    }
    else{
        alert('pin not ok')
    }
})