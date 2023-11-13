const icons = document.querySelectorAll(".fa-solid");
const titles = document.querySelectorAll(".title_container");
const accordions = document.querySelectorAll(".accordion");

titles.forEach((title, index) => {
  title.addEventListener("click", function () {
    accordions[index].classList.toggle("active");
    icons[index].classList.toggle("fa-chevron-up");
  });
});
