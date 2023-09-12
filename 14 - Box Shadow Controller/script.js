const output = document.querySelector(".shadow_output");
// Select the output element.
const code = document.getElementById("code");
// Select the code element.
const inputs = document.querySelectorAll(".input_container input"); //NodeList
// Select all input elements. That is an array of node.
const copyBtn = document.querySelector(".copy");
// Select the copy code button.

inputs.forEach(
  (eachInput) => eachInput.addEventListener("input", createShadow)
  // Listening input event on each input element, and executing the callback function.
);
// Listening input events on every element using forEach() loop.

function createShadow() {
  let borderRadius = document.querySelector("#border_radius").value;
  // Get the value for border radius to the output element.
  let bgOutputColor = document.querySelector("#output_bg").value;
  // Get the background color value to the output element.

  let horizontalShadow = document.querySelector("#h_shadow").value;
  // Get the horizontal value for the box-shadow property.
  let verticalShadow = document.querySelector("#v_shadow").value;
  // Get the vertical value for the box-shadow property.
  let blur = document.querySelector("#blur").value;
  // Get the blur value for the box-shadow property.
  let spread = document.querySelector("#spread").value;
  // Get the spread value for the box-shadow property.
  let opacity = document.querySelector("#opacity").value;
  // Get the opacity value for the shadow.
  let color = document.querySelector("#color").value;
  // Get the color value for the shadow. By default it will return hex color value
  let insetShadow = document.querySelector("#check").checked;
  // Get if someone wants to create shadow as inset.
  // box-shadow: inset horizontalShadow verticalShadow blur spread color`

  // Check if user has been checked the check for the inset shadow?
  // If true, then add 'inset' keyword as the value of box-shadow property.
  // Else add normal value to the box-shadow property.
  let boxShadow = insetShadow
    ? `inset ${horizontalShadow}px ${verticalShadow}px ${blur}px ${spread}px ${hexToRgba(
        color,
        opacity
      )}`
    : `${horizontalShadow}px ${verticalShadow}px ${blur}px ${spread}px ${hexToRgba(
        color,
        opacity
      )}`;
  // To playing with the opacity value, we need to convert hex color value to rgba color value. That's why i have created a new function called "hexToRgba". And this function accepts to arguments.

  // 1. Color: Inside the new function we need to convert hex value to rgb value. Then we can easiy concatenate the opacity value.

  // 2. Opacity: Add with the rgb value, so it will now trun into rgba color code.

  output.style.borderRadius = borderRadius + "px";
  // Change the border radius of the output according to the user input.
  output.style.backgroundColor = bgOutputColor;
  // Change the background color of the output according to the user input.
  output.style.boxShadow = boxShadow;
  // Change the box-shadow of the output according to the user input. And this is the final ouput.
  code.value = `box-shadow: ${boxShadow}`;
  // Change the box-shadow value according to the user input, and displayed.
}

function hexToRgba(hexColor, opacity) {
  // Supposer hexColor = #ffbc00
  let red = parseInt(hexColor.substring(1, 3), 16);
  // Extrating first two letters (ff) and convert its interger value accordingly.
  let green = parseInt(hexColor.substring(3, 5), 16);
  // Extrating 3rd and 4th letters (bc) and convert its interger value accordingly.
  let blue = parseInt(hexColor.slice(-2), 16);
  // Extrating last two letters (00) and convert its interger value accordingly.
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  // Finally, combined red, green, and blue with opacity. And now it will return to the box-shadow property as a value.
}

// Copy to clipboard
function copyCode(event) {
  event.preventDefault();
  // Preventig the pagr reload.

  // Clipboard is API provided by js, for detail info for @ATechajay Twitter account.

  navigator.clipboard.writeText(code.value).then(() => {
    code.select();
    code.focus();
    // Selecting the text of the code.
    copyBtn.textContent = "Copied";
    // Changing the text of the button.
    copyBtn.style.backgroundColor = "green";
    // Changing the bg color of the button.

    // Setting timeout to come back to initial state of the button.
    setTimeout(function () {
      code.blur();
      // Deselect the text text after 3 seconds.
      copyBtn.textContent = "Copy";
      // Change back to 'Copy' text
      copyBtn.style.backgroundColor = "#0197ee";
      // Change back to the previous bg color.
    }, 3000);
  });
}
copyBtn.addEventListener("click", copyCode);
// Listening the event during clicking on the button.
window.onload = createShadow();
// Loding the intial box-shadow design defined by me, when you open this page.
