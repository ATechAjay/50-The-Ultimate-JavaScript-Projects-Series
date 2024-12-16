let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let parent = document.querySelector(".parent");

btn.addEventListener("click", () => {
  parent.classList.toggle("active");
  input.focus();
});
