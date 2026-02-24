document.addEventListener("DOMContentLoaded", function () {
    let cartItems = []; // Store cart items
    const cartMessage = document.getElementById("cart-message");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-btn");

    function updateCart() {
        if (cartItems.length === 0) {
            cartMessage.innerHTML = "No items in cart";
            cartTotal.classList.add("hidden");
            checkoutButton.classList.add("hidden");
        } else {
            cartMessage.innerHTML = `Items in cart: ${cartItems.length}`;
            let totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
            cartTotal.innerHTML = `Total: ₹${totalAmount.toLocaleString("en-IN")}`;
            cartTotal.classList.remove("hidden");
            checkoutButton.classList.remove("hidden");
        }
    }

    // Example: Adding items dynamically
    function addItemToCart(itemName, price) {
        cartItems.push({ name: itemName, price: price });
        updateCart();
    }

    // Test (Add items dynamically)
    // Uncomment below to see it working
    // addItemToCart("Nike Shoes", 4999);
    // addItemToCart("Apple AirPods", 14999);

    updateCart(); // Initial state update
});
