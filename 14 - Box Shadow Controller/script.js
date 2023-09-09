const output = document.querySelector(".shadow_output");
const code = document.getElementById("code");
console.log(code);
const inputs = document.querySelectorAll(".input_container input");
const copyBtn = document.querySelector(".copy");

inputs.forEach((eachInput) =>
  eachInput.addEventListener("input", createShadow)
);

function createShadow() {
  let borderRadius = document.querySelector("#border_radius").value;
  let bgOutputColor = document.querySelector("#output_bg").value;
  let horizontalShadow = document.querySelector("#h_shadow").value;
  let verticalShadow = document.querySelector("#v_shadow").value;
  let blur = document.querySelector("#blur").value;
  let spread = document.querySelector("#spread").value;
  let opacity = document.querySelector("#opacity").value;
  let color = document.querySelector("#color").value;
  let insetShadow = document.querySelector("#check").checked;

  // `inset horizontalShadow verticalShadow blur spread color`

  let boxShadow = insetShadow
    ? `inset ${horizontalShadow}px ${verticalShadow}px ${blur}px ${spread}px ${hexToRgba(
        color,
        opacity
      )}`
    : `${horizontalShadow}px ${verticalShadow}px ${blur}px ${spread}px ${hexToRgba(
        color,
        opacity
      )}`;

  output.style.borderRadius = borderRadius + "px";
  output.style.backgroundColor = bgOutputColor;
  output.style.boxShadow = boxShadow;
  code.value = `box-shadow: ${boxShadow}`;
  // console.log(color);
  // console.log(opacity);
}

// ////////////////////////
// Test.
// const hexColor = "#FFA500"; // Hexadecimal color code for orange
// const opacity = 0.5; // Opacity (between 0 and 1)
// const rgbaColor = hexToRgba(hexColor, opacity);

function hexToRgba(hexColor, opacity) {
  let red = parseInt(hexColor.substring(1, 3), 16);
  let green = parseInt(hexColor.substring(3, 5), 16);
  let blue = parseInt(hexColor.slice(-2), 16);
  console.log(red, green, blue);
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}
// console.log(rgbaColor);

// Copy to clipboard
function copyCode(event) {
  event.preventDefault();

  navigator.clipboard.writeText(code.value).then(() => {
    code.select();
    copyBtn.textContent = "Copied";
    copyBtn.style.backgroundColor = "green";

    setTimeout(function () {
      // code.deselect();
      copyBtn.textContent = "Copy";
      copyBtn.style.backgroundColor = "#0197ee";
    }, 3000);
  });
}
copyBtn.addEventListener("click", copyCode);
window.onload = createShadow();
