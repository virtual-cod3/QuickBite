"use strict";

/* ==========================================
   QUICKBITE - PRODUCT DATABASE
   5 PRODUCTS IN EACH CATEGORY
========================================== */

const products = [
  // BURGERS
  {
    id: 1, name: "Classic Cheeseburger", category: "burgers",
    price: 149,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700",
    description: "Juicy patty, melted cheese and fresh vegetables."
  },
  {
    id: 2, name: "Crispy Chicken Burger", category: "burgers",
    price: 179,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=700",
    description: "Crispy chicken with our creamy signature sauce."
  },
  {
    id: 3, name: "Double Smash Burger", category: "burgers",
    price: 229,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=700",
    description: "Two juicy patties layered with melted cheese."
  },
  {
    id: 4, name: "BBQ Veggie Burger", category: "burgers",
    price: 139,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=700",
    description: "A delicious veggie patty with smoky BBQ sauce."
  },
  {
    id: 5, name: "Spicy Mexican Burger", category: "burgers",
    price: 199,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=700",
    description: "A spicy burger with jalapeños and special sauce."
  },

  // PIZZA
  {
    id: 6, name: "Classic Margherita", category: "pizza",
    price: 199,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700",
    description: "Tomato, mozzarella and fresh basil."
  },
  {
    id: 7, name: "Farmhouse Pizza", category: "pizza",
    price: 249,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700",
    description: "Loaded with fresh vegetables and cheese."
  },
  {
    id: 8, name: "Pepperoni Pizza", category: "pizza",
    price: 279,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=700",
    description: "Classic pepperoni with rich mozzarella."
  },
  {
    id: 9, name: "BBQ Chicken Pizza", category: "pizza",
    price: 299,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=700",
    description: "BBQ chicken, onion and smoky sauce."
  },
  {
    id: 10, name: "Four Cheese Pizza", category: "pizza",
    price: 289,
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=700",
    description: "A rich combination of four delicious cheeses."
  },

  // DRINKS
  {
    id: 11, name: "Chocolate Milkshake", category: "drinks",
    price: 99,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=700",
    description: "A rich and creamy chocolate milkshake."
  },
  {
    id: 12, name: "Fresh Lemon Soda", category: "drinks",
    price: 59,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=700",
    description: "Refreshing lemon soda served chilled."
  },
  {
    id: 13, name: "Strawberry Shake", category: "drinks",
    price: 109,
    image: "https://images.unsplash.com/photo-1553787499-6f9133860278?w=700",
    description: "Sweet strawberry blended with creamy milk."
  },
  {
    id: 14, name: "Cold Coffee", category: "drinks",
    price: 89,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700",
    description: "Smooth iced coffee with a creamy finish."
  },
  {
    id: 15, name: "Fresh Orange Juice", category: "drinks",
    price: 79,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=700",
    description: "Freshly squeezed orange juice."
  },

  // DESSERTS
  {
    id: 16, name: "Chocolate Brownie", category: "desserts",
    price: 89,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700",
    description: "Soft chocolate brownie with a rich centre."
  },
  {
    id: 17, name: "Vanilla Ice Cream", category: "desserts",
    price: 79,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=700",
    description: "Smooth and creamy classic vanilla ice cream."
  },
  {
    id: 18, name: "Chocolate Lava Cake", category: "desserts",
    price: 119,
    image: "https://images.unsplash.com/photo-1617305855058-336d24456869?w=700",
    description: "Warm chocolate cake with a molten centre."
  },
  {
    id: 19, name: "Strawberry Cheesecake", category: "desserts",
    price: 139,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=700",
    description: "Creamy cheesecake topped with strawberries."
  },
  {
    id: 20, name: "Chocolate Donuts", category: "desserts",
    price: 99,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=700",
    description: "Soft donuts finished with chocolate glaze."
  }
];

