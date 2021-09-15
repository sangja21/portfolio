// qna.js

$(document).ready(function(){
    
    $('.tab_menu li a').click(function(e){
        
        e.preventDefault();
        
        var idx = $(this).parent().index();
        $(this).parent().addClass('active').siblings().removeClass('active');
        
        console.log(idx);
        
        if(idx == 0) {
            $('.tab_wrap .tab_faq').addClass('active').siblings().removeClass('active');
            
        } else {
            $('.tab_wrap .tab_qna').addClass('active').siblings().removeClass('active');
        }
        
    }); // tab_menu_click_event
    
    $('.faq a').click(function(e){
        
        e.preventDefault();
        
        $(this).parent().find('.answer').fadeToggle(500);
        
    }); //faq a click_event
    
}); // jQuery