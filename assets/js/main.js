$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        loop: true,
        speed: 700,
        effect: 'slide',

    });

});


$(document).ready(function() {
    var swiper = new Swiper('.quoteslider', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        loop: true,
        speed: 700,
        effect: 'slide',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

    });

});

$(document).ready(function() {
    $(".js-video-button").modalVideo({
        youtube: {
            controls: 0,
            nocookie: true
        }
    });

});