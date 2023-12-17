var processTopSwiper = new Swiper(".order__price-row", {
  slidesPerView: 1.5,
  spaceBetween: 16,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    725: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    1175: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Отримати всі елементи послуг
const serviceItems = document.querySelectorAll(".item");

// Отримати елемент span у формі, де ви хочете відображати обрану послугу
const serviceSpan = document.querySelector(".order__form-service span");

// Додати слухача подій click до кожної карти послуги
serviceItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Оновити вміст спану обраною назвою послуги
    serviceSpan.textContent = item.querySelector(".item__name").textContent;
  });
});

// Отримати кнопку "Самостійно зателефоную"
const callButton = document.querySelector(".order__form-btn");

// Отримати посилання для відображення
const numberLink = document.querySelector(".order__form-num");

// Додати слухача подій click до кнопки "Самостійно зателефоную"
callButton.addEventListener("click", function () {
  // Зникнення кнопки "Самостійно зателефоную"
  callButton.style.display = "none";

  // З'явлення посилання
  numberLink.style.display = "flex"; // або 'block', залежно від вашого дизайну
});
