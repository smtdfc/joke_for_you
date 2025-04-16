const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);

let id = parseInt(params.get('id'));
id = Number.isNaN(id) ? Math.floor(Math.random() * 10) : id;

let current_joke = "";
let answerTimeout = null;
let isWaiting = false;
let time = 5000;
async function getRandomJoke() {
  const res = await fetch("https://cheerful-empanada-c3d6af.netlify.app/.netlify/functions/jokes", {
    method: "post"
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

async function showJoke() {
  if (isWaiting) return;
  isWaiting = true;
  
  clearTimeout(answerTimeout);
  document.getElementById("joke-answer").style.display = "none";
  updateBg();
  
  current_joke = await getRandomJoke();
  document.getElementById("joke-display").textContent = current_joke.question;
  
  answerTimeout = setTimeout(() => {
    document.getElementById("joke-answer").textContent = current_joke.answer;
    document.getElementById("joke-answer").style.display = "block";
    isWaiting = false;
  }, time);
}

document.getElementById("gen-btn").addEventListener("click", showJoke);

// Gọi lần đầu khi load trang
showJoke();