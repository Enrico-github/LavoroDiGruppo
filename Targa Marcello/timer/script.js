let secondi = 0;
let interval = null;

function startTimer() {
  if (!interval) {
    interval = setInterval(() => {
      secondi++;
      document.getElementById('timer').textContent = `${secondi}s`;
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  secondi = 0;
  document.getElementById('timer').textContent = "0s";
}