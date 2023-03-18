/*window.onload = () => {
  fetch("https://api.monobank.ua/bank/currency")
    .then((response) => response.json())
    .then((data) => {
      showRate(data);
    });
};

function showRate(data) {
  let buyUSD = document.getElementById("buyUSD");
  buyUSD.innerText = data[0].rateBuy.toFixed(2);

  let sellUSD = document.getElementById("sellUSD");
  sellUSD.innerText = data[0].rateSell.toFixed(2);

  let buyEURO = document.getElementById("buyEURO");
  buyEURO.innerText = data[1].rateBuy.toFixed(2);

  let sellEURO = document.getElementById("sellEURO");
  sellEURO.innerText = data[1].rateSell.toFixed(2);
}*/

let newDate = new Date();

let year = newDate.getFullYear();
let day = newDate.getDate();

let date = document.getElementById("date");
let month = newDate.getMonth() + 1;

if (month < 10) {
  month = `0${month}`;
}

date.innerHTML = `${day}:${month}:${year}`;

function newTime() {
  let time = document.getElementById("time");

  let date = new Date();
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  time.textContent = `${hours}:${minutes}`;
}

setInterval(newTime, 1000);

let sellConvertor = document.getElementById("sellConvertor");
sellConvertor.onChange = function () {
  let moneySell = sellConvertor.value;
  console.log(moneySell);
};
