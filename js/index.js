// Index.js

const gap = 600;

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


    // bookclub_animation

    var winTop = $(window).scrollTop();
    //    console.log(winTop);

    var bookclub_Offset = $('.bookclub').offset().top - 400;
    //    console.log('bookclub offset: ' + bookclub_Offset); 

    if (winTop > bookclub_Offset) {

        $('.bookclub_wrap>a').addClass('on');
    } else {
        $('.bookclub_wrap>a').removeClass('on');
    }


    // recommend Scroll event

    var recommend_offset = $('.recommend').offset().top;

    if (winTop > recommend_offset - gap) {

        $('.ico1').css({
            opacity: "1",
            transition: "all .3s"
        });

        $('.ico2').css({

            opacity: "1",
            transition: "all .6s"

        });

        $('.ico3').css({

            opacity: "1",
            transition: "all .9s"

        });

        $('.ico4').css({

            opacity: "1",
            transition: "all 1.2s"

        });

    }

    // curriculum scroll event

    var curr1_offset = $('.curr1').offset().top;
    var curr2_offset = $('.curr2').offset().top;
    var curr3_offset = $('.curr3').offset().top;
    var curr4_offset = $('.curr4').offset().top;

    if (winTop > curr1_offset - gap) {

        $('.curr1 .curr_title').css({

            opacity: "1",
            transition: "all .5s"

        });

        $('.curr1 .curr_books a:nth-child(1)').css({
            opacity: "1",
            transition: "all .5s"

        });

        $('.curr1 .curr_books a:nth-child(2)').css({
            opacity: "1",
            transition: "all 1s"

        });

        $('.curr1 .curr_books a:nth-child(3)').css({
            opacity: "1",
            transition: "all 1.5s"

        });

    }

    if (winTop > curr2_offset - gap) {

        $('.curr2 .curr_title').css({

            opacity: "1",
            transition: "all .5s"

        });

        $('.curr2 .curr_books a:nth-child(1)').css({
            opacity: "1",
            transition: "all 1.5s"

        });

        $('.curr2 .curr_books a:nth-child(2)').css({
            opacity: "1",
            transition: "all 1s"

        });

        $('.curr2 .curr_books a:nth-child(3)').css({
            opacity: "1",
            transition: "all .5s"

        });



    }

    if (winTop > curr3_offset - gap) {

        $('.curr3 .curr_title').css({

            opacity: "1",
            transition: "all .5s"

        });

        $('.curr3 .curr_books a:nth-child(1)').css({
            opacity: "1",
            transition: "all .5s"

        });

        $('.curr3 .curr_books a:nth-child(2)').css({
            opacity: "1",
            transition: "all 1s"

        });

        $('.curr3 .curr_books a:nth-child(3)').css({
            opacity: "1",
            transition: "all 1.5s"

        });



    }

    if (winTop > curr4_offset - gap) {

        $('.curr4 .curr_title').css({

            opacity: "1",
            transition: "all .5s"

        });

        $('.curr4 .curr_books a:nth-child(1)').css({
            opacity: "1",
            transition: "all 1.5s"

        });

        $('.curr4 .curr_books a:nth-child(2)').css({
            opacity: "1",
            transition: "all 1s"

        });

        $('.curr4 .curr_books a:nth-child(3)').css({
            opacity: "1",
            transition: "all .5s"

        });



    }


}); // jQuery scroll_event

$(document).ready(function () {

    // Navigation Menu

    /*$('.depth_1>li').mouseenter(function () {
        $(this).children('ul.depth_2').slideDown();
    });


    $('.depth_1>li').mouseleave(function () {
        $('ul.depth_2').stop().slideUp();
    });*/

    
    // Navigation Menu2
    $('.depth_1>li').mouseenter(function(){
        
        //이전에 나왔던 서브메뉴 초기화
        $('ul.depth_2').hide();
        
        $('header').css('height','140px');
        $(this).children('ul.depth_2').stop().slideDown();
    });
    
   $('nav').mouseleave(function(){
       $('header').css('height','80px');
       $('ul.depth_2').stop().slideUp();
   });
    
    
    
    

    // main_img

    var autocall;

    autocall = setInterval(main_slide, 8000);

    function main_slide() {

        $('.main_gallery li').fadeOut(1000);

        $('.main_gallery li').first().toggleClass('active');
        $('.main_gallery li').last().toggleClass('active');


        $('.main_gallery li.active').fadeIn(1000);

        var idx = $('.main_gallery .active').index();

        //        console.log('index num' + idx);

        $('.btngrp li').eq(idx).addClass('active').siblings().removeClass('active');


    } // main_slide autoplay


    // 메인슬라이더 블릿버튼 
    $('.btngrp li').click(function () {
        $('.btngrp li').removeClass('active');
        $(this).addClass('active');
        var main_btn = $(this).index();
        $('.main_gallery li').eq(main_btn).siblings().fadeOut(1000);
        $('.main_gallery li').removeClass('active');
        $('.main_gallery li').eq(main_btn).addClass('active');
        $('.main_gallery li.active').fadeIn(1000);
    });

    // 메인슬라이드 마우스엔터/리브

    $('.main_gallery, .btngrp li').mouseenter(function () {
        clearInterval(autocall);
        console.log('activate');
    });


    $('.main_gallery, .btngrp li').mouseleave(function () {
        autocall = setInterval(main_slide, 8000);
        console.log('activate2');
    });


    // 하루고전 클릭 이벤트

    var pageNum = 1;
    var firstDay = 0
    const totpage = 5;

    // 초기 세팅

    $('.days_wrap .day').slice(6).css({
        display: "none"
    });

    // 페이지 넘기기 함수 go()

    function go() {
        //        console.log(pageNum);
        $('.days_wrap .day').hide();

        firstDay = 6 * (pageNum - 1);

        $('.days_wrap .day').eq(firstDay).fadeIn(300);
        $('.days_wrap .day').eq(firstDay + 1).fadeIn(600);
        $('.days_wrap .day').eq(firstDay + 2).fadeIn(900);
        $('.days_wrap .day').eq(firstDay + 3).fadeIn(1200);
        $('.days_wrap .day').eq(firstDay + 4).fadeIn(1500);
        $('.days_wrap .day').eq(firstDay + 5).fadeIn(1800);

        $('.days_pager li').eq(pageNum - 1).addClass('on').siblings().removeClass('on');
    }

    $('#prev').click(function (e) {
        e.preventDefault();
        if (pageNum === 1) return false;
        pageNum--;
        go();
    });

    $('#next').click(function (e) {
        e.preventDefault();
        if (pageNum === totpage) return false;
        pageNum++;
        go();

    });

    $('.days_pager li').click(function () {

        pageNum = $(this).index() + 1;
        //        console.log(pageNum);
        go();

    }); // pager_click event


}); // jQuery
