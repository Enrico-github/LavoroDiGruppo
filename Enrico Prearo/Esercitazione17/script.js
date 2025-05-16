let total = 0;

function addToCart(weapon, price) {
  const cartList = document.getElementById("cart-list");
  const listItem = document.createElement("li");
  listItem.textContent = `${weapon} - ${price} oro`;
  cartList.appendChild(listItem);

  total += price;
  document.getElementById("total").textContent = total;
}
