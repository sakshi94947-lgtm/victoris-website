let cart = [];

function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();

    alert(name + " has been added to your cart.");
}


function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }

    cart.forEach((item, index) => {

        total += item.price * item.quantity;
        count += item.quantity;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <br>
                ₹${item.price.toLocaleString("en-IN")}
                × ${item.quantity}
            </div>

            <button onclick="removeItem(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(div);
    });

    cartCount.textContent = count;
    cartTotal.textContent = total.toLocaleString("en-IN");
}


function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


function openCart() {

    document.getElementById("cart-panel").classList.add("open");
}


function closeCart() {

    document.getElementById("cart-panel").classList.remove("open");
}


function openSearch() {

    alert("Search feature coming soon.");
}


function subscribe(event) {

    event.preventDefault();

    alert("Thank you for joining the VICTORIS world!");

    event.target.reset();
}


function submitForm(event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    event.target.reset();
}


function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }

    alert("Checkout is available for this project demo.");

}