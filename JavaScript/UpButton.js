//Function for button up windows

$(document).ready(function(){
    $('.up').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 500);
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.up').slideDown(300);
        }
        else{
            $('.up').slideUp(300);
        }
    });
});