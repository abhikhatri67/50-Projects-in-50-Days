const jokeBtn = document.getElementById("jokeBtn");
const jokeEl = document.getElementById("joke");

jokeBtn.addEventListener("click", renderJoke);

async function fetchJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const joke = await res.json();
  return joke;
}

async function renderJoke() {
  const joke = await fetchJoke();
  jokeEl.innerText = joke.joke;
}

renderJoke();
