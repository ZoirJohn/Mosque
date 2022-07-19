"use strict";

const dropdown = document.querySelector(".dropdown");
const items = document.querySelector(".dropdown-items");
const icon = document.querySelector(".arrow-icon");
function forDropdown() {
  items.classList.toggle("visible");
  icon.classList.toggle("rotate");
}
dropdown.addEventListener("click", () => forDropdown());

const spanSelect = document.getElementById("spanSelect");
const options = document.querySelectorAll(".dropdown-option");
options.forEach((element) => {
  element.addEventListener("click", () => {
    spanSelect.textContent = element.textContent;
    items.classList.toggle("visible");
    icon.classList.toggle("rotate");
  });
});

const aside__icon = document.querySelector(".aside-icon");
const aside = document.querySelector(".aside");
const body = document.querySelector("body");
function visibilizator() {
  aside.classList.toggle("active");
  body.classList.toggle("foggy");
  aside__icon.classList.toggle("active");
}
aside__icon.addEventListener("click", visibilizator);

const burger = document.querySelector(".burger");
const menuList = document.querySelector(".nav-list");
function rotater() {
  burger.classList.toggle("clicked");
  menuList.classList.toggle("clicked");
}
burger.addEventListener("click", rotater);


const breadcrumb = document.querySelector(".breadcrumb");
const greenName = document.querySelector(".greenName");
const blackName = document.querySelector(".blackName");
const linkActive = document.querySelector(".link.active");
const newsJS = document.querySelector(".newsJS");
if(linkActive.innerHTML){
  greenName.innerHTML = linkActive.innerHTML;
  blackName.innerHTML = newsJS.innerHTML;
}
console.log(breadcrumb.textContent);

