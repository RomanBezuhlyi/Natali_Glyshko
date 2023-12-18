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

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");
  const modalOverlay = document.querySelector(".modal-overlay-second");
  const modalFormService = document.querySelector(".modal__form-service span");
  const modalCloseBtn = document.querySelector(".modal__close-second");

  items.forEach((item) => {
    item.addEventListener("click", function () {
      if (innerWidth <= 991) {
        const serviceName = item.querySelector(".item__name").innerText;
        modalFormService.innerText = serviceName;
        modalOverlay.style.display = "flex";
      }
    });
  });

  function closeModal() {
    modalOverlay.style.display = "none";
  }

  modalCloseBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", function (event) {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });
});
