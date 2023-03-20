window.onload = () => {
  fetch("https://api.monobank.ua/bank/currency")
    .then((response) => response.json())
    .then((data) => {
      showRate(data);
    });
};

let buyUSD = document.getElementById("buyUSD");
let buyEURO = document.getElementById("buyEURO");

function showRate(data) {
  buyUSD.innerText = data[0].rateBuy.toFixed(2);

  let listValueConvertor1 = document.getElementById("listValueConvertor1");
  listValueConvertor1.innerText = data[0].rateBuy.toFixed(2) * 100;

  let sellUSD = document.getElementById("sellUSD");
  sellUSD.innerText = data[0].rateSell.toFixed(2);

  let listValueConvertor2 = document.getElementById("listValueConvertor2");
  listValueConvertor2.innerText = data[0].rateSell.toFixed(2) * 100;

  buyEURO.innerText = data[1].rateBuy.toFixed(2);

  let sellEURO = document.getElementById("sellEURO");
  sellEURO.innerText = data[1].rateSell.toFixed(2);
}

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

let buttonCalculate1 = document.getElementById("buttonCalculate1");
buttonCalculate1.addEventListener("click", handleClick1);

function handleClick1(event) {
  event.preventDefault();

  let sellConvertor = document.getElementById("sellConvertor");
  let inputSell = sellConvertor.value.trim();

  let sellSelect = document.getElementById("sellSelect");
  let selectedOption = sellSelect.options[sellSelect.selectedIndex];
  let selectedValue = selectedOption.value;

  let listValueConvertor1 = document.getElementById("listValueConvertor1");

  if (inputSell && !isNaN(inputSell)) {
    if (selectedValue == "USD") {
      listValueConvertor1.innerHTML = Math.round(inputSell * buyUSD.innerText);
    } else {
      if (selectedValue == "EUR") {
        
        listValueConvertor1.innerText = Math.round(
          inputSell * buyEURO.innerText
        );
      }
    }
  } else {
    sellConvertor.value = "";
    sellConvertor.setAttribute("placeholder", "enter a number");
  }
}
