const btn = document.querySelector("a");

btn.addEventListener("click", function () {
  btn.style.backgroundColor = "green";
  btn.textContent = "Image downloaded";

  setTimeout(() => {
    btn.style.backgroundColor = "dodgerblue";
    btn.textContent = "Download the Image";
  }, 3000);
});
