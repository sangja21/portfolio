// header.js


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

});


$(document).ready(function () {

    // Navigation Menu

    //                $('.depth_1>li').mouseenter(function () {
    //                    $(this).children('ul.depth_2').slideDown();
    //                });
    //
    //
    //                $('.depth_1>li').mouseleave(function () {
    //                    $('ul.depth_2').stop().slideUp();
    //                });

    // Navigation Menu2
    $('.depth_1>li').mouseenter(function () {

        //이전에 나왔던 서브메뉴 초기화
        $('ul.depth_2').hide();

        $('header').css('height', '140px');
        $(this).children('ul.depth_2').stop().slideDown();
    });

    $('nav').mouseleave(function () {
        $('header').css('height', '80px');
        $('ul.depth_2').stop().slideUp();
    });


});
