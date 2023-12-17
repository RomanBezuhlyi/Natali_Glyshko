var swiper = new Swiper(".about-us__slider", {
  slidesPerView: 1.3,
  spaceBetween: 16,
  breakpoints: {
    480: {
      slidesPerView: 1.5,
    },
    600: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
  },
});
