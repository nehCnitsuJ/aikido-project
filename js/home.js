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
