import "./styles.scss";

const currentSlide = (n) => { // current selected slide
    let slides = document.querySelectorAll(".slide");
    console.log(slides[n - 1]); 
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

// event listeners

document.getElementById("next").addEventListener("click", () => {
    
})

document.getElementById("prev").addEventListener("click", () => {

})