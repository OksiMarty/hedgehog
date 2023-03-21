window.onload = () => {
  fetch("https://api.monobank.ua/bank/currency")
    .then((response) => response.json())
    .then((data) => {
      showRate(data);
    });
};

let buyUSD = document.getElementById("buyUSD");
let buyEUR = document.getElementById("buyEUR");

let sellUSD = document.getElementById("sellUSD");
let sellEUR = document.getElementById("sellEUR");

function showRate(data) {
  buyUSD.innerText = data[0].rateBuy.toFixed(2);

  let listValueConvertor1 = document.getElementById("listValueConvertor1");
  listValueConvertor1.innerText = data[0].rateBuy.toFixed(2) * 100;

  sellUSD.innerText = data[0].rateSell.toFixed(2);

  let listValueConvertor2 = document.getElementById("listValueConvertor2");
  listValueConvertor2.innerText = data[0].rateSell.toFixed(2) * 100;

  buyEUR.innerText = data[1].rateBuy.toFixed(2);

  sellEUR.innerText = data[1].rateSell.toFixed(2);
}

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
          inputSell * buyEUR.innerText
        );
      }
    }
  } else {
    sellConvertor.value = "";
    sellConvertor.setAttribute("placeholder", "Number!");
    sellConvertor.style.outline = "0.2rem solid red";
  }
}

let buttonCalculate2 = document.getElementById("buttonCalculate2");
buttonCalculate2.addEventListener("click", handleClick2);

function handleClick2(event) {
  event.preventDefault();

  let buyConvertor = document.getElementById("buyConvertor");
  let inputBuy = buyConvertor.value.trim();

  let buySelect = document.getElementById("buySelect");
  let selectedOption = buySelect.options[buySelect.selectedIndex];
  let selectedValue = selectedOption.value;

  let listValueConvertor2 = document.getElementById("listValueConvertor2");

  if (inputBuy && !isNaN(inputBuy)) {
    if (selectedValue == "USD") {
      listValueConvertor2.innerHTML = Math.round(inputBuy * sellUSD.innerText);
    } else {
      if (selectedValue == "EUR") {
        listValueConvertor2.innerText = Math.round(
          inputBuy * sellEUR.innerText
        );
      }
    }
  } else {
    buyConvertor.value = "";
    buyConvertor.setAttribute("placeholder", "Number!");
    buyConvertor.style.outline = "0.2rem solid red";
  }
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
