document.addEventListener("DOMContentLoaded", function () {
    let cartCount = 0;

    // Cart Counter Update
    const cartCounter = document.getElementById("cart-counter");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            cartCounter.textContent = cartCount;
            alert("Product added to cart!");
        });
    });

    // Product Search Functionality
    const searchInput = document.getElementById("search-input");
    const products = document.querySelectorAll(".product-card");

    searchInput.addEventListener("input", () => {
        let query = searchInput.value.toLowerCase();

        products.forEach(product => {
            const productName = product.querySelector(".product-name").textContent.toLowerCase();
            if (productName.includes(query)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });

    // Dynamic Pricing (Placeholder - To be connected with backend)
    function updateDynamicPrices() {
        fetch("/get_dynamic_prices")  // Example API route in Flask
            .then(response => response.json())
            .then(data => {
                const productPrices = document.querySelectorAll(".product-price");
                productPrices.forEach((priceElement, index) => {
                    priceElement.textContent = `$${data[index]}`; // Update prices dynamically
                });
            })
            .catch(error => console.error("Error fetching dynamic prices:", error));
    }

    // Call price update function (Optional: Set interval for periodic updates)
    // updateDynamicPrices();
});
