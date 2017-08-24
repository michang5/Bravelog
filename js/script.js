$(function () {
    $('[href="#top"], [href="#sport-1"], [href="#sport-2"], [href="#sport-3"]').click(function () {
        if ($(this).attr('href') == '#') {} else {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 50
            }, 500);
            return false;
        }
    });
});
$(".carousel").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll: "vertical"

});
window.onscroll = function () {
    var target = document.body;
    var top_btn = document.querySelector('#top-btn');
    var y = target.scrollTop,
        offset = 200;

    if (y >= offset) {
        top_btn.setAttribute('class', 'fixed');

    } else {
        top_btn.removeAttribute('class');
    }
}
$(document).ready(function () {
    $('.img-block').cycle({
        fit: 1,
        timeout: 4000,
        width: "fit"
    });
});

function hide(target) {
    document.getElementById(target).style.display = 'none';
}
