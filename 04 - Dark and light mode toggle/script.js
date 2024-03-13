const btn = document.querySelector("button");
const icon = document.querySelector("button > i");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  icon.classList.toggle("fa-solid");
});
