import "./styles.scss";

function currentSlide (n) {
    console.log(n);
}

// const indexHandling = () => {
//     slidesIndex++;

//     if (slidesIndex > 5) {
//         slidesIndex = 1;
//     }
// }

// // dots

let dots = document.querySelectorAll(".dot");

dots.forEach((dot) => {
    dot.addEventListener("click", () => {
        console.log("dot move");
        currentSlide(dot.value);
    });
})

// for (let i = 0; i < dot.length; i++) {
//     console.log("for dots")
//     currentSlide(i);
// }

// // connect slides and dots

// let slide = document.querySelectorAll(".slide");

// for (let i = 0; i < slide.length; i++) {
//     console.log("for slides")
//     currentSlide(i);
// }

// slide.forEach(() => {
//     indexHandling();
//     console.log(slidesIndex);
// })


// move functions

let strip = document.getElementById("strip")

const next = () => {

}

const prev = () => {

} 

// event listeners

let nextArrow = document.getElementById("next");
nextArrow.addEventListener("click", () => {

})

let prevArrow = document.getElementById("prev");
prevArrow.addEventListener("click", () => {

})
