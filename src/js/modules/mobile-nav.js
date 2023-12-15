const burger = document.querySelector(".header__burger");

const nav = document.querySelector(".header__nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    burger.src = "./img/close.svg";
  } else {
    burger.src = "./img/burger.svg";
  }
});
