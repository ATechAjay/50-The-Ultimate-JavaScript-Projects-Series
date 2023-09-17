"use strict";

// Step 1: Select all necessary HTML elements in JavaScript.
const image = document.querySelector(".output_container img");

const code = document.querySelector(".code code");

const test = document.querySelector(".code");

const allInputs = document.querySelectorAll(".input_container input");

const label = document.querySelector("label");

const copyBtn = document.querySelector(".copy_btn");

const reset = document.querySelector(".reset");

// Step 2: Listen events on all the input elements. And pass a callback function (filterImage)
allInputs.forEach((input) => input.addEventListener("input", filterImage));

// Step 3: Define a Callback function
function filterImage() {
  // Step 4: Get values from the range input elements
  const grayScale = document.getElementById("grayscale").value;

  const blur = document.getElementById("blur").value;

  const brightness = document.getElementById("brightness").value;

  const contrast = document.getElementById("contrast").value;

  const hue = document.getElementById("hue").value;

  const invert = document.getElementById("invert").value;

  const opacity = document.getElementById("opacity").value;

  const saturate = document.getElementById("saturate").value;

  const sepia = document.getElementById("sepia").value;

  // Get the checkbox values either true or false
  const isDropShadow = document.getElementById("is_drop_shadow").checked;
  // console.log(isDropShadow); ==> true/false
  const horizontalShadow = document.getElementById("horizontal_shadow").value;

  const verticalShadow = document.getElementById("vertical_shadow").value;

  const dropShadowBlur = document.getElementById("drop_shadow_blur").value;

  // Returns a hex color code
  const hexColor = document.getElementById("drop_shadow_color").value;

  const dropShadowOpacity = document.getElementById(
    "drop_shadow_opacity"
  ).value;

  //   filter property syntax:
  //   filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();

  //Step 5: Assign all filter values with their units in a single variable except drop-shadow
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

  // Step 6: Create a new variable for the drop-shadow()
  // Step 7: Create a function for converting hex color code to rgba() color code, because we need opacity value.
  let filterDropShadowValue = `
drop-shadow(${horizontalShadow + "px"} ${verticalShadow + "px"} ${
    dropShadowBlur + "px"
  } ${hexToRgba(hexColor, dropShadowOpacity)})`;

  // Step 8: Now check if the user clicked on the drop-shadow checkbox; that will be true.

  // If checked, that means true, then filter the image with drop-shadow() along with all filter functions, like blur(), grayscale(), etc.

  // If not checked, then just filter the image with filter values except drop-shadow().

  isDropShadow
    ? (image.style.filter = `
      ${filterValues}
      ${filterDropShadowValue}`)
    : (image.style.filter = `
    ${filterValues}
    `);

  // Step 9: Create a function that will help us display the code on the screen as code snippets.
  // And pass all the values of the range input elements.

  const codeSnippet = usedFilterProperty(
    grayScale,
    blur,
    brightness,
    contrast,
    hue,
    invert,
    opacity,
    saturate,
    sepia
  );

  // Step 10: Now change the text content of the code block according to the user's input.
  // If the drop shadow is true, then embed the code along with the other filter function.
  // Otherwise, just display only filter functions except drop-shadow.

  code.textContent = isDropShadow
    ? `img {
    ${codeSnippet + filterDropShadowValue}
}`
    : `img {
  ${codeSnippet}
}`;

  // Step 11: Re-highlight all code blocks on the page.
  Prism.highlightAll();
}

// Function definition for converting the hex color code to rgba() color code.
function hexToRgba(hexColor, dropShadowOpacity) {
  let red = parseInt(hexColor.substring(1, 3), 16);
  // Getting the first two hex character and converting it into a number type.
  let green = parseInt(hexColor.substring(3, 5), 16);
  // Getting the 3rd and 4th hex character and converting it into a number type.
  let blue = parseInt(hexColor.slice(-2), 16);
  // Getting the last two hex character and converting it into a number type.
  return `rgba(${red}, ${green}, ${blue}, ${dropShadowOpacity})`;
  // Finally, return rgba() color code after adding the opacity level.
}

function usedFilterProperty(
  grayScale,
  blur,
  brightness,
  contrast,
  hue,
  invert,
  opacity,
  saturate,
  sepia
) {
  const filterProps = {
    grayscale: { value: +grayScale, unit: "%" },
    blur: { value: +blur, unit: "px" },
    brightness: { value: +brightness, unit: "%" },
    contrast: { value: +contrast, unit: "%" },
    hueRotate: { value: +hue, unit: "deg" },
    invert: { value: +invert, unit: "%" },
    opacity: { value: +opacity, unit: "%" },
    saturate: { value: +saturate, unit: "%" },
    sepia: { value: +sepia, unit: "%" },
  };

  let filterValueInUsed = "";

  for (const filterProperty in filterProps) {
    const { value, unit } = filterProps[filterProperty];
    if (value) {
      filterValueInUsed += `${filterProperty}(${value}${unit}) `;
    }
  }
  return filterValueInUsed;
}

reset.addEventListener("click", function () {
  alert("Reset will refresh the page. ⚠️");
  window.location.reload();
});

function copyCode(event) {
  event.preventDefault();
  navigator.clipboard.writeText(code.textContent).then(() => {
    copyBtn.textContent = "Code copied";
    copyBtn.style.backgroundColor = "green";
    copyBtn.style.border = "2px solid green";
    copyBtn.style.color = "#fff";
    setTimeout(function () {
      copyBtn.textContent = "Copy the code";
      copyBtn.style.backgroundColor = "#fff";
      copyBtn.style.border = "2px solid gray";
      copyBtn.style.color = "gray";
    }, 3000);
  });
}

copyBtn.addEventListener("click", copyCode);
window.onload = filterImage();
