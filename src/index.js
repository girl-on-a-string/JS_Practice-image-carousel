import "./styles.scss";

const currentSlide = (n) => { // current selected slide
    let strip = document.getElementById("strip");
    let slides = document.querySelectorAll(".slide");
    
    let i;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[n - 1].style.display = "initial";

    dots[n - 1].classList.add("active");

    for (i = 0; i < dots.length; i++) {
        if (dots[i] !== dots[n - 1]) {
            dots[i].classList.remove("active");
        }
    }

    // arrow event listeners

    document.getElementById("next").addEventListener("click", () => {
        
        console.log(slides[n - 1]); 
    })

    document.getElementById("prev").addEventListener("click", () => {
        
        console.log(slides[n - 1]); 
    })
}

let dots = document.querySelectorAll(".dot");
dots.forEach((dot) => {
    dot.addEventListener("click", () => { // for if someone chooses to click on one
        let selected = parseInt(dot.getAttribute("data-value"))
        // dot.classList.add("active");
        currentSlide(selected);
    })

})