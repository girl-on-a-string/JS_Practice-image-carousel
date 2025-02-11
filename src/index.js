import "./styles.scss";

let slides = document.querySelectorAll(".slide");

const currentSlide = (n) => {
  // current selected slide
  let i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[n - 1].style.display = "initial";

  dots[n - 1].classList.add("active");

  for (i = 0; i < dots.length; i++) {
    // remove active class from unclicked dot
    if (dots[i] !== dots[n - 1]) {
      dots[i].classList.remove("active");
    }
  }
};

// dots

let dots = document.querySelectorAll(".dot");

dots.forEach((dot) => {
  let selected = parseInt(dot.getAttribute("data-value"));

  dot.addEventListener("click", () => {
    // for if someone chooses to click on one
    currentSlide(selected);
  });
});

// arrow event listeners

// document.getElementById("next").addEventListener("click", () => {
//     currentSlide();
//     console.log(currentSlide())
// })

// document.getElementById("prev").addEventListener("click", () => {
//     currentSlide();
//     console.log(currentSlide())
// })

// automatic cycle

const autoCycle = () => {
  let slideNum = 0;

  setInterval(() => {
    slideNum++;

    if (slideNum > slides.length) {
      slideNum = 1;
    }

    currentSlide(slideNum);
  }, 5000);
};

autoCycle();
