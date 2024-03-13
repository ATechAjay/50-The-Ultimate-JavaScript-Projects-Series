const output = document.querySelector(".output");

const gradients = document.querySelectorAll(".bg-box");

const setGradient = (gradient) => {
  gradient.addEventListener("click", function () {
    const getBgColor = window.getComputedStyle(gradient);
    output.style.background = getBgColor.background;
  });
};

gradients.forEach(setGradient);

// window.onload = setGradient();
// console.log(gradients);
