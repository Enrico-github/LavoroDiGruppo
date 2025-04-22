function aggiungi() {
    const input = document.getElementById("elemento");
    const testo = input.value.trim();
    if (testo !== "") {
      const li = document.createElement("li");
      li.textContent = testo;
      document.getElementById("lista").appendChild(li);
      input.value = "";
    }
}