$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('#myBtn').fadeIn();
        } else {
            $('#myBtn').fadeOut();
        }
    });
    $('#myBtn').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});