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
                showSlides(slideIndex = n);
            }

            function showSlides(n) {
                var i;
                var slides = $(".zenfolio-slides");
                var dots = $(".zenfolio-dot");
                if (n > slides.length) { slideIndex = 1 }
                if (n < 1) { slideIndex = slides.length }
                for (i = 0; i < slides.length; i ++) {
                    slides[i].css("display", "none");
                }
                for (i = 0; i < dots.length; i ++) {
                    dots[i].removeClass(" active");
                }
                slides[slideIndex -1].css("display", "block");
                dots[slideIndex -1].addclass("active");
            }

            showSlides(slideIndex);
        }
    };
})(jQuery);

