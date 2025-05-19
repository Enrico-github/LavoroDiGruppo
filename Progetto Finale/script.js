//Creazione di una array contenenti i prodotti del negozio
const products = [
    { id: 1, name: "M1911", price: 1099.99, image: "img/M1911.webp", video: "videoArmi/M1911.mp4", description: "Pistola semi-automatica M1911, calibro .45 ACP. Iconica e affidabile." },
    { id: 2, name: "M4A1", price: 3059.99, image: "img/M4A1.webp", video: "videoArmi/M4A1.mp4", description: "Fucile d'assalto M4A1, calibro 5.56 NATO. Versatile e preciso." },
    { id: 3, name: "MP5", price: 3489.99, image: "img/mp5.webp", video: "videoArmi/MP5.mp4", description: "Submachine gun MP5, calibro 9mm. Compatta e maneggevole." },
    { id: 4, name: "AK-74", price: 1289.99, image: "img/AK-74.webp", video: "videoArmi/AK-74.mp4", description: "Fucile d'assalto AK-74, calibro 5.45x39mm. Affidabile e robusto." },
    { id: 5, name: "MPX", price: 2999.99, image: "img/mpx.webp" },
    { id: 6, name: "SA-58", price: 1799.99, image: "img/SA-58.webp" },
    { id: 7, name: "Saiga 12k", price: 1199.99, image: "img/saiga12k.webp" },
    { id: 8, name: "SR-25", price: 4499.99, image: "img/SR-25.webp" },
    { id: 9, name: "M700", price: 599.99, image: "img/M700.webp" },
    { id: 10, name: "VSS vintorez", price: 6999.99, image: "img/VSS.webp" },
    { id: 11, name: "MPS AA-12", price: 3249.99, image: "img/MPS12.webp" },
    { id: 12, name: "MP7", price: 11999.99, image: "img/MP7.webp" },
    { id: 13, name: "Model 870", price: 1499.99, image: "img/Model870.webp" },
    { id: 14, name: "AUG-A3", price: 2199.99, image: "img/AUG-A3.webp" },
    { id: 15, name: "Desert Eagle .50", price: 3099.99, image: "img/DE50.webp" },
    { id: 16, name: "FN P90", price: 1399.99, image: "img/FNp90.webp" },
];

let cart = JSON.parse(localStorage.getItem('carrello')) || [];//se nonesiste il carrello alllora cart sarà un array vuoto
//salva lo stato del carrello
function salvaCarrello() {
    localStorage.setItem('carrello', JSON.stringify(cart));
}
//metodo che calcola il numero di articoli nel carrello
function aggiornaConto() {
    const count = cart.reduce((total, item) => total + item.quantity, 0); // Somma la quantità di prodotti nel carrello
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}
//metodo che mostra i prodotti
function mostraProdotti(productsToShow, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;

    container.innerHTML = productsToShow.map(product => {
        // Aggiunge il video solo se esiste la proprietà video
        const videoHtml = product.video ? `
            <div class="product-video">
                <video width="100%" controls muted>
                    <source src="${product.video}" type="video/mp4">
                    Il tuo browser non supporta il tag video.
                </video>
            </div>
        ` : '';

        return `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>€${product.price.toFixed(2)}</p>
                <button onclick="mostraDettaglioProdotto(${product.id})">Visualizza dettagli</button>
            </div>
        `;
    }).join('');
}
// Funzione per filtrare i prodotti in base al testo di ricerca
function filtraProdotti() {
    // Prendi il testo dalla barra di ricerca e rimuovi gli spazi iniziali e finali
    const testoRicerca = document.getElementById('search').value.trim().toLowerCase();

    // Filtra i prodotti che contengono il testo di ricerca nel nome
    const prodottiFiltrati = products.filter(product =>
        product.name.toLowerCase().includes(testoRicerca)
    );

    // Mostra i prodotti filtrati
    mostraProdotti(prodottiFiltrati, 'all-products');

    // Aggiorna un contatore di risultati
    const infoRisultati = document.createElement('div');
    infoRisultati.id = 'search-results-info';
    infoRisultati.style.marginTop = '10px';

    if (testoRicerca) {
        infoRisultati.textContent = prodottiFiltrati.length > 0 ? `Trovati ${prodottiFiltrati.length} risultati per "${testoRicerca}"` : `Nessun risultato per "${testoRicerca}"`; // Mostra il numero di risultati trovati
    } else {
        infoRisultati.textContent = '';
    }

    // Rimuovi eventuali messaggi precedenti
    const vecchioInfo = document.getElementById('search-results-info');
    if (vecchioInfo) vecchioInfo.remove();

    // Aggiungi il nuovo messaggio dopo la barra di ricerca
    const filtriContainer = document.querySelector('.product-filters');
    if (filtriContainer) {
        filtriContainer.appendChild(infoRisultati);
    }
}
// Funzione per mostrare una finestra con i dettagli del prodotto
function mostraDettaglioProdotto(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Crea overlay per la schermata di dettaglio
    const overlay = document.createElement('div');
    overlay.className = 'product-detail-overlay';

    // Contenuto della schermata di dettaglio
    const detailHtml = `
        <div class="product-detail-container">
            <button class="detail-close-button" onclick="chiudiDettaglioProdotto()"> Close </button>
            <div class="product-detail-content">
                <div class="product-detail-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.video ? `
                        <div class="product-detail-video">
                            <video width="100%" controls>
                                <source src="${product.video}" type="video/mp4">
                                Il tuo browser non supporta il tag video.
                            </video>
                        </div>
                    ` : ''}
                </div>
                <div class="product-detail-info">
                    <h2>${product.name}</h2>
                    <p class="product-detail-price">€${product.price.toFixed(2)}</p>
                    <div class="product-detail-description">
                        <h3>Descrizione</h3>
                        <p>${product.description}</p>
                    </div>
                    <div class="product-detail-actions">
                        <button class="btn-add-to-cart" onclick="aggiungi(${product.id}); chiudiDettaglioProdotto();">Aggiungi al carrello</button>
                        <button class="btn-continue-shopping" onclick="chiudiDettaglioProdotto()">Continua lo shopping</button>
                    </div>
                </div>
            </div>
        </div>
    `;// Aggiunta vari contenuti dell'overlay (descrizione, video, prezzo, ecc)

    overlay.innerHTML = detailHtml;
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden'; // Blocca lo scroll della pagina

    // Aggiungi una transizione per l'animazione di entrata
    setTimeout(() => {
        overlay.classList.add('active');
    }, 10);
}

