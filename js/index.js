$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if(scroll >= 100) {
        $(".navbar").addClass("header-dark");
    } else {
        $(".navbar").removeClass("header-dark");
    }
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: false,
    margin:-20,
    loop: true,
    nav:true,
    navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'
  ],
    responsive: {
      0: {
        items: 1,
        nav:false,
      },
  
      600: {
        items: 1.5,
        nav:false,
      },
      768: {
        items: 1.5,
      },
      1140: {
        items:2.2,
      },
    }

  });
});