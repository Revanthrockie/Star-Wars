const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
    for(let i=0;i<reveals.length;i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
