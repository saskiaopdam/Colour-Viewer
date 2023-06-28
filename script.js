const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const figure = document.querySelector(".figure");

const menuItemGrey = document.querySelector(".menuItem-grey input");
const menuItemRed = document.querySelector(".menuItem-red input");
const menuItemOrange = document.querySelector(".menuItem-orange input");
const menuItemPurple = document.querySelector(".menuItem-purple input");
const menuItemGreen = document.querySelector(".menuItem-green input");

const colorLabel = document.querySelector(".colorName");

const changeBodyBackgroundColor = function (colorName) {
  body.removeAttribute("class");
  body.classList.add(`body-${colorName}`);
};
const displayColorLabel = function (colorName) {
  colorLabel.innerHTML = "Your favourite color is: " + colorName;
};

const onHamburgerClick = function () {
  menu.classList.toggle("menu-opened");
  figure.classList.toggle("figure-hidden");
  body.removeAttribute("class");
  colorLabel.innerHTML = "";
};

const onMenuItemClick = function (e) {
  const colorName = e.target.id;
  changeBodyBackgroundColor(colorName);
  displayColorLabel(colorName);
};

hamburger.addEventListener("click", onHamburgerClick);

menuItemGrey.addEventListener("click", (e) => onMenuItemClick(e));
menuItemRed.addEventListener("click", (e) => onMenuItemClick(e));
menuItemOrange.addEventListener("click", (e) => onMenuItemClick(e));
menuItemPurple.addEventListener("click", (e) => onMenuItemClick(e));
menuItemGreen.addEventListener("click", (e) => onMenuItemClick(e));
