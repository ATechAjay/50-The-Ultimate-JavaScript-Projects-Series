let modalContent = document.querySelector(".modal-content");
let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");
let blurBg = document.querySelector(".blur-bg");

// console.log(modalContent);
// console.log(openModal);
// console.log(closeModal);

openModal.addEventListener("click", function () {
          modalContent.classList.remove("hidden-modal");
          blurBg.classList.remove("hidden-blur");
});

// closeModal.addEventListener("click", function () {
//           modalContent.classList.add("hidden-modal");
// });

// blurBg.addEventListener("click", function () {
//           blurBg.classList.add("hidden-blur");
// });

let closeModalFunction = function () {
          modalContent.classList.add("hidden-modal")
          blurBg.classList.add("hidden-blur")
}

blurBg.addEventListener("click", closeModalFunction);
closeModal.addEventListener("click", closeModalFunction);


// 3rd way to close the modal using Esc key 

document.addEventListener("keydown", function (event) {
          // console.log("Pressed");
          // console.log(event);
          // console.log(event.key);

          if (event.key === "Escape" && !modalContent.classList.contains("hidden")) {
                    closeModalFunction();
          }

          // if (event.key === "Escape") {
          //           if (!modalContent.classList.contains("hidden")) {
          //                     closeModalFunction();
          //           }
          // }
});