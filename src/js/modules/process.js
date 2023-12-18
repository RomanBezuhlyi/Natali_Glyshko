var processTopSwiper = new Swiper(".process__top", {
  slidesPerView: 1.5,
  spaceBetween: 16,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

var processBottomSwiper;

function initProcessBottomSwiper() {
  processBottomSwiper = new Swiper(".process__bottom", {
    navigation: {
      prevEl: ".process__bottom-arr-prev",
      nextEl: ".process__bottom-arr-next",
    },
    slidesPerView: 1.3,
    spaceBetween: 20,
    centerInsufficientSlides: true,
    breakpoints: {
      991: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1500: {
        slidesPerView: 4,
      },
    },
  });
}

function destroyProcessBottomSwiper() {
  if (processBottomSwiper) {
    processBottomSwiper.destroy();
    processBottomSwiper = null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Отримуємо всі елементи з класом 'process__top-item'
  const topItems = document.querySelectorAll(".process__top-item");

  // Отримуємо всі елементи з класом 'process__bottom'
  const bottomItems = document.querySelectorAll(".process__bottom-wrap");

  // Додаємо обробник події для кожного елемента з класом 'process__top-item'
  topItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Видаляємо клас 'active' з усіх елементів з класом 'process__top-item'
      topItems.forEach((topItem) => {
        topItem.classList.remove("active");
      });

      // Додаємо клас 'active' тільки для клікнутого елемента
      item.classList.add("active");

      // Сховуємо всі елементи з класом 'd-block'
      bottomItems.forEach((bottomItem) => {
        bottomItem.classList.remove("d-block");
      });

      // Показуємо відповідний елемент знизу, використовуючи індекс
      bottomItems[index].classList.add("d-block");

      // Проверяем ширину экрана и инициализируем/уничтожаем слайдер process__bottom
      if (window.innerWidth <= 991) {
        destroyProcessBottomSwiper();
      } else {
        initProcessBottomSwiper();
      }
    });
  });

  // Переинициализация при изменении размеров окна
  window.addEventListener("resize", function () {
    handleProcessBottomSwiper();
  });
  // Инициализация или уничтожение слайдера process__bottom при загрузке страницы
  handleProcessBottomSwiper();
});

function handleProcessBottomSwiper() {
  if (window.innerWidth <= 991) {
    destroyProcessBottomSwiper();
  } else {
    initProcessBottomSwiper();
  }
}
