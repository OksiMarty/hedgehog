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

function getRate() {
  const api =
    "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11";
  return fetch(api)
    .then((response) => response.json())
    .then(function (data) {
      let usdBuyRate = document.getElementById("buyUsd");
      usdBuyRate.innerText = data[1].buy;
    });
}
getRate();
