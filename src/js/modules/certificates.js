var processTopSwiper = new Swiper(".certificates__slider", {
  slidesPerView: 1.4,
  spaceBetween: 16,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    650: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
