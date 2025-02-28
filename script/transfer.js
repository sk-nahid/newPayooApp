document.getElementById("btn-transfer-money").addEventListener('click', function(event){
    event.preventDefault();
    const amount = getValueById('transfer-amount');
    const pin = getValueById('transfer-pin');
    const balance = getTextById('main-balance');
    const account = document.getElementById('transfer-account').value;
    const accountLength = account.length;
   

    if(pin === 1234){
        const sum = balance - amount;
        doSumById('main-balance', sum);

        const p = document.createElement('p');
        p.innerText= `
            transfer ${amount}$ from ${account} account.
        `
        const container = document.getElementById('transaction');
        container.appendChild(p)
    }
    else{
        alert('not ok')
    }

})