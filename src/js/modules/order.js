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
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Отримати всі елементи послуг
const serviceItems = document.querySelectorAll(".item");

// Отримати елемент span у формі, де ви хочете відображати обрані послуги
const serviceSpan = document.querySelector(".order__form-service span");

// Зберігати вибрані послуги в масиві
const selectedServices = [];

// Додати слухача подій click до кожної карти послуги
serviceItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Отримати назву обраної послуги
    const serviceName = item.querySelector(".item__name").textContent;

    // Перевірити, чи ця послуга вже обрана
    const isSelected = selectedServices.includes(serviceName);

    if (!isSelected) {
      // Якщо послуга ще не обрана, додати її до масиву обраних послуг
      selectedServices.push(serviceName);
    } else {
      // Якщо послуга вже обрана, видалити її з масиву обраних послуг
      const index = selectedServices.indexOf(serviceName);
      if (index !== -1) {
        selectedServices.splice(index, 1);
      }
    }

    // Оновити вміст спану і відобразити обрані послуги через "+"
    serviceSpan.textContent = selectedServices.join(" + ");
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

// Отримати кнопку "Самостійно зателефоную"
const callButtonMob = document.querySelector(".modal__form-btn");

// Отримати посилання для відображення
const numberLinkMob = document.querySelector(".modal__form-num");

// Додати слухача подій click до кнопки "Самостійно зателефоную"
callButtonMob.addEventListener("click", function () {
  // Зникнення кнопки "Самостійно зателефоную"
  callButtonMob.style.display = "none";

  // З'явлення посилання
  numberLinkMob.style.display = "flex"; // або 'block', залежно від вашого дизайну
});
