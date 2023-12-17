// Get all service elements
const serviceElements = document.querySelectorAll(".service");
const formServiceElement = document.querySelector(".sale__form-service");

// Add click event listener to each service element
serviceElements.forEach((service) => {
  service.addEventListener("click", () => {
    // Remove 'active-service' class from all services
    serviceElements.forEach((s) => s.classList.remove("active-service"));

    // Add 'active-service' class to the clicked service
    service.classList.add("active-service");

    // Concatenate text from service__bottom paragraphs into a single line
    const serviceBottomText = Array.from(
      service.querySelectorAll(".service__bottom-text")
    )
      .map((text) => text.innerText)
      .join(" ");

    // Update text in the form with the concatenated content
    formServiceElement.innerText = serviceBottomText;
  });
});
