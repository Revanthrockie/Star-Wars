const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
    for(let i = 0; i < reveals.length; i++){

        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealBottom = reveals[i].getBoundingClientRect().bottom;

        let revealPoint = 120;

        
        if(revealTop < windowHeight - revealPoint && revealBottom > 0){
            reveals[i].classList.add("active");
        } 
        
        else{
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// CART COUNTER
let cartCount = 0;
const cartDisplay = document.getElementById("cart-count");

// all buy buttons
const buttons = document.querySelectorAll(".buy-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartDisplay.textContent = cartCount;

        // small click feedback
        button.textContent = "Added ✓";
        button.style.background = "gold";
        button.style.color = "black";

        setTimeout(()=>{
            button.textContent = "Buy Now";
            button.style.background = "transparent";
            button.style.color = "gold";
        },1000);
    });
});

// CATEGORY CLICK SCROLL
document.querySelectorAll(".category-card").forEach(card=>{
    card.addEventListener("click", ()=>{

        const text = card.innerText.toLowerCase();

        if(text.includes("hoodie")){
            document.getElementById("hoodies-section")?.scrollIntoView();
        }
        if(text.includes("figure")){
            document.getElementById("figures-section")?.scrollIntoView();
        }
        if(text.includes("lightsaber")){
            document.getElementById("sabers-section")?.scrollIntoView();
        }
    });
});

// PRODUCT MODAL
const modal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const closeBtn = document.querySelector(".close-btn");

// click product card
document.querySelectorAll(".product-card").forEach(card=>{
    card.addEventListener("click", ()=>{

        const img = card.querySelector("img").src;
        const title = card.querySelector("h3").innerText;
        const price = card.querySelector(".price").innerText;

        modal.style.display = "block";
        modalImg.src = img;
        modalTitle.innerText = title;
        modalPrice.innerText = price;
    });
});

// close modal
closeBtn.onclick = ()=>{
    modal.style.display = "none";
};

// close outside click
window.onclick = (e)=>{
    if(e.target == modal){
        modal.style.display = "none";
    }
};
