let result = document.querySelector(".result");

let input = document.querySelector("textarea");

let maxLength = 280;
result.textContent = maxLength;

input.addEventListener("input", function () {
          let currentCount = maxLength - input.value.length;
          result.textContent = currentCount;

          if (currentCount <= 0) {
                    result.style.color = "#ff0000";
                    result.style.border = "2px dotted #ff0000";
          }

          else {
                    result.style.color = "#fff";
                    result.style.border = "2px dotted #fff";
          }
})