const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);

let id = parseInt(params.get('id'));
let current_joke = "";
let answerTimeout = null;
let isWaiting = false;
let time = 5000;

const genBtn = document.getElementById("gen-btn");
const jokeDisplay = document.getElementById("joke-display");
const jokeAnswer = document.getElementById("joke-answer");

async function getRandomJoke() {
  const res = await fetch("https://cheerful-empanada-c3d6af.netlify.app/.netlify/functions/jokes", {
    method: "post"
  });
  return await res.json();
}

async function getJokeByID(id) {
  const res = await fetch("https://cheerful-empanada-c3d6af.netlify.app/.netlify/functions/get_joke", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id })
  });
  return await res.json();
}

function generateLightColor() {
  const r = Math.floor(180 + Math.random() * 75);
  const g = Math.floor(180 + Math.random() * 75);
  const b = Math.floor(180 + Math.random() * 75);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomLightGradient() {
  const directions = ['to right', 'to left', 'to top', 'to bottom', 'to top right', 'to bottom left'];
  const dir = directions[Math.floor(Math.random() * directions.length)];
  const colorCount = Math.random() > 0.5 ? 2 : 3;
  const colors = Array.from({ length: colorCount }, generateLightColor);
  return `linear-gradient(${dir}, ${colors.join(', ')})`;
}

function updateBg() {
  document.body.style.background = generateRandomLightGradient();
}

async function showJoke(currentID = null) {
  if (isWaiting) return;
  isWaiting = true;
  
  clearTimeout(answerTimeout);
  jokeAnswer.style.display = "none";
  updateBg();
  
  current_joke = !currentID ? await getRandomJoke() : await getJokeByID(currentID);
  jokeDisplay.textContent = current_joke.joke.question;
  

  let counter = time / 1000;
  genBtn.disabled = true;
  genBtn.textContent = `Wait ${counter}s...`;
  
  const countdown = setInterval(() => {
    counter--;
    genBtn.textContent = `Wait ${counter}s...`;
    if (counter <= 0) {
      clearInterval(countdown);
      genBtn.disabled = false;
      genBtn.textContent = "Generate joke";
    }
  }, 1000);
  

  answerTimeout = setTimeout(() => {
    jokeAnswer.textContent = current_joke.joke.answer;
    jokeAnswer.style.display = "block";
    isWaiting = false;
  }, time);
}

genBtn.addEventListener("click", () => showJoke());

if (Number.isNaN(id)) {
  showJoke();
} else {
  showJoke(id);
}