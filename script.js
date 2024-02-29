let cart = [];
let total = 0;

// Function to update the cart icon and count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Function to update the cart total
function updateCartTotal() {
    const cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Function to add an item to the cart
function addToCart(item) {
    cart.push(item);
    total += item.price;
    updateCartCount();
    updateCartTotal();
    renderCart();
}

// Function to render the cart items
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
}

// Sample products
const products = [
    { id: 1, name: 'Product 1', price: 10.00 },
    { id: 2, name: 'Product 2', price: 15.00 }
];

// Render products
const productsSection = document.getElementById('products');
products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <img src="product${product.id}.jpg" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${JSON.stringify(product)})">Add to Cart</button>
    `;
    productsSection.appendChild(productElement);
});

// Checkout button
document.getElementById('checkout').addEventListener('click', () => {
    alert('Checkout is not implemented in this example.');
});
