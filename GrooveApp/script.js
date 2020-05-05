$(document).ready(function () {
  $(".features__block").on("click", function () {
    $(this).find(".features__block-text").slideToggle();
    $(this).toggleClass("features__block--active");
  });
  // let currentBlock;
  // $(".features__block").on("click", function () {
  //   if(this == currentBlock) {
  //     $(".features__block-text").slideUp();
  //     $(".features__block").removeClass("features__block--active");
  //   } else {
  //     $(".features__block").removeClass("features__block--active");
  //     $(".features__block-text").slideUp();
  //     $(this).find(".features__block-text").slideDown();
  //     $(this).addClass("features__block--active");
  //   }
  //   currentBlock = this;
  // });
});
