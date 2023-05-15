$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if(scroll >= 100) {
        $(".navbar").addClass("header-dark");
    } else {
        $(".navbar").removeClass("header-dark");
    }
});