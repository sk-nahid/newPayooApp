document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const amount = getValueById("cashout-amount");
    const pin = getValueById("cashout-pin");
    const balance = getTextById('main-balance');


    if(pin === 1234){
        const sum = balance - amount;
        doSumById("main-balance", sum)
    }
    else{
        alert('not ok')
    }
})