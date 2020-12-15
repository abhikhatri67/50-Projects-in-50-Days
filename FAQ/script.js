const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentDiv = btn.parentNode;
    parentDiv.classList.toggle("active");
  });
});
