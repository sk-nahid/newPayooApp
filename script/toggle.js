function handelToggle (id, status){
    document.getElementById(id).style.display = status;
}

document.getElementById('box-add-money').addEventListener('click', function(event){
    handelToggle("add-money","block");
    handelToggle("cash-out","none");
    handelToggle("transaction", "none")
    handelToggle("transfer-money","none");
})
document.getElementById('box-cash-out').addEventListener('click', function(event){
    handelToggle("add-money","none");
    handelToggle("cash-out","block")
    handelToggle("transfer-money","none");
    handelToggle("transaction", "none")

})
document.getElementById('box-transfer-money').addEventListener('click', function(event){
    handelToggle("add-money","none");
    handelToggle("cash-out","none")
    handelToggle("transfer-money","block")
    handelToggle("transaction", "none")
})
document.getElementById('box-transaction').addEventListener('click', function(event){
    event.preventDefault();
    handelToggle("add-money","none");
    handelToggle("cash-out","none")
    handelToggle("transfer-money","none")
    handelToggle("transaction", "block")
})
