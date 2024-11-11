const button = document.querySelector(".btn-header");
const menu = document.querySelector(".sidebar");
const buttonClose = document.querySelector(".js-menu-close");

button.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});

buttonClose.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});
