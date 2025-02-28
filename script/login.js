const pin = getValueById("account-password");
const account = document.getElementById("account-number").value;
const accountLength= account.length;

document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    if(accountLength === 11){
        if(pin === 1234){
            window.location.href="./home.html"
        }
    }
    else{
        alert( 'not done')
    }
})