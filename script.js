// 100% visibility on (mobile) screen
const resizeOps = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};
resizeOps();

window.addEventListener("resize", resizeOps);

// colour menu
const colors = document.querySelectorAll("input");
const colorSquare = document.body;
const colorCircle = document.querySelector(".color-circle");
const colorName = document.querySelector(".color-name");
const form = document.querySelector("form");
const toggle = document.querySelector("button");
const menu = document.querySelector("menu");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

let menuOpen = false;
let savedColor;

const toggleMenu = () => {
    console.log("menu toggled");
    menu.classList.toggle("visible");
    menuOpen = !menuOpen;
};

const toggleIcon = () => {
    if (menuOpen) {
        menuIcon.classList.replace("visible", "removed");
        closeIcon.classList.replace("removed", "visible");
    } else {
        menuIcon.classList.replace("removed", "visible");
        closeIcon.classList.replace("visible", "removed");
    }
};

const useToggle = () => {
    toggleMenu();
    toggleIcon();
};

const showColorView = (color) => {
    colorSquare.classList.remove(`bg-${savedColor}`);
    colorSquare.classList.add(`bg-${color}`);
    colorCircle.classList.remove(`bg-${savedColor}`);
    colorCircle.classList.add(`bg-${color}`);
};

const showColorName = (color) => {
    colorName.textContent = "";
    colorName.textContent = color.toUpperCase();
};

const saveColor = (color) => {
    savedColor = color;
    console.log("saved color: ", savedColor);
};

const showColor = (color) => {
    showColorView(color);
    showColorName(color);
    saveColor(color);
};

(function addListeners () {
    toggle.addEventListener("click", useToggle);
    colors.forEach(color => color.addEventListener("click", (e) => showColor(e.target.value)));
})();

(function showDefaultColor () {
    colors.forEach(color => {
        if (color.checked) {
            showColor(color.value);
        }
    });
})();