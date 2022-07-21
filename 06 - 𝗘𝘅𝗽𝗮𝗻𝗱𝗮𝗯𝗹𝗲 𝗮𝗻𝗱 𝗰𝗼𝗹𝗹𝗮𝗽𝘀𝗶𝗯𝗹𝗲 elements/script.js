"use strict"

let cards = document.querySelectorAll(".card");

// cards.forEach(function (card) {
//           card.addEventListener("click", function () {
//                     removeActiveClass();
//                     card.classList.add("active");
//           });
// });

for (let i = 0; i < cards.length; i++) {
          cards[i].addEventListener("click", function () {
                    removeActiveClass();
                    cards[i].classList.add("active");
          });
}

// Remove the active class from all cards

function removeActiveClass() {
          for (let i = 0; i < cards.length; i++) {
                    cards[i].classList.remove("active");
          }
}







// function removeActiveClass() {
//           cards.forEach(function (card) {
//                     card.classList.remove("active");
//           });
// }
