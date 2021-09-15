// member.js

$(window).scroll(function () {

    // navigation menu 

    var navH = $('nav').height();
    var winTop = $(window).scrollTop();

    //    console.log('nav 높잇값 : ' + navH);
    //    console.log('window scroll값 : ' + winTop);

    if (navH < winTop) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }

}); // scroll Event

$(document).ready(function () {



    // Navigation Menu

    $('.depth_1>li').mouseenter(function () {
        $(this).children('ul.depth_2').slideDown();
    });


    $('.depth_1>li').mouseleave(function () {
        $('ul.depth_2').stop().slideUp();
    });


    // btn-more 
    $('.btn-more').click(function (e) {
        e.preventDefault();

        $(this).prev().show(1000);
        
        $(this).fadeOut(500);

    });

}); // jQuery
