let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(name + " added to cart");
  displayCart();
}

function displayCart() {
  let list = document.getElementById("cartItems");
  list.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item.name + " - ₹" + item.price;
    list.appendChild(li);
  });
}

function checkoutWhatsApp() {
  let message = "Hello ICM MADHUBANI 👋%0A%0AOrder Details:%0A";
  let total = 0;

  cart.forEach(item => {
    message += "• " + item.name + " - ₹" + item.price + "%0A";
    total += item.price;
  });

  message += "%0ATotal: ₹" + total;

  window.open(
    "https://wa.me/918579911016?text=" + message,
    "_blank"
  );
}