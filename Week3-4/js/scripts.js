(function ($) {
  "use strict";

  $(window).on("scroll load", function () {
    if ($(".navbar").offset().top > 60) {
      $(".fixed-top").addClass("top-nav-collapse");
    } else {
      $(".fixed-top").removeClass("top-nav-collapse");
    }
  });

  $(function () {
    $(document).on("click", "a.page-scroll", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top,
          },
          600,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
  });
  var cardSlider = new Swiper(".card-slider", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 70,
    breakpoints: {
      767: {
        slidesPerView: 1,
      },

      991: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });

  var imageSlider = new Swiper(".image-slider", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    slidesPerView: 5,
    breakpoints: {
      380: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      516: {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  $(".popup-with-move-anim").magnificPopup({
    type: "inline",
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: "auto",
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: "my-mfp-slide-bottom",
  });

  var a = 0;
  $(window).scroll(function () {
    if ($("#counter").length) {
      var oTop = $("#counter").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter-value").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              },
            }
          );
        });
        a = 1;
      }
    }
  });

  $("body").prepend(
    '<a href="body" class="back-to-top page-scroll">Back to Top</a>'
  );
  var amountScrolled = 700;
  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $("a.back-to-top").fadeIn("500");
    } else {
      $("a.back-to-top").fadeOut("500");
    }
  });

  /* Removes Long Focus On Buttons */
  $(".button, a, button").mouseup(function () {
    $(this).blur();
  });
})(jQuery);
