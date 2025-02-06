import "./styles.scss";

const currentSlide = (n) => { // current selected slide
    let strip = document.getElementById("strip");
    let slides = document.querySelectorAll(".slide");
    
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[n - 1].style.display = "initial";

    console.log(slides[n - 1]); 

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
        currentSlide(selected);
        console.log(selected);
    })

    // for automatic affect
})