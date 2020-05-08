$(document).ready(function () {
  $(".features__block").on("click", function () {
    $(this).find(".features__block-text").slideToggle();
    $(this).toggleClass("features__block--active");
  });
});
