let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  cartItems.innerHTML = ""; // svuota la lista
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - €${item.price}`;
    cartItems.appendChild(li);
  });

  totalElement.textContent = total.toFixed(2);
}
