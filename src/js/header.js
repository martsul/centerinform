$(document).ready(function () {
  $("#open-mobile-menu").mousedown(function () {
    let header_menu = $(".header-menu");
    let open_button = $("#open-mobile-menu-button");
    let close_button = $("#close-mobile-menu-button");

    if (header_menu.is(":visible")) {
      header_menu.fadeOut("slow");
      open_button.show();
      close_button.hide();
    } else {
      header_menu.fadeIn("slow");
      open_button.hide();
      close_button.show();

      $("#header-mobile-menu-links").show();
      $("#products-and-solutions-mobile-container").hide();
    }
  });

  $(".show-popup").mousedown(function () {
    $(this).addClass("show-popup-active");
    $("#feedback-overlay").fadeIn(500);
  });

  $("#feedback-overlay").mousedown(function (event) {
    if ($(event.target).attr("id") === $(this).attr("id")) {
      $(this).fadeOut(500);
      $(".show-popup").removeClass("show-popup-active");
    }
  });

  $("#feedback-form").submit(function (event) {
    event.preventDefault();

    $("#feedback-submit-group")
      .empty()
      .append(
        "<p>Ваша заявка успешно отправлена! Наши специалисты свяжутся с Вами в ближайшее время!</p>"
      );

    setTimeout(function () {
      $("#feedback-overlay").fadeOut();
    }, 3000);

    return false;
  });

  $(".ui-loader").remove();

  let products_and_solutions_link = $("#products-and-solutions-link");
  let header_menu = $("#menu-fixed");

  let isMouseOverMenu = false;
  let isMouseOverLink = false;

  products_and_solutions_link.hover(
    function () {
      isMouseOverLink = true;
      header_menu.show();
    },
    function () {
      isMouseOverLink = false;
      setTimeout(function () {
        if (!isMouseOverMenu && !isMouseOverLink) {
          header_menu.hide();
        }
      }, 100);
    }
  );

  header_menu.hover(
    function () {
      isMouseOverMenu = true;
    },
    function () {
      isMouseOverMenu = false;
      setTimeout(function () {
        if (!isMouseOverMenu && !isMouseOverLink) {
          header_menu.hide();
        }
      }, 100);
    }
  );

  $("#products-and-solutions-mobile-link").mousedown(function (event) {
    event.preventDefault();

    $("#header-mobile-menu-links").fadeOut(100);
    $("#products-and-solutions-mobile-container").fadeIn(100);
  });

  $(".menu-fixed-column__header").mousedown(function () {
    $(".menu-fixed-column__links-mobile").hide();

    $(this).parent().find(".menu-fixed-column__links-mobile").fadeIn(100);
  });
});
