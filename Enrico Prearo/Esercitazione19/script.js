// Aggiungi un piccolo effetto all'ingresso della cornice
window.addEventListener("DOMContentLoaded", () => {
  const frame = document.querySelector(".frame");
  frame.style.opacity = 0;
  frame.style.transform = "translateY(-30px)";
  setTimeout(() => {
    frame.style.transition = "all 0.8s ease";
    frame.style.opacity = 1;
    frame.style.transform = "translateY(0)";
  }, 100);
});
