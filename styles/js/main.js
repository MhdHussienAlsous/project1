$(function() {
  "user strict";
  //   var winH = $(window).height(),
  //     upperH = $(".upper-bar").innerHeight(),
  //     navH = $(".nav-bar").innerHeight();
  //   var m = "100vh";
  //   $(".slider").height(m - (upperH + navH));
  $(".featured-work ul li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    if ($(this).data("class") === "all") {
      $(".shuffle-images .col-md").css("opacity", 1);
    } else {
      $(".shuffle-images .col-md").css("opacity", ".09");
      $($(this).data("class"))
        .parent()
        .css("opacity", 1);
    }
  });
});
