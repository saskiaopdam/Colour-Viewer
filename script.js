// 100% visibility on (mobile) screen
window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.body.style.setProperty('--vh', `${vh}px`);
});

// colour menu
const button = document.querySelector("button");
const colors = document.querySelectorAll("input[name='color']");
const menu = document.querySelector("menu");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const main = document.querySelector("main");
const colorName = document.querySelector(".colorName");

let menuOpen = false;
let radioChecked = false;
let selection;

const toggleMenu = () => {
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

const undoSelection = () => {
    selection.checked = false;
    selection = false;
    radioChecked = false;
    main.removeAttribute("class");
    colorName.textContent = "";
};

const checkSelection = () => {
    if (radioChecked) {
       undoSelection();
    }
};

const useToggle = () => {
    toggleMenu();
    toggleIcon();
    checkSelection();
};

const changeBackground = (color) => {
    main.removeAttribute("class");
    main.classList.add(`bg-${color}`);
};

const changeLabel = (color) => {
    colorName.textContent = "";
    colorName.textContent = color;
};

const saveSelection = (menuItem) => {
    if (!radioChecked) {
        radioChecked = true;
    }    
    selection = menuItem;
};

const showColor = (e) => {
    changeBackground(e.target.value);
    changeLabel(e.target.value);
    saveSelection(e.target);
};

(function addListeners () {
    button.addEventListener("click", useToggle);
    colors.forEach(color => color.addEventListener("click", showColor));
})();