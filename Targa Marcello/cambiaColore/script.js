function cambiaColore() {
    const colori = ["red", "green", "blue", "orange", "purple", "pink"];
    const box = document.getElementById("box");
    const coloreRandom = colori[Math.floor(Math.random() * colori.length)];
    box.style.backgroundColor = coloreRandom;
  }