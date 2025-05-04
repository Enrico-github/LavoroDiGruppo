function controllaRisposta(btn) {
    const risposta = btn.textContent;
    const corretto = "Parigi";
    const messaggio = risposta === corretto ? "✅ Corretto!" : "❌ Sbagliato!";
    document.getElementById("risultato").textContent = messaggio;
  }