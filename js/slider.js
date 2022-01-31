$(document).ready(function() {
$('.owl-carousel').owlCarousel({
    autoplay: true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
});