document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amountAdd = getValueById("add-amount");
    const pin = getValueById("add-money-pin");
    const balance = getTextById("main-balance");
    
    
    if(pin === 1234){
        const sum = amountAdd + balance;
        const now = doSumById("main-balance",sum)
        
    }
    else{
        alert('pin not ok')
    }
})