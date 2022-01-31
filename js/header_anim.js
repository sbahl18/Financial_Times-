$(document).ready(function () {
    $(window).on('scroll',function(){
    
        if ($(window).scrollTop() >= 140) {
            console.log("hello")
            $('#hidden-nav').css({
                'background-color:' : '#EAE5E5',
                // 'display': 'initial'
                'transform':'translateY(0%)'
            });
        } else {
            $('#hidden-nav').css({
                'transform':'translateY(-200%)'
            });
        }
    });
});