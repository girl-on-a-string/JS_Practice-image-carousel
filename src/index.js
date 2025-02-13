import "./styles.scss";

let slides = document.querySelectorAll(".slide");

let slidesNum = 1;

const autoCycle = (n) => {
  let cycleSec = 2000;

  setInterval(() => {
    n++;

    if (n > slides.length) {
      n = 1;
    }

    currentSlide(n);
  }, cycleSec);
};

const currentSlide = (n) => {
  // current selected slide
  let i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[n - 1].style.display = "initial";

  let dots = document.querySelectorAll(".dot");
  dots[n - 1].classList.add("active");

  for (i = 0; i < dots.length; i++) {
    // remove active class from unclicked dot
    if (dots[i] !== dots[n - 1]) {
      dots[i].classList.remove("active");
    }
  }
};

autoCycle(slidesNum);
