const shoppingIcon = document.querySelector('.shopping-icon');
const shoppingCart = document.querySelector('.shopping-cart');
const cartItemsWrapper = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total p');
const cartBtn = document.querySelector('.cart-btn');
const ticketBoxes = document.querySelectorAll('.ticket-box');
const buyBtns = document.querySelectorAll('.buy-btn');

let cartItems = [];
let total = 0;

// Show/hide shopping cart
shoppingIcon.addEventListener('click', () => {
  shoppingCart.classList.toggle('hide');
});

// Add item to cart
buyBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const ticketBox = ticketBoxes[index];
    const imgSrc = ticketBox.querySelector('img').getAttribute('src');
    const title = ticketBox.querySelector('h2').textContent;
    const price = parseFloat(ticketBox.querySelector('.price').textContent.replace('$', ''));

    const item = {
      imgSrc,
      title,
      price,
      quantity: 1
    };

    const existingItemIndex = cartItems.findIndex(item => item.title === title);

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity++;
    } else {
      cartItems.push(item);
    }

    total += price;

    renderCartItems();
  });
});

// Render cart items
function renderCartItems() {
    cartItemsWrapper.innerHTML = '';

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const img = document.createElement('img');
        img.setAttribute('src', item.imgSrc);

        const title = document.createElement('p');
        title.textContent = item.title;

        const quantity = document.createElement('p');
        quantity.textContent = `x ${item.quantity}`;

        const itemPrice = item.price * item.quantity;

        const price = document.createElement('p');
        price.textContent = `$${itemPrice.toFixed(2)}`;

        cartItem.appendChild(img);
        cartItem.appendChild(title);
        cartItem.appendChild(quantity);
        cartItem.appendChild(price);

        cartItemsWrapper.appendChild(cartItem);
  });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Finalize purchase
cartBtn.addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cartItems = [];
    total = 0;
    renderCartItems();
    shoppingCart.classList.add('hide');
});


