let hexColor = document.querySelector(".result")
let btn = document.querySelector(".btn")

btn.addEventListener("click", function () {
          let color = Math.random().toString(16).substring(2, 8);
          color = "#" + color;
          hexColor.innerText = color;
          document.body.style.backgroundColor = color;
});

