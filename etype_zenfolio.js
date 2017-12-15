(function ($) {
    Drupal.behaviors.etype_zenfolio = {
        attach: function (context) {
            var slideIndex = 1;

            // Next/previous controls
            function plusSlides(n) {
                showSlides(slideIndex += n);
            }

            // Thumbnail image controls
            function currentSlide(n) {
                showSlides(n);
            }

            function showSlides(n) {
                var slides = $(".zenfolio-slides");
                // var dots = $(".zenfolio-dot");
                if (n > slides.length) {
                    slideIndex = 1;
                }
                if (n < 1) {
                    slideIndex = slides.length;
                }
                slides.each(function (i) {
                    if (i === (slideIndex - 1)) {
                        $("this").css("display", "block");
                        // dots[i].addclass("active");
                    } else {
                        $("this").css("display", "none");
                        // dots[i].removeClass(" active");
                    }
                });
            }

            showSlides(slideIndex);

            $(".zenfolio-prev").click(function () {
                plusSlides(-1);
            });
            $(".zenfolio-next").click(function () {
                plusSlides(1);
            });
        }
    };
})(jQuery);

