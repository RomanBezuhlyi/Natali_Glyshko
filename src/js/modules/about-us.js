var swiper = new Swiper(".about-us__slider", {
  slidesPerView: 1.5,
  spaceBetween: 16,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
