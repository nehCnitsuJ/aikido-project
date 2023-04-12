//ImgCard section
const imgModels = document.querySelectorAll(".img-model");
const imgCards = document.querySelectorAll(".img-card");
const imgClosebtn = document.querySelectorAll(".img-close-btn");

var portfolioModal = function (modalClick) {
  imgModels[modalClick].classList.add("active");
};

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    portfolioModal(i);
  });
});

imgClosebtn.forEach((imgClosebtn) => {
  imgClosebtn.addEventListener("click", () => {
    imgModels.forEach((imgModelView) => {
      imgModelView.classList.remove("active");
    });
  });
});
