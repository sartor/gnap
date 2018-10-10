(function ($) {
 "use strict";
    
/*-----------------------------
	Menu Stick
---------------------------------*/
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 1){  
            $('.sticker').addClass("stick");
        }   
        else{
            $('.sticker').removeClass("stick");
        }
    });
    
/*----------------------------
    Toogle Search
------------------------------ */
    // Handle click on toggle search button
    $('.header-search').on('click', function() {
        $('.search').toggleClass('open');
        return false;
    });

})(jQuery); 