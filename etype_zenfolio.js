(function ($) {
    Drupal.behaviors.etype_zenfolio = {
        attach: function (context) {
            var slideIndex = 1;
            var slides = $(".zenfolio-slide");

            // Next/previous controls
            function plusSlides(n) {
                slideIndex += n;
                showSlides(slideIndex);
            }

            function showSlides(n) {
                if (n > slides.length) {
                    slideIndex = 1;
                } else if (n < 1) {
                    slideIndex = slides.length;
                } else {
                    slideIndex = n;
                }
                slides.each(function (i) {
                    if (i === (slideIndex - 1)) {
                        $( this ).css("display", "flex");
                    } else {
                        $( this ).css("display", "none");
                    }
                });
                $(".zenfolio-numbertext > span").text(slideIndex);
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

