function somma() {
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);
    const risultato = a + b;
    document.getElementById("risultato").textContent = "Risultato: " + risultato;
}