const image = document.querySelector(".output_container img");
// console.log(image.style);
const code = document.querySelector(".code code");
const test = document.querySelector(".code");
// console.log(code);
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

  isDropShadow
    ? (image.style.filter = `
      ${filterValues}
      ${filterDropShadowValue}`)
    : (image.style.filter = `
    ${filterValues}
    `);

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

  code.textContent = isDropShadow
    ? `img {
    ${codeSnippet + filterDropShadowValue}
}`
    : `img {
  ${codeSnippet}
}`;

  Prism.highlightAll();
}

function hexToRgba(hexColor, dropShadowOpacity) {
  let red = parseInt(hexColor.substring(1, 3), 16);
  let green = parseInt(hexColor.substring(3, 5), 16);
  let blue = parseInt(hexColor.slice(-2), 16);
  return `rgba(${red}, ${green}, ${blue}, ${dropShadowOpacity})`;
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
