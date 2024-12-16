let rangeSlider = document.querySelector('.range-slider');
let output = document.querySelector('.output');

rangeSlider.addEventListener("input", function () {
          output.style.borderWidth = rangeSlider.value + "px";
});

// step 1 Find the value of the range slider
// step 2 Assign it to as the border with of the div element with concatenation.