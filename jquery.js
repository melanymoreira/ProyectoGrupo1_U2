$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $("header").addClass("abajo");
        } else {
            $("header").removeClass("abajo");
        }
    });

    $(".accordion-header").click(function () {
        $(this).next(".accordion-content").slideToggle();
        $(".accordion-content").not($(this).next()).slideUp();
    });
});