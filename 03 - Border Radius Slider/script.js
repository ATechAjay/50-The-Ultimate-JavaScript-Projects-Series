let input = document.querySelector(".input");
let result = document.querySelector(".result");
let outputBox = document.querySelector(".output");

input.addEventListener("input", function () {
          result.innerText = input.value + "%"; // Text as a result

          outputBox.style.borderRadius = input.value + "%"; // Border radius output based on the input value.
});