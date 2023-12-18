const modal = document.querySelector(".modal-overlay");
const modalClose = document.querySelector(".modal__close");
const modalOpen = document.querySelector(".hero__request-btn");
const modalContent = document.querySelector(".modal");
const modalForm = document.querySelector(".modal__form-item");

modalOpen.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.add("d-block");
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("d-block");
});

modal.addEventListener("click", (event) => {
  if (event.target === modalContent) {
    event.stopPropagation();
  } else {
    modal.classList.remove("d-block");
  }
});

modalForm.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("d-block")) {
    modal.classList.remove("d-block");
  }
});
