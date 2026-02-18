let cartCount = 0;

const buttons = document.querySelectorAll(".cart-btn");
const cartDisplay = document.getElementById("cart-count");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;

        // update cart number on page (if span exists)
        if (cartDisplay) {
            cartDisplay.textContent = cartCount;
        }

        // alert message
        alert("Item added to cart 🛒");
    });
});
