function getValueById(id){
    const value = document.getElementById(id).value;
    const convartedValue = parseFloat(value);
    return convartedValue
}
function getTextById(id){
    const value = document.getElementById(id).innerText;
    const convartedValue = parseFloat(value);
    return convartedValue
}

function doSumById(id,value){
    document.getElementById(id).innerText = value;
}
