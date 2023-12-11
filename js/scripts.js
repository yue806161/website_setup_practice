document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".clickable-card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      window.location.href = this.dataset.href;
    });
  });
});
