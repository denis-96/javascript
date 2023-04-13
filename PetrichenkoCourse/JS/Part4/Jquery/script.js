import $ from "jquery";

// $(document).ready(() => {}) // deprecated
$(() => {
  $(".list-item:first").hover(function () {
    $(this).toggleClass("active");
  });

  $(".list-item:eq(2)").on("click", function () {
    $(".image:odd").animate(
      {
        opacity: "toggle",
        height: "toggle",
      },
      2000
    );
  });
});
