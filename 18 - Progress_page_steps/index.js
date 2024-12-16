let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let circles = document.querySelectorAll(".circle");
let line = document.querySelector(".line");

let active = 1;

next.addEventListener("click", function () {
          active++;
          if (active > circles.length) {
                    active = circles.length;
          }
          refresh();
});


prev.addEventListener("click", function () {
          active--;
          if (active < 1) {
                    active = 1;
          }
          refresh();
});


function refresh() {
          // For circles
          circles.forEach((crcl, index) => {
                    if (index < active) {
                              crcl.classList.add("active");
                    } else {
                              crcl.classList.remove("active");
                    }
          });

          // For line
          let activeForLine = document.querySelectorAll(".active");

          line.style.width = ((activeForLine.length - 1) / (circles.length - 1)) * 100 + "%";
          // For button disabled on not
          if (active === 1) {
                    //first
                    prev.disabled = true;
          } else if (active === circles.length) {
                    //last
                    next.disabled = true;
          } else {
                    prev.disabled = false;
                    next.disabled = false;
          }

}






