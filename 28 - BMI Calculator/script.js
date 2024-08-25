console.log("Code...");

const weight = document.getElementById("weight");

const height = document.getElementById("height");

const btn = document.getElementById("btn");

const result = document.getElementById("result");

// 1. Get the weight and height from the user.
let weightValue, heightValue;

weight.addEventListener("input", function (e) {
  return (weightValue = +e.target.value);
});

// 2. Get the height from the user.

height.addEventListener("input", function (e) {
  return (heightValue = +e.target.value);
});
// 3. Calculate the BMI and display onto the UI.

function calculateBMI(e) {
  e.preventDefault();

  // Formula implement
  const BMI = weightValue / Number(heightValue) ** 2;

  BMI
    ? (result.textContent = `BMI: ${BMI.toFixed(2)}`)
    : alert("Pls fill the data first.");
}

btn.addEventListener("click", calculateBMI);
