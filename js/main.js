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

let dropdownBtn = document.querySelector('.dropdown');
let menuContent = document.querySelector('.child-menu');
dropdownBtn.addEventListener('click', () => {
    if (menuContent.style.display === "") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "";
    }
});

jQuery('.slick').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: false,
    speed: 800,
    dots: true,
    arrows: true,
    fade: false,
    rows: 2
});
