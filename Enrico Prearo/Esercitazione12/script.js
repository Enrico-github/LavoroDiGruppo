function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
  
  // Chiudi il menù se si clicca fuori
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      const menu = document.getElementById("dropdownMenu");
      if (menu.style.display === "block") {
        menu.style.display = "none";
      }
    }
  }