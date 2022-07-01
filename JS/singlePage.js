"use strict";
const postName = document.querySelector("#postName");
const header = document.querySelector(".breadcrumb__item");
header.innerHTML = postName.innerHTML.toLowerCase();
