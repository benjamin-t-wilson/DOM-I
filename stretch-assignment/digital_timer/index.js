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

var intervalId = null;
var masterCount = 0;
function startTime() {
  digits.forEach(cv => {
    cv.style.color = "black";
  });
  startBtn.style.visibility = "hidden";
  ++masterCount;
  var mctens = masterCount % 10;
  if (masterCount < 9) {
    tenMS.textContent = masterCount;
  } else {
    tenMS.textContent = mctens;
  }
  var mchuns = Math.floor(masterCount / 10);
  if (mchuns > 9) {
    hunMS.textContent = mchuns % 10;
  } else {
    hunMS.textContent = mchuns;
  }
  var mcsecs = Math.floor(masterCount / 100);
  if (mcsecs > 9) {
    oneS.textContent = mcsecs % 10;
  } else {
    oneS.textContent = mcsecs;
  }
  var mctensec = Math.floor(masterCount / 1000);
  tenS.textContent = mctensec;
  if (mctensec == 1) {
    clearInterval(intervalId);
    digits.forEach(cv => {
      cv.style.color = "red";
    });
    startBtn.style.visibility = "visible";
  }
}
startBtn.addEventListener("click", () => {
  intervalId = window.setInterval(startTime, 10);
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  masterCount = 0;
  tenMS.textContent = 0;
  hunMS.textContent = 0;
  oneS.textContent = 0;
  tenS.textContent = 0;
  digits.forEach(cv => {
    cv.style.color = "black";
  });
  startBtn.style.visibility = "visible";
});
