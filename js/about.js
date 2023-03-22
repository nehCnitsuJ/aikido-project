//To create reveal animations
ScrollReveal({
  //reset: true,
  distance: "40px",
  duration: 2500,
  delay: 400,
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal(
  ".section-headings, .videos-container, .footer-distributed",
  {
    delay: 600,
    origin: "bottom",
  }
);

ScrollReveal().reveal(".values-container", {
  delay: 500,
  origin: "left",
});

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//whatsapp button
const whatsappBtn = document.querySelector(".whatsapp-btn");

window.addEventListener("scroll", function () {
  whatsappBtn.classList.toggle("active", window.scrollY > 500);
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  stickyscroll();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyscroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//Our clients - Swiper
var swiper = new Swiper(".vid-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
