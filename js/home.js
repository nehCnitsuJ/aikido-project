let splashscreen = document.querySelector(".splash-screen");
let ssheading = document.querySelector(".ss-heading");
let msg = document.querySelectorAll(".msg");

$(document).ready(function () {
  if (sessionStorage.getItem("splash-screen") !== "true") {
    console.log("here executed");
    $(".splash-screen").show();
    console.log(splashscreen);
    console.log("splash screen shown");
    console.log("here executed again");
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
    sessionStorage.setItem("splash-screen", "true");
  } else {
    $(".splash-screen").hide();
  }
});

//To create reveal animations
ScrollReveal({
  //reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal(".intro-container, #left-img", {
  delay: 700,
  origin: "left",
});

ScrollReveal().reveal("#about-p", {
  delay: 500,
  origin: "right",
});

// ScrollReveal().reveal(".sec-01 .image, .info", {
//   delay: 600,
//   origin: "bottom",
// });

ScrollReveal().reveal(".video-card", {
  delay: 500,
  origin: "bottom",
  interval: 200,
});

ScrollReveal().reveal(".class-details, #right-img", {
  delay: 500,
  origin: "top",
});
