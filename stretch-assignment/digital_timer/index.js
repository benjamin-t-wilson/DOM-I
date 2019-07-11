var tenMS = document.querySelector("#msTens");
var hunMS = document.querySelector("#msHundreds");
var oneS = document.querySelector("#secondOnes");
var tenS = document.querySelector("#secondTens");
const digits = document.querySelectorAll(".digit");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");

tenMS.textContent = 0;
hunMS.textContent = 0;
oneS.textContent = 0;
tenS.textContent = 0;

let tenMSTimer = window.setInterval(() => {
  if (tenMS.textContent < 9) {
    tenMS.textContent++;
  } else if (tenMS.textContent == 9) {
    tenMS.textContent = 0;
  }
}, 10);

let hunMSTimer = window.setInterval(() => {
  if (hunMS.textContent < 9) {
    hunMS.textContent++;
  } else if (hunMS.textContent == 9) {
    hunMS.textContent = 0;
  }
}, 100);

let sTimer = window.setInterval(() => {
  if (oneS.textContent < 9) {
    oneS.textContent++;
  } else if (oneS.textContent == 9) {
    oneS.textContent = 0;
  }
}, 1000);

window.setTimeout(() => {
  clearInterval(tenMSTimer);
  clearInterval(hunMSTimer);
  clearInterval(sTimer);
  tenMS.textContent = 0;
  hunMS.textContent = 0;
  oneS.textContent = 0;
  tenS.textContent = 1;
  digits.forEach(cv => {
    cv.style.color = "red";
  });
}, 10000);

