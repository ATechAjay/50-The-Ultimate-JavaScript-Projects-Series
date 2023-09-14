const image = document.querySelector(".output_container img");
// console.log(image.style);
const code = document.querySelector(".code code");
// console.log(code.textContent);
// code.textContent = `
// img {
//   color: yellow;
//   color: yellow;
//   color: yellow;
//   color: yellow;
//   color: yellow;
// }
// `;
// console.log(code.textContent);
const allInputs = document.querySelectorAll(".input_container input");

const label = document.querySelector("label");
// console.log(allInputs);

const copyBtn = document.querySelector(".copy_btn");

const reset = document.querySelector(".reset");
allInputs.forEach((input) => input.addEventListener("input", filterImage));

function filterImage() {
  const grayScale = document.getElementById("grayscale").value;

  const blur = document.getElementById("blur").value;

  const brightness = document.getElementById("brightness").value;

  const contrast = document.getElementById("contrast").value;

  const hue = document.getElementById("hue").value;

  const invert = document.getElementById("invert").value;

  const opacity = document.getElementById("opacity").value;

  const saturate = document.getElementById("saturate").value;

  const sepia = document.getElementById("sepia").value;

  const isDropShadow = document.getElementById("is_drop_shadow").checked;

  const horizontalShadow = document.getElementById("horizontal_shadow").value;

  const verticalShadow = document.getElementById("vertical_shadow").value;

  const dropShadowBlur = document.getElementById("drop_shadow_blur").value;

  const hexColor = document.getElementById("drop_shadow_color").value;

  const dropShadowOpacity = document.getElementById(
    "drop_shadow_opacity"
  ).value;

  //   filter property syntax:
  //   filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();

  let filterValues = `
  grayscale(${grayScale + "%"})
  blur(${blur + "px"})
  brightness(${brightness + "%"})
  contrast(${contrast + "%"})
  hue-rotate(${hue + "deg"})
  invert(${invert + "%"})
  opacity(${opacity + "%"})
  saturate(${saturate + "%"})
  sepia(${sepia + "%"})`;

  let filterDropShadowValue = `
drop-shadow(${horizontalShadow + "px"} ${verticalShadow + "px"} ${
    dropShadowBlur + "px"
  } ${hexToRgba(hexColor, dropShadowOpacity)})`;

  //   image.style.filter = `...`

  isDropShadow
    ? (image.style.filter = `
      ${filterValues}
      ${filterDropShadowValue}`)
    : (image.style.filter = `
    ${filterValues}
    `);
}

function hexToRgba(hexColor, dropShadowOpacity) {
  let red = parseInt(hexColor.substring(1, 3), 16);
  let green = parseInt(hexColor.substring(3, 5), 16);
  let blue = parseInt(hexColor.slice(-2), 16);
  return `rgba(${red}, ${green}, ${blue}, ${dropShadowOpacity})`;
}

reset.addEventListener("click", function () {
  window.location.reload();
});

window.onload = filterImage();
