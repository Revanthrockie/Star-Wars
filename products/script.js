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
