document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".clickable-card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      var href = this.dataset.href;

      if (href && href !== "#") {
        window.location.href = href;
      } else {
        console.log("無效的鏈接或未設置鏈接");
      }
    });
  });
});
