//Creazione di una array contenenti i prodotti del negozio
const products = [
    { id: 1, name: "Arma PIU PIU 1", price: 99.99, image: "img/M4A1.webp" },
    { id: 2, name: "Arma PIU PIU 2", price: 199.99, image: "img/SR-25.webp" },
    { id: 3, name: "Arma PIU PIU 3", price: 59.99, image: "img/mp5.webp" },
    { id: 4, name: "Arma PIU PIU 4", price: 49.99, image: "img/saiga12k.webp" },
    { id: 5, name: "Arma PIU PIU 1", price: 99.99, image: "img/mpx.webp" },
    { id: 6, name: "Arma PIU PIU 2", price: 199.99, image: "img/Sa-58.webp" },
    { id: 7, name: "Arma PIU PIU 3", price: 59.99, image: "img/FNp90.webp" },
    { id: 8, name: "Arma PIU PIU 4", price: 49.99, image: "img/MPS12.webp" }
];

let cart = JSON.parse(localStorage.getItem('carrello')) || [];
//salva lo stato del carrello
function salvaCarrello() {
    localStorage.setItem('carrello', JSON.stringify(cart));
}
//metodo che calcola il numero di articoli nel carrello
function aggiornaConto() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}
//metodo che mostra i prodotti specificati
function mostraProdotti(productsToShow, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;
    
    container.innerHTML = productsToShow.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="aggiungi(${product.id})">Add to Cart</button>
        </div>
    `).join('');
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
function aggioraQuantità(productId, change) {
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

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" width="50">
            <div>
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} × 
                <button onclick="aggioraQuantità(${item.id}, -1)">-</button>
                ${item.quantity}
                <button onclick="aggioraQuantità(${item.id}, 1)">+</button>
                </p>
                <button onclick="rimuovi(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total').innerHTML = `Total: $${total.toFixed(2)}`;
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
                alert('Login successful!');
            } else {
                alert('Please enter both fields');
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
                alert(`Order placed! Total: $${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}`);
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
