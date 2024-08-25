const output = document.querySelector(".output");
const btn = document.querySelector(".btn");
const gradients = document.querySelectorAll(".bg-box");

const setGradient = (gradient) => {
  gradient.addEventListener("click", function () {
    const getBgColor = window.getComputedStyle(gradient);
    output.style.background = getBgColor.background;
    console.log(getBgColor.background.split('("')[1].split('")')[0]);

    // str.split('("')[1].split('")')[0]
    console.log(window.getComputedStyle(output).background);
  });
};
gradients.forEach(setGradient);

btn.addEventListener("click", function () {
  console.log(window.getComputedStyle(output).background);
});

// 1. Get the output element
// function onLoad() {
//   console.log(output);
//   console.log(gradients[0]);
// output.style.background
// }

// 2. Set the 1st bg to the output element
// console.log(gradients);
// window.onload = onLoad();
