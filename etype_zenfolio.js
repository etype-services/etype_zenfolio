(function ($) {
    Drupal.behaviors.etype_zenfolio = {
        attach: function (context) {
            var slideIndex = 1;

            // Next/previous controls
            function plusSlides(n) {
                slideIndex += n;
                showSlides(slideIndex);
            }

            // Thumbnail image controls
            function currentSlide(n) {
                showSlides(n);
            }

            function showSlides(n) {
                // alert(n);
                var slides = $(".zenfolio-slide");
                // var dots = $(".zenfolio-dot");
                if (n > slides.length) {
                    slideIndex = 1;
                }
                if (n < 1) {
                    slideIndex = slides.length;
                } else {
                    slideIndex = n;
                }
                // alert(slideIndex);
                slides.each(function (i) {
                    alert(i);
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

