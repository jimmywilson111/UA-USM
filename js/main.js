function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});;

$(document).ready(function () {
    $('.icon-call-phone-outline').click(function () {
        $('.icon-call-phone-outline, .phones').toggleClass('active');
        $('body').toggleClass('lock');
    });

    jQuery('.slick').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 800,
        dots: true,
        arrows: true,
        fade: false,
        rows: 2,
        responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    rows: 3,
                    slidesToScroll: 3,
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
                    rows: 3,
                    slidesToScroll: 3,
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    rows: 3,
                    slidesToScroll: 3,
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2,
                    rows: 3,
                    slidesToScroll: 2,
                    dots: false,
                    arrows: true
                }
            }
        ]
    });
});