const timerDiv = document.getElementById("timer");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const mil = document.getElementById("mil");

let minute = 0;
let second = 0;
let millisecond = 0;

let cron;
let counting = false;

function playPauseTimer() {
  if (counting === false) {
    cron = setInterval(() => {
      timer();
    }, 10);
    counting = true;
  } else {
    clearInterval(cron);
    counting = false;
  }
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }

  min.textContent = returnData(minute);
  sec.textContent = returnData(second);
  mil.textContent = returnData(millisecond / 10);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`;
}

function resetTimer() {
  minute = 0;
  second = 0;
  millisecond = 0;

  min.textContent = "00";
  sec.textContent = "00";
  mil.textContent = "00";
}

timerDiv.addEventListener("click", playPauseTimer);

timerDiv.addEventListener("dblclick", resetTimer);
