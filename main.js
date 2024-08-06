"use strict";

let socialButton = document.getElementById("social-btn");
let socialButtonActive = document.getElementById("social-btn-active");
let toolTip = document.getElementById("tooltip");
let footer = document.getElementById("footer");
let footerActive = document.getElementById("footer-active");

socialButton.addEventListener("mouseover",function(){
  toolTip.classList.add("active");
});

document.addEventListener("click", function (){
  toolTip.classList.remove("active");
});

socialButton.addEventListener("click", function(){
  footer.classList.toggle("disabled");
  footerActive.classList.toggle("disabled");
});

socialButtonActive.addEventListener("click", function(){
  footer.classList.toggle("disabled");
  footerActive.classList.toggle("disabled");
});
