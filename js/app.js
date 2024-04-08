const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav__toggle__btn");

const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  navbar.classList.toggle("nav__open");
});

// set year
// date.innerHTML = new Date().getFullYear();
