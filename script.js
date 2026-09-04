const loadingScreen = document.getElementById("loadingScreen");
const startBtn = document.getElementById("startBtn");
const site = document.getElementById("site");
const loaderFill = document.getElementById("loaderFill");
const percent = document.getElementById("percent");
const loadingText = document.getElementById("loadingText");
const tapNote = document.getElementById("tapNote");
const topProgress = document.getElementById("topProgress");
const openMessage = document.getElementById("openMessage");
const confetti = document.getElementById("confetti");
const againBtn = document.getElementById("againBtn");

let clicks = 0;
let started = false;

const phrases = [
  "Toca el corazón ❤️",
  "Ufff casi, pero te falta... ❤️",
  "Ya casiiiii, solo dale un poquito mas... ❤️",
  "Un último toque, a veces lo bueno se hace esperar... ❤️",
  "¿Estás lista, Marce? Porque yo tengo nervios... ❤️"
];

function handleHeartClick() {
  if (started) return;

  clicks = Math.min(clicks + 1, 5);
  const percentage = clicks * 20;

  loaderFill.style.width = `${percentage}%`;
  percent.textContent = `${percentage}%`;
  loadingText.textContent =
  clicks < 5 ? phrases[clicks] : "Abriendo...";

  startBtn.classList.remove("pulse");
  void startBtn.offsetWidth;
  startBtn.classList.add("pulse");

  tapNote.textContent =
    clicks < 5
      ? `${5 - clicks} ${5 - clicks === 1 ? "toque" : "toques"} restantes`
      : "Abriendo...";

  if (clicks === 5) {
    started = true;
    startBtn.disabled = true;

    setTimeout(() => {
      loadingScreen.classList.add("hide");
      site.setAttribute("aria-hidden", "false");
      site.classList.add("ready");
      reveal();
    }, 800);
  }
}

startBtn.addEventListener("click", handleHeartClick);

function showFallback(img) {
  img.style.display = "none";
}
window.showFallback = showFallback;

function reveal() {
  document
    .querySelectorAll(
      ".page-content > *, .letter-card, .champagne, .closing-line, .second-photo, .mini-polaroid, .memory-caption, .final-photo, .final-content > *"
    )
    .forEach((el, index) => {
      el.classList.add("reveal");

      const rect = el.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.9) {
        setTimeout(() => {
          el.classList.add("visible");
        }, Math.min(index * 90, 600));
      }
    });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: .14});

document
  .querySelectorAll(
    ".page-content > *, .letter-card, .champagne, .closing-line, .second-photo, .mini-polaroid, .memory-caption, .final-photo, .final-content > *"
  )
  .forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });

function updateScroll() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
  topProgress.style.width = `${Math.min(100, pct)}%`;
}
window.addEventListener("scroll", updateScroll, {passive:true});

function launchConfetti() {
  confetti.innerHTML = "";
  const pieces = 55;

  for (let i = 0; i < pieces; i++) {
    const piece = document.createElement("i");
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDelay = `${Math.random() * 1.5}s`;
    piece.style.animationDuration = `${2.4 + Math.random() * 2}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    piece.style.background = ["#b76b55","#d0aa7a","#8e7770","#c38c72","#e2cbb4"][i % 5];
    confetti.appendChild(piece);
  }
}

openMessage.addEventListener("click", () => {
  document.getElementById("messageSection").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  setTimeout(launchConfetti, 450);
});

againBtn.addEventListener("click", () => {
  clicks = 0;
  started = false;
  loaderFill.style.width = "0%";
  percent.textContent = "0%";
  loadingText.textContent = phrases[0];
  tapNote.textContent = "5 toques para continuar";
  site.classList.remove("ready");
  site.setAttribute("aria-hidden", "true");
  loadingScreen.classList.remove("hide");
  startBtn.disabled = false;
  startBtn.classList.remove("pulse");
  confetti.innerHTML = "";
  window.scrollTo({top:0,behavior:"smooth"});
});

updateScroll();
