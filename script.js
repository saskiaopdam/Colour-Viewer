const hamburger = document.querySelector(".hamburger");
const colors = document.querySelectorAll("input[name='color']");

const toggleMenu = () => {
  const menu = document.querySelector(".menu");
  const figure = document.querySelector(".figure");
  menu.classList.toggle("visible");
  figure.classList.toggle("hidden");
};

const changeBg = (color) => {
  document.body.removeAttribute("class");
  document.body.classList.add(`bg-${color}`);
};

const changeTxt = (color) => {
  const colorName = document.querySelector(".colorName");
  colorName.textContent = "";
  colorName.textContent = color;
};

const showColor = (e) => {
  const color = e.target.id;
  changeBg(color);
  changeTxt(color);
};

hamburger.addEventListener("click", toggleMenu);
colors.forEach(color => color.addEventListener("click", showColor));