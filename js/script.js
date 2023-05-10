let html = document.querySelector("html");
let lightButton = document.querySelector(".theme-button-light");
let darkButton = document.querySelector(".theme-button-dark");
let sansSerifButton = document.querySelector(".font-button-sans-serif");
let serifButton = document.querySelector(".font-button-serif");
let smallFontButton = document.querySelector(".font-size-button-s");
let mediumFontButton = document.querySelector(".font-size-button-m");
let largeFontButton = document.querySelector(".font-size-button-l");

function LightTheme(){
    darkButton.classList.remove("active");
    lightButton.classList.add("active");
    html.setAttribute("data-theme-name", "light");
}

function DarkTheme(){
    lightButton.classList.remove("active");
    darkButton.classList.add("active");
    html.setAttribute("data-theme-name", "dark");
}

function FontSansSerif(){
    serifButton.classList.remove("active");
    sansSerifButton.classList.add("active");
    html.setAttribute("data-theme-font","sans-serif");
}

function FontSerif(){
    sansSerifButton.classList.remove("active");
    serifButton.classList.add("active");
    html.setAttribute("data-theme-font","serif");
}

function FontSizeSmall(){
    mediumFontButton.classList.remove("active");
    largeFontButton.classList.remove("active");
    smallFontButton.classList.add("active");
    html.setAttribute("data-theme-font-size","small")
}

function FontSizeMedium(){
    smallFontButton.classList.remove("active");
    largeFontButton.classList.remove("active");
    mediumFontButton.classList.add("active");
    html.setAttribute("data-theme-font-size","medium")
}

function FontSizeLarge(){
    smallFontButton.classList.remove("active");
    mediumFontButton.classList.remove("active");
    largeFontButton.classList.add("active");
    html.setAttribute("data-theme-font-size","large")
}