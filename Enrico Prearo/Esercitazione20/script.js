document.getElementById("openButton").addEventListener("click", () => {
  const newWindow = window.open("", "_blank", "width=500,height=600");

  if (newWindow) {
    newWindow.document.write(`
      <!DOCTYPE html>
      <html lang="it">
      <head>
        <meta charset="UTF-8">
        <title>Immagine e Descrizione</title>
        <style>
          body {
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #fff;
          }
          img {
            width: 100%;
            border-radius: 10px;
            margin-bottom: 15px;
          }
          p {
            font-size: 1rem;
            color: #333;
          }
        </style>
      </head>
      <body>
        <img src="arma.avif" alt="Immagine" />
        <p>Questa è una descrizione dell'immagine visualizzata nella nuova finestra.</p>
      </body>
      </html>
    `);
    newWindow.document.close();
  } else {
    alert("Popup bloccato! Abilita i popup per questo sito.");
  }
});
