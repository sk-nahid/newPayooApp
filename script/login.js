document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pin = getValueById("account-password");
    const account = document.getElementById("account-number").value;
    const accountLength = account.length;

    if (accountLength === 11) {
      if (pin === 1234) {
        window.location.href = "./home.html";
      }
    } else {
      alert("not done");
    }
  });
