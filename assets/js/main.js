$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        loop: true,
        speed: 700,
        effect: 'slide',
        // breakpoints: {
        //     640: {
        //         slidesPerView: 1,
        //         spaceBetween: 20,
        //     },
        //     700: {
        //         slidesPerView: 2,
        //         spaceBetween: 20,
        //     },
        //     1024: {
        //         slidesPerView: 3,
        //         spaceBetween: 30,
        //     },
        // }
    });

});


$(document).ready(function() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});