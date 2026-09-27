const restaurants = ["All kitchens", "Olive & Rye", "Little Fig", "Green Fork", "Sunday Table"];
const categories = ["Everything", "Bowls", "Pasta", "Sandwiches", "Pizza", "Sweet things"];
const dishes = [
  { id: "lemon-bowl", name: "Lemon tahini bowl", restaurant: "Green Fork", category: "Bowls", price: 14.5, time: "20-25 min", tag: "Neighborhood fave", description: "Crispy chickpeas, herby greens, warm grains.", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85" },
  { id: "rigatoni", name: "Sunday rigatoni", restaurant: "Sunday Table", category: "Pasta", price: 18, time: "25-30 min", tag: "House made", description: "Slow-simmered tomato, basil, a little parmesan.", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85" },
  { id: "fig-toast", name: "The Fig & Brie", restaurant: "Little Fig", category: "Sandwiches", price: 13, time: "15-20 min", tag: "Staff pick", description: "Baked brie, ripe fig, peppery arugula on sourdough.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85" },
  { id: "garden-pizza", name: "Garden party pizza", restaurant: "Olive & Rye", category: "Pizza", price: 19.5, time: "25-35 min", tag: "Stone baked", description: "Roasted tomato, whipped ricotta, garden herbs.", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85" },
  { id: "miso-bowl", name: "Crispy tofu bowl", restaurant: "Green Fork", category: "Bowls", price: 15, time: "20-25 min", tag: "Plant powered", description: "Sticky miso tofu, pickled vegetables, sesame rice.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85" },
  { id: "brown-butter", name: "Brown butter cookie", restaurant: "Little Fig", category: "Sweet things", price: 5.5, time: "15-20 min", tag: "Just baked", description: "Soft-centered, sea-salt finish. Best shared (or not).", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85" },
  { id: "mushroom-pasta", name: "Wild mushroom pappardelle", restaurant: "Sunday Table", category: "Pasta", price: 21, time: "25-30 min", tag: "Seasonal", description: "Wide ribbons, earthy mushrooms, parmesan cream.", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85" },
  { id: "margherita", name: "Classic margherita", restaurant: "Olive & Rye", category: "Pizza", price: 16, time: "25-35 min", tag: "A classic", description: "Bright tomato, fior di latte, basil, olive oil.", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85" }
];

const state = { restaurant: "All kitchens", category: "Everything", query: "", sort: "popular", cart: new Map(), customer: null };
const foodGrid = document.querySelector("#food-grid");
const cartContent = document.querySelector("#cart-content");
const cartPanel = document.querySelector("#cart-panel");
const scrim = document.querySelector("#scrim");
const loginDialog = document.querySelector("#login-dialog");
const orderDialog = document.querySelector("#order-dialog");
const formatPrice = (amount) => `$${amount.toFixed(2)}`;

function renderFilters() {
  document.querySelector("#restaurant-filters").innerHTML = restaurants.map((restaurant) =>
    `<button class="filter-chip" type="button" data-restaurant="${restaurant}" aria-pressed="${state.restaurant === restaurant}">${restaurant}</button>`
  ).join("");
  document.querySelector("#category-filters").innerHTML = categories.map((category) =>
    `<button class="category-chip" type="button" data-category="${category}" aria-pressed="${state.category === category}">${category}</button>`
  ).join("");
}

function getVisibleDishes() {
  const query = state.query.trim().toLowerCase();
  const visible = dishes.filter((dish) => {
    const matchesRestaurant = state.restaurant === "All kitchens" || dish.restaurant === state.restaurant;
    const matchesCategory = state.category === "Everything" || dish.category === state.category;
    const matchesQuery = !query || `${dish.name} ${dish.restaurant} ${dish.category} ${dish.description}`.toLowerCase().includes(query);
    return matchesRestaurant && matchesCategory && matchesQuery;
  });
  if (state.sort === "price-low") visible.sort((a, b) => a.price - b.price);
  if (state.sort === "price-high") visible.sort((a, b) => b.price - a.price);
  return visible;
}

function renderDishes() {
  const visible = getVisibleDishes();
  document.querySelector("#result-count").textContent = `(${visible.length})`;
  document.querySelector("#empty-state").hidden = visible.length > 0;
  foodGrid.hidden = visible.length === 0;
  foodGrid.innerHTML = visible.map((dish, index) => `
    <article class="food-card" style="animation-delay:${Math.min(index * 45, 225)}ms">
      <div class="food-image-wrap">
        <img class="food-image" src="${dish.image}" alt="${dish.name}" loading="lazy">
        <span class="food-tag">${dish.tag}</span>
      </div>
      <div class="food-card-body">
        <div class="food-meta"><span>${dish.restaurant}</span><span>${dish.time}</span></div>
        <h3>${dish.name}</h3>
        <p class="food-description">${dish.description}</p>
        <div class="food-card-bottom"><span class="food-price">${formatPrice(dish.price)}</span>
          <button class="add-button" type="button" data-add="${dish.id}" aria-label="Add ${dish.name} to bag"><span aria-hidden="true">+</span> Add</button>
        </div>
      </div>
    </article>`).join("");
}

function getCartEntries() {
  return [...state.cart.entries()].map(([id, quantity]) => ({ dish: dishes.find((dish) => dish.id === id), quantity }));
}

function renderCart() {
  const entries = getCartEntries();
  const itemCount = entries.reduce((sum, entry) => sum + entry.quantity, 0);
  const subtotal = entries.reduce((sum, entry) => sum + entry.dish.price * entry.quantity, 0);
  document.querySelector("#cart-count").textContent = itemCount;
  document.querySelector("#cart-title-count").textContent = `(${itemCount})`;
  document.querySelector("#cart-summary").hidden = itemCount === 0;
  document.querySelector("#subtotal").textContent = formatPrice(subtotal);
  document.querySelector("#total").textContent = formatPrice(subtotal + (itemCount ? 2.5 : 0));

  if (!itemCount) {
    cartContent.innerHTML = `<div class="cart-empty"><span class="cart-empty-mark" aria-hidden="true">g.</span><strong>Room for something good.</strong><p>Your bag is taking a little breather. Add a dish you love.</p></div>`;
    return;
  }
  cartContent.innerHTML = entries.map(({ dish, quantity }) => `
    <div class="cart-item">
      <span class="cart-item-name">${dish.name}</span><span class="cart-item-price">${formatPrice(dish.price * quantity)}</span>
      <span class="cart-item-kitchen">${dish.restaurant}</span>
      <div class="quantity-control" aria-label="Quantity for ${dish.name}">
        <button type="button" data-quantity="${dish.id}" data-change="-1" aria-label="Remove one ${dish.name}">−</button>
        <output>${quantity}</output>
        <button type="button" data-quantity="${dish.id}" data-change="1" aria-label="Add one ${dish.name}">+</button>
      </div>
      <button class="remove-button" type="button" data-remove="${dish.id}">Remove</button>
    </div>`).join("");
}

function refresh() {
  renderFilters();
  renderDishes();
  renderCart();
}

function setCartOpen(open) {
  document.body.classList.toggle("cart-open", open);
  cartPanel.setAttribute("aria-hidden", String(window.matchMedia("(max-width: 720px)").matches && !open));
}

function showLogin() {
  document.querySelector("#login-error").textContent = "";
  loginDialog.showModal();
}

document.querySelector("#restaurant-filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-restaurant]");
  if (!button) return;
  state.restaurant = button.dataset.restaurant;
  refresh();
});

document.querySelector("#category-filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  refresh();
});

foodGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  const id = button.dataset.add;
  state.cart.set(id, (state.cart.get(id) || 0) + 1);
  renderCart();
  button.innerHTML = "<span aria-hidden='true'>✓</span> Added";
  window.setTimeout(() => { if (button.isConnected) button.innerHTML = "<span aria-hidden='true'>+</span> Add"; }, 850);
});

cartContent.addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) state.cart.delete(removeButton.dataset.remove);
  if (quantityButton) {
    const id = quantityButton.dataset.quantity;
    const quantity = (state.cart.get(id) || 0) + Number(quantityButton.dataset.change);
    if (quantity <= 0) state.cart.delete(id);
    else state.cart.set(id, quantity);
  }
  renderCart();
});

