const slidesContainer = document.getElementById("slides-container");
const slides = document.querySelectorAll(".slide");
const slideWidth = slides[0].getBoundingClientRect().width;
const previousButton = document.getElementById("arrow-left");
const nextButton = document.getElementById("arrow-right");

nextButton.addEventListener("click", () => {
  const maxScrollLeft =
    slidesContainer.scrollWidth - slidesContainer.clientWidth;

  if (Math.ceil(slidesContainer.scrollLeft) >= maxScrollLeft) {
    slidesContainer.scrollLeft = 0;
  } else {
    slidesContainer.scrollLeft += slideWidth;
  }
});

previousButton.addEventListener("click", () => {
  if (slidesContainer.scrollLeft <= 0) {
    slidesContainer.scrollLeft = slidesContainer.scrollWidth;
  } else {
    slidesContainer.scrollLeft -= slideWidth;
  }
});