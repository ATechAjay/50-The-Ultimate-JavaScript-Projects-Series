const joke = document.querySelector(".joke");
const btn = document.querySelector("button");

function getJoke() {
  joke.textContent = "Loading...";
  btn.textContent = "Fetching...";
  btn.style.backgroundColor = "red";
  btn.style.color = "white";
  const res = fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  res
    .then((jsn) => jsn.json())
    .then((data) => {
      joke.textContent = data.joke;
      btn.textContent = "New Joke 😜";
      btn.style.backgroundColor = "aqua";
      btn.style.color = "black";
    });
}
btn.addEventListener("click", getJoke);

window.onload = getJoke;