// Funzione per chiudere la finestra di dettaglio
function chiudiDettaglioProdotto() {
    const overlay = document.querySelector('.product-detail-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.remove();
            document.body.style.overflow = ''; // Ripristina lo scroll
        }, 300); // Tempo corrispondente alla durata della transizione in CSS
    }
}
//aggiunge un prodotto al carello, ma se esiste già ne aumenta il numero
function aggiungi(productId) {
    const product = products.find(p => p.id === productId);
    const prodottoEsistente = cart.find(item => item.id === productId);

    if (prodottoEsistente) {
        prodottoEsistente.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    salvaCarrello();
    aggiornaConto();
    if (window.location.pathname.includes('carrello.html')) mostraCarrello();
}
//metodo che rimuove un prodotto dal carrello
function rimuovi(productId) {
    cart = cart.filter(item => item.id !== productId);
    salvaCarrello();
    aggiornaConto();
    mostraCarrello();
}
//aggiunge manualmente la quantità di un prodotto dentro al carrello
function aggiornaQuantità(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity < 1) rimuovi(productId);

    salvaCarrello();
    mostraCarrello();
}
//mostra il contenuto del carrello, ma se è vuoto mostra un messaggio
function mostraCarrello() {
    const container = document.getElementById('cart-items');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '<p>Carrello vuoto</p>';
        document.getElementById('cart-total').style.display = 'none';
        return;
    }
    //aggiunge degli elementi html nel carrello quando dei prodotti vengono selezionati
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" width="50">
            <div>
                <h4>${item.name}</h4>
                <p>€${item.price.toFixed(2)} × 
                <button onclick="aggiornaQuantità(${item.id}, -1)">-</button>
                ${item.quantity}
                <button onclick="aggiornaQuantità(${item.id}, 1)">+</button>
                </p>
                <button onclick="rimuovi(${item.id})">Remove</button> <!--Bottone per rimuovere completamente un elemento-->
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total').innerHTML = `Totale: €${total.toFixed(2)}`;
    document.getElementById('cart-total').style.display = 'block';
}
//simulazione di un login
function login() {
    const form = document.getElementById('login-form');
    if (form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username && password) {
                alert('Login completato!');
            } else {
                alert('Riempi entrambi i campi!');
            }
        };
    }
}
//metodo di inizializzazione dei prodotti, carrello, login
function init() {
    if (window.location.pathname.includes('index.html')) {
        mostraProdotti(products.slice(0, 3), 'featured-products');
    } else if (window.location.pathname.includes('shop.html')) {
        mostraProdotti(products, 'all-products');

        // Aggiungi event listener alla barra di ricerca esistente
        const searchInput = document.getElementById('search');
        if (searchInput) {
            // Filtro mentre l'utente digita
            searchInput.addEventListener('input', filtraProdotti);

            // Filtro quando si preme Invio
            searchInput.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    filtraProdotti();
                }
            });
        }
    } else if (window.location.pathname.includes('carrello.html')) {
        mostraCarrello();
    }

    if (window.location.pathname.includes('login.html')) {
        login();
    }

    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.onclick = () => {
            if (cart.length > 0) {
                alert(`Pagamento completato! 👌 Totale: €${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}`);
                cart = [];
                salvaCarrello();
                aggiornaConto();
                mostraCarrello();
            }
        };
    }

    aggiornaConto();
}
//carica la funzione "init" subito dopo che il DOM finisce di caricarsi
document.addEventListener('DOMContentLoaded', init);
// Inizializzazione specifica per la pagina contatti
document.addEventListener('DOMContentLoaded', function () {
    // Eventuali funzioni specifiche per la pagina contatti
    // (al momento non ce ne sono, ma lo script è pronto per eventuali aggiunte)

    // Manteniamo il conteggio del carrello aggiornato
    const cart = JSON.parse(localStorage.getItem('carrello')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
});
function mostraMessaggio() {
    alert("Benvenuto, premi su INIZIA A COMPRARE per visionare il nostro catalogo oppure vai nella sezione SHOP in alto a sinistra");
}
