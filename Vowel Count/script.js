let input = document.querySelector("input");
let btn = document.querySelector("button");
let output = document.querySelector(".result");
console.log(input, btn);

btn.addEventListener("click", vowelCounter);

function vowelCounter() {
          let count = 0;
          let inputText = input.value.toLowerCase();


          for (let a = 0; a < inputText.length; a++) {
                    let letter = inputText[a];
                    if (letter.match(/[a,e,i,o,u]/)) {
                              count++;
                    }
          }

          output.textContent = `There are ${count} vowels in the input field!`;
}