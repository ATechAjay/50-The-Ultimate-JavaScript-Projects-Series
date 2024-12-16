"use strict";

const timeDownElement = document.querySelector(".time_down");

const happyNewYear = [2025, 0, 1];

setInterval(() => {
  const remain = timeUp();

  timeDownElement.textContent = ` ${remain.hrs} : ${remain.min} : ${remain.sec}`;
}, 1000);

function timeUp() {
  // New year 2025
  const newYear = new Date(...happyNewYear);
  const newYearToMM = Date.parse(newYear);

  // Current time
  const now = new Date();
  const nowToMM = Date.parse(now);

  const remainTimeInMM = newYearToMM - nowToMM;

  if (remainTimeInMM <= 0) {
    timeDownElement.textContent = `Already we've reached our destination. 🎉`;
  }
  const mmToSec = remainTimeInMM / 1000;
  const mmToMin = remainTimeInMM / (1000 * 60);
  const mmToHrs = remainTimeInMM / (1000 * 60 * 60);

  return {
    hrs: Math.trunc(mmToHrs),
    min: Math.trunc(mmToMin),
    sec: mmToSec,
  };
}
