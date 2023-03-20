// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyscroll()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyscroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var typed = new Typed(".auto-type", {
  strings: ["Welcome to aikiForest", "The educational powerhouse in contemporary aikido", "We deliver and develop high quality and learner-centric aikido programmes"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
})