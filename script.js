const intro = document.getElementById("intro");
const experience = document.getElementById("experience");
const startButton = document.getElementById("startButton");
const progress = document.getElementById("progress");
const openNote = document.getElementById("openNote");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const restartButton = document.getElementById("restartButton");

let started = false;

function startExperience() {
  if (started) return;
  started = true;

  intro.classList.add("hide");
  experience.setAttribute("aria-hidden", "false");
  experience.classList.add("active");

  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    revealVisible();
  }, 500);
}

startButton.addEventListener("click", startExperience);

// También permite tocar en cualquier parte de la pantalla inicial.
intro.addEventListener("click", (event) => {
  if (event.target !== startButton && !started) startExperience();
});

function revealVisible() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const visible = rect.top < window.innerHeight * 0.88 &&
                    rect.bottom > window.innerHeight * 0.08;

    if (visible) element.classList.add("visible");
  });
}

function updateProgress() {
  const scrollTop = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percent = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
  progress.style.width = `${Math.min(percent, 100)}%`;
}

window.addEventListener("scroll", () => {
  if (!started) return;
  revealVisible();
  updateProgress();
}, { passive: true });

openNote.addEventListener("click", () => {
  envelope.classList.toggle("open");
  letter.classList.toggle("open");

  const isOpen = letter.classList.contains("open");
  openNote.textContent = isOpen ? "Cerrar la nota" : "Abrir la nota";
  letter.setAttribute("aria-hidden", String(!isOpen));

  if (isOpen) {
    setTimeout(() => {
      letter.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 250);
  }
});

restartButton.addEventListener("click", () => {
  started = false;
  letter.classList.remove("open");
  envelope.classList.remove("open");
  openNote.textContent = "Abrir la nota";
  intro.classList.remove("hide");
  experience.classList.remove("active");
  experience.setAttribute("aria-hidden", "true");
  document.querySelectorAll(".reveal").forEach(el => el.classList.remove("visible"));

  window.scrollTo({ top: 0, behavior: "smooth" });

  setTimeout(() => {
    started = false;
  }, 900);
});

// Precarga opcional de las fotos para que la experiencia se sienta más fluida.
[
  "assets/foto1.jpg",
  "assets/foto2.jpg",
  "assets/foto3.jpg",
  "assets/foto4.jpg",
  "assets/foto-final.jpg"
].forEach(src => {
  const img = new Image();
  img.src = src;
});

// Inicialización.
updateProgress();
revealVisible();
