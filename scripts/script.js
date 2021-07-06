const headerCityButton = document.querySelector(".header__city-button");

headerCityButton.textContent =
  localStorage.getItem("lomoda-location") || "Ваш город?";

headerCityButton.addEventListener(`click`, () => {
  const city = prompt(`Укажите ваш город!`);
  headerCityButton.textContent = city;
  localStorage.setItem("lomoda-location", city);
});

/* 1. modal window */

const subheaderCart = document.querySelector(".subheader__cart");
const cartOverlay = document.querySelector(".cart-overlay");

const cartModalOpen = () => {
  cartOverlay.classList.add("cart-overlay-open");
  disableScroll(); //2
};

const cartModalClose = () => {
  cartOverlay.classList.remove("cart-overlay-open");
  anableScroll(); //2
};

subheaderCart.addEventListener("click", cartModalOpen);

cartOverlay.addEventListener("click", (event) => {
  const target = event.target;

  if (
    target.classList.contains("cart__btn-close") ||
    target.classList.contains("cart-overlay")
  ) {
    cartModalClose();
  }
});

/* 2. disable scroll */

const disableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth;

  document.body.dbScrollY = window.scrollY;

  document.body.style.cssText = `
  position: fixed;
  top: ${-window.scrollY}px;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding-right: ${widthScroll}px;
  `;
};

const anableScroll = () => {
  document.body.style.cssText = "";
  window.scroll({
    top: document.body.dbScrollY,
  });
};
