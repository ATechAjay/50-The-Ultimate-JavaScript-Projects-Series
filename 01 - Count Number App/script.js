// step - 1
// Select all required element on which we are going to listen event.
const result = document.querySelector(".result");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

// result.textContent = "5"
// result.innerHTML = 5
// console.log(typeof result);
// result.innerText = "6"
// result.style.color = "yellow"


// Step - 2
// Listen event on all buttons.
// click event?
// innerHTML?
decrease.addEventListener("click", () => {
          result.innerHTML--;
          color();
});

reset.addEventListener("click", () => {
          result.innerHTML = 0;
          color();
});

increase.addEventListener("click", () => {
          result.innerHTML++;
          color();
});


// Color implement

// Step - 3
// result.innerHTML = integer number?
function color() {
          // Less than 0
          if (result.innerHTML < 0) {
                    result.style.color = "#f03e3e";
          }
          // Greater than 0
          else if (result.innerHTML > 0) {
                    result.style.color = "#37b24d";
          }
          // For Zero Only
          else {
                    result.style.color = "#ffffff"
          }
}