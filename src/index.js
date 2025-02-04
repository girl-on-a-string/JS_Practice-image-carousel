import "./styles.scss";

function currentSlide(n) {
  console.log(n);
}

// // dots

let dots = document.querySelectorAll(".dot");

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentSlide(parseInt(dot.getAttribute("data-value")));
  });
});

let slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    currentSlide(parseInt(slide.getAttribute("data-value")));
  });
});

// move functions

let slidesIndex = 1;

const next = () => {
  currentSlide(slidesIndex++);
};

const prev = () => {
  currentSlide(slidesIndex--);
};

// arrow event listeners

let nextArrow = document.getElementById("next");
nextArrow.addEventListener("click", () => {
  next();
});

let prevArrow = document.getElementById("prev");
prevArrow.addEventListener("click", () => {
  prev();
});
