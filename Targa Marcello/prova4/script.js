// Cambio colore link su hover
const link = document.getElementById('mioLink');
link.addEventListener('mouseover', () => {
  link.style.color = 'red';
});
link.addEventListener('mouseout', () => {
  link.style.color = 'darkgreen';
});

// Lancia il dado
const bottoneLancia = document.getElementById('lancia');
const risultato = document.getElementById('risultato');
bottoneLancia.addEventListener('click', () => {
  const numero = Math.floor(Math.random() * 6) + 1;
  risultato.textContent = `È uscito: ${numero}`;
});

// Modal apertura e chiusura
const apri = document.getElementById('apriModal');
const chiudi = document.getElementById('chiudiModal');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

apri.addEventListener('click', () => {
  modal.style.display = 'block';
  overlay.style.display = 'block';
});

chiudi.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});