const categories = {
  burgers: {
    title: "Burgers",
    description: "Big flavours, fresh ingredients and seriously good burgers."
  },
  pizza: {
    title: "Pizza",
    description: "Freshly baked favourites with delicious toppings."
  },
  drinks: {
    title: "Drinks",
    description: "Refreshing sips to go with your favourite meal."
  },
  desserts: {
    title: "Desserts",
    description: "A sweet ending to make your day better."
  }
};

const CART_KEY = "quickbite_cart";
const DELIVERY_FEE = 40;

/* ==========================================
   GENERAL HELPERS
========================================== */

function money(value) {
  return "₹" + Number(value).toFixed(0);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function getProduct(id) {
  return products.find(product => product.id === Number(id));
}

function getCart() {
  try {
    const cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");

    if (!Array.isArray(cart)) return [];

    return cart.filter(item =>
      getProduct(item.id) &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0
    );
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function cartCount(cart = getCart()) {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function cartSubtotal(cart = getCart()) {
  return cart.reduce((total, item) => {
    const product = getProduct(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function getDeliveryFee(orderType = "delivery") {
  return orderType === "delivery" && cartSubtotal() > 0
    ? DELIVERY_FEE
    : 0;
}

/* ==========================================
   PRODUCT DISPLAY
========================================== */

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-image-wrap">
        <img
          src="${product.image}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
        >
        <span class="product-tag">${escapeHTML(product.category)}</span>
      </div>

      <div class="product-info">
        <h3>${escapeHTML(product.name)}</h3>
        <p>${escapeHTML(product.description)}</p>

        <div class="product-bottom">
          <strong>${money(product.price)}</strong>
          <button class="add-button" data-add="${product.id}">
            + Add
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderHome() {
  const container = document.getElementById("homeProducts");
  if (!container) return;

  const featured = [1, 6, 11, 18]
    .map(id => getProduct(id))
    .filter(Boolean);

  container.innerHTML = featured.map(productCard).join("");
}

function renderCategory() {
  const container = document.getElementById("categoryProducts");
  if (!container) return;

  const type = new URLSearchParams(window.location.search)
    .get("type") || "burgers";

  const info = categories[type];

  if (!info) {
    document.getElementById("categoryTitle").textContent =
      "Category not found";

    document.getElementById("categoryDescription").textContent =
      "Please choose one of the categories below.";

    container.innerHTML = `
      <div class="empty-state">
        <h3>We couldn't find that category.</h3>
        <a href="index.html#categories" class="primary-button">
          Browse categories
        </a>
      </div>
    `;
    return;
  }

  document.title = `QuickBite | ${info.title}`;
  document.getElementById("categoryTitle").textContent = info.title;
  document.getElementById("categoryDescription").textContent =
    info.description;

  document.querySelectorAll(".category-tabs a").forEach(link => {
    link.classList.toggle(
      "active",
      link.dataset.category === type
    );
  });

  const selectedProducts = products.filter(
    product => product.category === type
  );

  container.innerHTML = selectedProducts.map(productCard).join("");
}

/* ==========================================
   CART OPERATIONS
========================================== */

function updateCartCount() {
  const badge = document.getElementById("cartCount");
  if (badge) badge.textContent = cartCount();
}

function addToCart(id) {
  const product = getProduct(id);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: product.id, quantity: 1 });
  }

  saveCart(cart);
  renderCart();
  openCart();
}

function changeQuantity(id, amount) {
  const cart = getCart();
  const item = cart.find(entry => entry.id === Number(id));

  if (!item) return;

  item.quantity += amount;

  const updatedCart = cart.filter(entry => entry.quantity > 0);

  saveCart(updatedCart);
  renderCart();
  renderCheckout();
}

function removeFromCart(id) {
  const updatedCart = getCart().filter(
    item => item.id !== Number(id)
  );

  saveCart(updatedCart);
  renderCart();
  renderCheckout();
}

function renderCart() {
  const itemsContainer = document.getElementById("cartItems");
  const summaryContainer = document.getElementById("cartSummary");
  const checkoutLink = document.getElementById("checkoutLink");

  if (!itemsContainer || !summaryContainer) return;

  const cart = getCart();

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add something delicious to get started.</p>
        <a href="index.html#categories" class="text-link">
          Explore menu →
        </a>
      </div>
    `;

    summaryContainer.innerHTML = "";
    checkoutLink?.classList.add("disabled-link");
    return;
  }

  itemsContainer.innerHTML = cart.map(item => {
    const product = getProduct(item.id);

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${escapeHTML(product.name)}">

        <div class="cart-item-info">
          <h3>${escapeHTML(product.name)}</h3>
          <strong>${money(product.price * item.quantity)}</strong>

          <div class="quantity-controls">
            <button data-quantity="${product.id}" data-change="-1"
              aria-label="Decrease quantity">−</button>
            <span>${item.quantity}</span>
            <button data-quantity="${product.id}" data-change="1"
              aria-label="Increase quantity">+</button>
          </div>
        </div>

        <button class="remove-button" data-remove="${product.id}"
          aria-label="Remove ${escapeHTML(product.name)}">×</button>
      </div>
    `;
  }).join("");

  const subtotal = cartSubtotal(cart);

  summaryContainer.innerHTML = `
    <div class="summary-line">
      <span>Subtotal</span><strong>${money(subtotal)}</strong>
    </div>
    <div class="summary-line">
      <span>Delivery</span><strong>${money(DELIVERY_FEE)}</strong>
    </div>
    <div class="summary-line total-line">
      <span>Total</span><strong>${money(subtotal + DELIVERY_FEE)}</strong>
    </div>
  `;

  checkoutLink?.classList.remove("disabled-link");
}

function openCart() {
  document.getElementById("cartDrawer")?.classList.add("open");
  document.getElementById("cartOverlay")?.classList.add("show");
  document.body.classList.add("no-scroll");
  renderCart();
}

function closeCart() {
  document.getElementById("cartDrawer")?.classList.remove("open");
  document.getElementById("cartOverlay")?.classList.remove("show");
  document.body.classList.remove("no-scroll");
}

/* ==========================================
   CHECKOUT
========================================== */

function renderCheckout() {
  const itemsContainer = document.getElementById("checkoutItems");
  const totalsContainer = document.getElementById("checkoutTotals");

  if (!itemsContainer || !totalsContainer) return;

  const cart = getCart();

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <p class="empty-message">
        Your cart is empty.
        <a href="index.html#categories">Browse the menu</a>.
      </p>
    `;
  } else {
    itemsContainer.innerHTML = cart.map(item => {
      const product = getProduct(item.id);

      return `
        <div class="checkout-item">
          <span>${escapeHTML(product.name)} × ${item.quantity}</span>
          <strong>${money(product.price * item.quantity)}</strong>
        </div>
      `;
    }).join("");
  }

  const orderType =
    document.querySelector('input[name="orderType"]:checked')?.value ||
    "delivery";

  const subtotal = cartSubtotal(cart);
  const delivery = getDeliveryFee(orderType);

  totalsContainer.innerHTML = `
    <div class="summary-line">
      <span>Subtotal</span><strong>${money(subtotal)}</strong>
    </div>
    <div class="summary-line">
      <span>Delivery</span><strong>${money(delivery)}</strong>
    </div>
    <div class="summary-line total-line">
      <span>Total</span><strong>${money(subtotal + delivery)}</strong>
    </div>
  `;
}

function setupCheckout() {
  const form = document.getElementById("checkoutForm");
  if (!form) return;

  const address = document.getElementById("customerAddress");
  const addressField = document.getElementById("addressField");
  const error = document.getElementById("formError");

  function updateOrderType() {
    const selected =
      document.querySelector('input[name="orderType"]:checked')?.value;

    const deliverySelected = selected === "delivery";

    address.required = deliverySelected;
    addressField.classList.toggle("hidden", !deliverySelected);

    renderCheckout();
  }

  document.querySelectorAll('input[name="orderType"]').forEach(input => {
    input.addEventListener("change", updateOrderType);
  });

  updateOrderType();

  form.addEventListener("submit", event => {
    event.preventDefault();
    error.textContent = "";

    const cart = getCart();

    if (cart.length === 0) {
      error.textContent = "Your cart is empty. Please add products first.";
      return;
    }

    if (!form.reportValidity()) return;

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();

    const orderType =
      document.querySelector('input[name="orderType"]:checked').value;

    const payment =
      document.querySelector('input[name="paymentMethod"]:checked').value;

    const deliveryAddress = address.value.trim();

    if (!name || !/^[0-9]{10}$/.test(phone)) {
      error.textContent = "Please enter a valid name and 10-digit phone number.";
      return;
    }

    if (orderType === "delivery" && !deliveryAddress) {
      error.textContent = "Please enter your delivery address.";
      return;
    }

    const subtotal = cartSubtotal(cart);
    const delivery = getDeliveryFee(orderType);

    const order = {
      number: "QB" + Date.now().toString().slice(-8),
      name,
      phone,
      orderType,
      payment,
      address: orderType === "delivery" ? deliveryAddress : "Takeaway",
      items: cart.map(item => {
        const product = getProduct(item.id);

        return {
          name: product.name,
          quantity: item.quantity,
          price: product.price
        };
      }),
      total: subtotal + delivery,
      date: new Date().toLocaleString()
    };

    showSuccess(order);
    localStorage.removeItem(CART_KEY);
    updateCartCount();
  });
}

function showSuccess(order) {
  document.querySelector(".checkout-heading").classList.add("hidden");
  document.getElementById("checkoutLayout").classList.add("hidden");

  const panel = document.getElementById("successPanel");
  panel.classList.remove("hidden");

  document.getElementById("successMessage").textContent =
    `Thank you, ${order.name}. Your ${order.orderType} order has been placed.`;

  document.getElementById("successOrder").innerHTML = `
    <div class="summary-line">
      <span>Order number</span><strong>${escapeHTML(order.number)}</strong>
    </div>
    <div class="summary-line">
      <span>Order type</span><strong>${escapeHTML(order.orderType)}</strong>
    </div>
    <div class="summary-line">
      <span>Payment</span>
      <strong>${order.payment === "cash" ? "Cash" : "Demo card payment"}</strong>
    </div>
    <div class="summary-line">
      <span>Items</span>
      <strong>${order.items.reduce((sum, item) => sum + item.quantity, 0)}</strong>
    </div>
    <div class="summary-line">
      <span>Total</span><strong>${money(order.total)}</strong>
    </div>
    <p class="success-address">${escapeHTML(order.address)}</p>
  `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ==========================================
   BUTTON EVENTS
========================================== */

function setupEvents() {
  document.getElementById("openCart")
    ?.addEventListener("click", openCart);

  document.getElementById("closeCart")
    ?.addEventListener("click", closeCart);

  document.getElementById("cartOverlay")
    ?.addEventListener("click", closeCart);

  document.getElementById("mobileMenuButton")
    ?.addEventListener("click", () => {
      document.getElementById("navLinks")?.classList.toggle("show");
    });

  document.addEventListener("click", event => {
    const addButton = event.target.closest("[data-add]");

    if (addButton) {
      addToCart(addButton.dataset.add);
      return;
    }

    const quantityButton = event.target.closest("[data-quantity]");

    if (quantityButton) {
      changeQuantity(
        quantityButton.dataset.quantity,
        Number(quantityButton.dataset.change)
      );
      return;
    }

    const removeButton = event.target.closest("[data-remove]");

    if (removeButton) {
      removeFromCart(removeButton.dataset.remove);
    }
  });

  document.getElementById("checkoutLink")
    ?.addEventListener("click", event => {
      if (getCart().length === 0) {
        event.preventDefault();
      }
    });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeCart();
  });
}

/* ==========================================
   INITIALIZATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  setupEvents();
  updateCartCount();
  renderCart();

  const page = document.body.dataset.page;

  if (page === "home") renderHome();
  if (page === "category") renderCategory();
  if (page === "checkout") setupCheckout();
});