let result = document.querySelector("h1");
let btn = document.querySelector("button");


btn.addEventListener("click", () => {
          result.innerText = Math.trunc(Math.random() * 101);
});


// let a = Math.random() * 101
let a = Math.trunc(Math.random() * 101)
console.log(a)
// console.log(result)
// console.log(btn)