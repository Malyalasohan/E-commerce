document.addEventListener("DOMContentLoaded", function () {
    const feedbackButton = document.getElementById("submit-feedback");
    const feedbackText = document.getElementById("feedback-text");
    const orderSelect = document.getElementById("order-select");

    feedbackButton.addEventListener("click", function () {
        if (orderSelect.value === "" || feedbackText.value.trim() === "") {
            alert("Please select an order and enter your feedback.");
            return;
        }

        alert(`Feedback for ${orderSelect.value} submitted successfully!`);
        feedbackText.value = "";
        orderSelect.selectedIndex = 0;
    });

    const compareButton = document.getElementById("compare-btn");
    const productName = document.getElementById("product-name");
    const priceResults = document.getElementById("price-results");

    compareButton.addEventListener("click", function () {
        if (productName.value.trim() === "") {
            alert("Enter a product name to compare.");
            return;
        }

        // Simulate fetching price comparison data
        priceResults.innerHTML = `Prices for <b>${productName.value}</b>: 
            <br>Amazon: ₹9999 <br> Flipkart: ₹10499 <br> TataCliq: ₹9799`;
    });

    const notifyButton = document.getElementById("notify-btn");
    notifyButton.addEventListener("click", function () {
        alert("You will receive WhatsApp notifications for price drops!");
    });
});
