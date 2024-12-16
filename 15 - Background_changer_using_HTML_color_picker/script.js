const output = document.querySelector(".output");

const inputColor = document.getElementById("color");

const copyBtn = document.querySelector(".copy-btn");

const codeBlock = document.querySelector(".code-snippet");

inputColor.addEventListener("input", changeColor);

function changeColor() {
  output.style.backgroundColor = inputColor.value;
  codeBlock.textContent = `.output{background-color:${inputColor.value}}`;
  Prism.highlightAll();
}

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(inputColor.value).then(() => {
    copyBtn.style.backgroundColor = "green";
    copyBtn.textContent = "Copied The Code";

    setTimeout(() => {
      copyBtn.style.backgroundColor = "#1e90ff";
      copyBtn.textContent = "Copy The Hex Color";
    }, 3000);
  });
});

window.onload = changeColor();
