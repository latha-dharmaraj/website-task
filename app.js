document.querySelector(".fa-bars").addEventListener("click", function () {
    document.querySelector(".side-nav-bar").classList.add("nav-open");
});
document.querySelector(".side-nav h3").addEventListener("click", function () {
    document.querySelector(".side-nav-bar").classList.remove("nav-open");
});

$(document).ready(function(){
$('.learn-cooking-img-sec-container').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
    });
});