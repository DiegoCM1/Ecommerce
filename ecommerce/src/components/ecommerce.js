// Function to fetch products from a local JSON file
async function fetchProducts() {
  try {
    const response = await fetch("./products.json"); // URL of the local JSON file
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    return [];
  }
}

// Function to display available products
async function showProducts() {
  const products = await fetchProducts(); // Fetch products from the local JSON file
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = ""; // Clear existing products

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");

    card.innerHTML = `
            <div class="card">
                <img src="./images/${product.name.toLowerCase()}.jpg" class="card-img-top" alt="${
      product.name
    }">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <button class="btn btn-primary add-to-cart" data-name="${
                      product.name
                    }" data-price="${product.price}">Add to cart</button>
                </div>
            </div>
        `;

    productsContainer.appendChild(card);
  });

  // Add event listeners to the "add to cart" buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const name = this.getAttribute("data-name");
      const price = parseFloat(this.getAttribute("data-price"));
      addToCart({ name, price });
    });
  });
}

// Function to calculate total purchase amount
function calculateTotal(selectedProducts) {
  let total = 0;
  selectedProducts.forEach((product) => {
    total += product.price;
  });
  return total;
}

// Array to store selected products
let selectedProducts = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add product to the cart
function addToCart(product) {
  selectedProducts.push(product);
  localStorage.setItem("cart", JSON.stringify(selectedProducts)); // Save cart to localStorage
  showMessage(`${product.name} added to cart`);
}

// Function to clear the cart
function clearCart() {
  selectedProducts = [];
  localStorage.removeItem("cart"); // Clear cart from localStorage
}

// Function to show messages
function showMessage(message) {
  const messageContainer = document.getElementById("message-container");
  messageContainer.textContent = message;
}

// Main function to simulate user interaction
function ecommerceApp() {
  showProducts();

  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", async function () {
    const userInput = document
      .getElementById("user-input")
      .value.trim()
      .toLowerCase(); // Convertir a minúsculas
    const products = await fetchProducts(); // Cargar productos del archivo JSON
    const product = products.find((p) => p.name.toLowerCase() === userInput); // Convertir a minúsculas antes de comparar
    if (product) {
      addToCart(product);
    } else {
      showMessage("Invalid product name. Please enter a valid product name.");
    }
    document.getElementById("user-input").value = ""; // Clear input field
  });

  const checkoutButton = document.createElement("button");
  checkoutButton.textContent = "Checkout";
  checkoutButton.classList.add("btn", "btn-primary", "mt-2");
  checkoutButton.addEventListener("click", function () {
    const totalAmount = calculateTotal(selectedProducts);
    const productNames = selectedProducts
      .map((product) => product.name)
      .join(", ");
    let { DateTime } = luxon; // DateTime de luxon
    const now = DateTime.now().toFormat("HH:mm:ss"); // Obtain only the format 'HH:mm:ss'

    if (totalAmount > 0) {
      showMessage(
        `You bought ${productNames} at ${now}. Your total purchase amount is: $${totalAmount.toFixed(
          2
        )}. Your cart has been cleared.`
      );
      clearCart(); // Clear the cart after checkout
    } else {
      showMessage("You haven't selected any item, please select an item first");
    }
  });
  document.querySelector(".container").appendChild(checkoutButton);

  const clearCartButton = document.getElementById("clear-cart-button");
  clearCartButton.addEventListener("click", function () {
    clearCart(); // Clear the cart manually
    showMessage("Cart cleared");
  });
}

// Execute the main function to start the application
ecommerceApp();
