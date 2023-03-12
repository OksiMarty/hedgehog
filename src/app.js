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
  let hours = date.getHours();
  let minutes = date.getMinutes();
  time.textContent = `${hours}:${minutes}`;
}

setInterval(newTime, 1000);
