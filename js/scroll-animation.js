let pixel = document.documentElement.scrollTo
const BODY = document.querySelector("body");
const HEADER = document.querySelector("header");
const LINK = document.querySelectorAll(".header-link");
const IMG = document.getElementById("logo-img")
const BURGUER = document.getElementById("nav-menu");

window.addEventListener("scroll", background);
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", parallax);


function background() {
  let reveals = document.querySelectorAll(".section-3");
  let term = document.querySelectorAll(".term");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().bottom;
    let elementBottom = term[i].getBoundingClientRect().top;

    if (elementTop < windowHeight + 250 && elementBottom > windowHeight - 150) {
      BODY.classList.add("black");
      HEADER.classList.add("black");
      changeColor(true);
    } else if (elementBottom < windowHeight - 400) {
      BODY.classList.remove("black");
      HEADER.classList.remove("black");
      changeColor(false);
    } else {
      BODY.classList.remove("black");
      HEADER.classList.remove("black");
      changeColor(false);
    }

  }
}

// Funtion to change the color of the header info
function changeColor(flag) {
  if (flag) {
    for (let i = 0; i < LINK.length; i++) {
      LINK[i].classList.remove("black-letter");
      LINK[i].classList.add("white-letter");
      BURGUER.style.color = "white";
      IMG.style.backgroundImage = "url(../img/reyam-2.svg)";
    }
  } else {
    for (let i = 0; i < LINK.length; i++) {
      BURGUER.style.color = "black";
      LINK[i].classList.remove("white");
      LINK[i].classList.add("black-letter");
      IMG.style.backgroundImage = "url(../img/reyam.svg)";
    }
  }
}

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function parallax() {
  const BRAND = document.getElementById("content-parallax");
  const SPAN = document.getElementById("printpont-1");
  const LOGO = document.getElementById("logo-1");
  const WHITE_BOX = document.getElementById("white-box");
  const PARALLAX = document.getElementById("parallax");
  let scroll = document.documentElement.scrollTop;

  if (scroll < 120) {
    WHITE_BOX.style.right = (scroll - 350) + "px";
    BRAND.style.left = (scroll) + "px";
  }
  else {
    WHITE_BOX.style.right = ((scroll - 350)) + "px";
    BRAND.style.left = "120px";

  }

  if (scroll > 300 && scroll < 550) {
    WHITE_BOX.style.right = "-40px";
    LOGO.style.scale = ((scroll - 300)) * 0.2;
    LOGO.style.transform += "rotate(" + (scroll / 200) + "deg)";
    SPAN.style.visibility = ("hidden");
  } else {
    LOGO.style.scale = 1;
    LOGO.style.transform = "rotate(0deg)";
    SPAN.style.visibility = ("visible");
  }

  if (scroll > 450) {
    PARALLAX.style.position = "static";
    PARALLAX.style.scale = "0.2";
  }
  else {
    PARALLAX.style.scale = "";
    PARALLAX.style.position = "fixed";
  }

  if (scroll > 380) {
    LOGO.style.visibility = "hidden"
  } else {
    LOGO.style.visibility = "visible"
  }
}





