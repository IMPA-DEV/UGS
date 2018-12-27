$(function() {

    $('.choose-about').click(function () {
        $('.choose-about').removeClass('active').next().slideUp();
        $(this).toggleClass('active').next().slideDown();
    });

});