document.querySelector("#food-search").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderDishes();
});
document.querySelector("#sort-select").addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderDishes();
});
document.querySelector("#clear-filters").addEventListener("click", () => {
  state.restaurant = "All kitchens";
  state.category = "Everything";
  state.query = "";
  document.querySelector("#food-search").value = "";
  refresh();
});

document.querySelector("#login-open").addEventListener("click", showLogin);
document.querySelector("#login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const error = document.querySelector("#login-error");
  if (name.length < 2) {
    error.textContent = "Please enter a name with at least two characters.";
    form.elements.name.focus();
    return;
  }
  if (!form.elements.email.validity.valid || !email) {
    error.textContent = "Please enter a valid email address.";
    form.elements.email.focus();
    return;
  }
  state.customer = { name, email };
  document.querySelector("#login-open").textContent = name.split(/\s+/)[0];
  loginDialog.close();
});

document.querySelector("#checkout-button").addEventListener("click", () => {
  if (state.cart.size === 0) return;
  if (!state.customer) {
    setCartOpen(false);
    showLogin();
    return;
  }
  const orderId = `GD-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  document.querySelector("#order-id").textContent = orderId;
  state.cart.clear();
  renderCart();
  setCartOpen(false);
  orderDialog.showModal();
});

document.querySelector("#cart-toggle").addEventListener("click", () => setCartOpen(true));
document.querySelector("#cart-close").addEventListener("click", () => setCartOpen(false));
scrim.addEventListener("click", () => setCartOpen(false));
document.querySelectorAll("[data-close-dialog]").forEach((button) => button.addEventListener("click", () => button.closest("dialog").close()));
document.querySelectorAll("dialog").forEach((dialog) => dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
}));
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    document.querySelector("#food-search").focus();
  }
  if (event.key === "Escape") setCartOpen(false);
});

refresh();
setCartOpen(false);