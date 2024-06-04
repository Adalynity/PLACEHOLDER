document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    if(document.getElementById('hamburger').classList.contains('fa-bars')){
        document.getElementById('hamburger').classList.add('fa-times');
        document.getElementById('hamburger').classList.remove('fa-bars');
    }
    else{
        document.getElementById('hamburger').classList.add('fa-bars');
        document.getElementById('hamburger').classList.remove('fa-times');
    }
    
});

document.getElementById('search').addEventListener('input', function() {
    filterProducts(this.value.toLowerCase());
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('search').value = '';
    filterProducts('');
});

function filterProducts(searchTerm) {
    const products = document.querySelectorAll('.product');
    
    products.forEach(function(product) {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalDetails = document.getElementById('modal-details');
const modalPrice = document.getElementById('modal-price');
const modalAddToCartBtn = document.getElementById('modal-add-to-cart-btn');
const span = document.getElementsByClassName('close')[0];

document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        const name = this.getAttribute('data-name');
        const details = this.getAttribute('data-details');
        const price = this.getAttribute('data-price');

        modalImg.src = imgSrc;
        modalName.textContent = name;
        modalDetails.textContent = details;
        modalPrice.textContent = '£' + price;
        
        modal.style.display = 'block';

        modalAddToCartBtn.onclick = function() {
            addToCart(name, price);
            modal.style.display = 'none';
        };
    });
});

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement;
        const name = product.getAttribute('data-name');
        const price = product.getAttribute('data-price');
        addToCart(name, price);
    });
});

const cart = [];
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const cartBtn = document.getElementById('cart-btn');
const cartContainer = document.getElementById('cart');

cartBtn.onclick = function() {
    if (cartContainer.style.display === 'block') {
        cartContainer.style.display = 'none';
    } else {
        cartContainer.style.display = 'block';
    }
}

function addToCart(name, price) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price: parseFloat(price), quantity: 1 });
    }
    updateCart();
}

function removeFromCart(name) {
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
    }
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const li = document.createElement('li');
        li.textContent = `${item.name} (${item.quantity}) - £${(item.price * item.quantity).toFixed(2)}`;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = function() {
            removeFromCart(item.name);
        };
        li.appendChild(removeBtn);
        cartItems.appendChild(li);
    });
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}
