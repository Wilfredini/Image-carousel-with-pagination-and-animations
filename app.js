const slider = document.querySelector(".slider");
const sliderImg = document.querySelectorAll(".slide");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const pagination = document.querySelector("paginator");
const page = document.querySelectorAll(".page");
let slideNumber = 0;
const numberOfSlides = page.length;
const content = document.querySelectorAll(".content");

btnNext.addEventListener("click", function () {
  sliderImg.forEach((slide) => {
    slide.classList.remove("current");
  });
  page.forEach((page) => {
    page.classList.remove("actual");
  });
  content.forEach((content) => {
    content.classList.remove("current");
  });
  slideNumber++;
  if (slideNumber > numberOfSlides - 1) {
    slideNumber = 0;
  }

  sliderImg[slideNumber].classList.add("current");
  page[slideNumber].classList.add("actual");
  content[slideNumber].classList.add("current");
});

btnPrev.addEventListener("click", function () {
  sliderImg.forEach((slide) => {
    slide.classList.remove("current");
  });
  page.forEach((page) => {
    page.classList.remove("actual");
  });
  content.forEach((content) => {
    content.classList.remove("current");
  });
  slideNumber--;
  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }

  sliderImg[slideNumber].classList.add("current");
  page[slideNumber].classList.add("actual");
});
