// Inputs and buttton
const presentInput = document.querySelector("#present");
const pastInput = document.querySelector("#past");
const btn = document.querySelector(".btn");

// display element
const year = document.querySelector(".year");
const month = document.querySelector(".month");
const week = document.querySelector(".week");
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const millisec = document.querySelector(".millisec");

// Re-assignable variable for current and past date.
let presentDateInTimeStamp, pastDateInTimeStamp;

// Setting the current date as a default value.
const currentDate = new Date();
const yyyy = currentDate.getFullYear();
const mmInTwoDigit = `${currentDate.getMonth() + 1}`.padStart(2, 0);
const ddInTwoDigit = `${currentDate.getDate()}`.padStart(2, 0);
presentInput.value = `${yyyy}-${mmInTwoDigit}-${ddInTwoDigit}`;

// Listening change event from the current input element.
presentInput.addEventListener("change", (e) => {
  // Getting input and convert it into millisec.
  presentDateInTimeStamp = Date.parse(e.target.value);
  // Changing the button text and bg color, if the user do not change the default input value.
  btnBGColorHandler("Age Calculate", "dodgerblue");
});

// Listening change event from the past input element.
pastInput.addEventListener("change", (e) => {
  // Getting input and convert it into millisec.
  pastDateInTimeStamp = Date.parse(e.target.value);
  // Changing the button text and bg color, if the user do not change the default input value.
  btnBGColorHandler("Age Calculate", "dodgerblue");
});

// Listening a click event on button.
btn.addEventListener("click", hadleTimestamp);

function hadleTimestamp() {
  // Checking if the present and past date has valid date in timestamp.

  if (presentDateInTimeStamp && pastDateInTimeStamp) {
    // Subtractic present date from the past.
    const ms = presentDateInTimeStamp - pastDateInTimeStamp;

    // Generating other date and time unit using millisec.
    const msToSec = Math.abs(ms / 1000);
    const msToMin = Math.abs(ms / (1000 * 60));
    const msToHrs = Math.abs(ms / (1000 * 60 * 60));
    const daysFromTimeStamp = Math.abs(ms / (1000 * 60 * 60 * 24));
    const yearFromDays = daysFromTimeStamp / 365;
    const monthFromYear = yearFromDays * 12;
    const weekFromDays = daysFromTimeStamp / 7;

    //Changing the text content to display the output.
    second.textContent = msToSec;
    minute.textContent = msToMin;
    hour.textContent = msToHrs;
    day.textContent = daysFromTimeStamp;
    year.textContent = Math.trunc(yearFromDays);
    month.textContent = Math.trunc(monthFromYear);
    week.textContent = Math.trunc(weekFromDays);
    millisec.textContent = Math.abs(ms);
  } else {
    btnBGColorHandler("Please change the both dates", "red");
  }
}

function btnBGColorHandler(text, bgColor) {
  // Change the background color and text after 3 seconds.
  setTimeout(() => {
    btn.textContent = `${text}`;
    btn.style.backgroundColor = `${bgColor}`;
  }, 3000);
}

window.onload = hadleTimestamp;
