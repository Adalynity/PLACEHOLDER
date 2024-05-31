
const products = [
    { id: 1, name: 'Product 1', price: 100, image: 'Assets/Images/placeholder.png', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: 200, image: 'product2.jpg', description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', price: 300, image: 'product3.jpg', description: 'Description for Product 3' },
    { id: 1, name: 'Product 1', price: 100, image: 'Assets/Images/placeholder.png', description: 'Description for Product 1' },
    { id: 1, name: 'Product 1', price: 100, image: 'Assets/Images/placeholder.png', description: 'Description for Product 1' },
    { id: 1, name: 'Product 1', price: 100, image: 'Assets/Images/placeholder.png', description: 'Description for Product 1' },
    { id: 1, name: 'Product 1', price: 100, image: 'Assets/Images/placeholder.png', description: 'Description for Product 1' },
    { id: 1, name: 'Product 1', price: 100, image: 'Assets/Images/placeholder.png', description: 'Description for Product 1' },
    { id: 1, name: 'Product 1', price: 100, image: 'Assets/Images/placeholder.png', description: 'Description for Product 1' },
    { id: 1, name: 'Product 1', price: 100, image: 'Assets/Images/placeholder.png', description: 'Description for Product 1' },
    { id: 1, name: 'Product 1', price: 100, image: 'Assets/Images/placeholder.png', description: 'Description for Product 1' },
    { id: 1, name: 'Product 1', price: 100, image: 'Assets/Images/placeholder.png', description: 'Description for Product 1' },

    // Add more products as needed
];

const productContainer = document.getElementById('product-list');
const cart = [];

function displayProducts(productList) {
    productContainer.innerHTML = '';
    productList.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="showProductDetails(${product.id})">View Details</button>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

displayProducts(products);

document.getElementById('search-button').addEventListener('click', () => {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
    displayProducts(filteredProducts);
});

document.getElementById('clear-button').addEventListener('click', () => {
    document.getElementById('search-input').value = '';
    displayProducts(products);
});

function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById('modal-image').src = product.image;
        document.getElementById('modal-name').textContent = product.name;
        document.getElementById('modal-description').textContent = product.description;
        document.getElementById('modal-price').textContent = `$${product.price}`;
        document.getElementById('modal-add-to-cart').onclick = () => addToCart(product.id);
        document.getElementById('product-modal').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }
}

document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('product-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

function removeFromCart(productId) {
    const index = cart.findIndex(p => p.id === productId);
    if (index > -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(product => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name} - $${product.price}</p>
            <button onclick="removeFromCart(${product.id})">Remove</button>
        `;
        cartItems.appendChild(cartItemDiv);
    });
}

document.getElementById('pay-button').addEventListener('click', () => {
    const email = prompt('Enter your email to receive the receipt:');
    if (email) {
        alert('Receipt sent to ' + email);
        cart.length = 0;
        updateCart();
    }
});
