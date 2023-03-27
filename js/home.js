let splashscreen = document.querySelector(".splash-screen");
let ssheading = document.querySelector(".ss-heading");
let msg = document.querySelectorAll(".msg");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    msg.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      msg.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      splashscreen.style.top = "-100vh";
    }, 2300);
  });
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

//Scroll upwards
// window.onload = function () {
//   const effect = document.querySelector("#effect");

//   window.addEventListener("scroll", scrollEffect);

//   function scrollEffect() {
//     if (window.scrollY >= 500) {
//       effect.style.opacity = "1";
//       effect.style.transform = "translateX(0px)";
//       effect.style.transition = "1s ease-in-out";
//     } else {
//       effect.style.opacity = "0";
//       effect.style.transform = "translateX(-50px)";
//     }
//   }
//   scrollEffect;
// };
