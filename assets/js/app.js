// $('#click').click(function(){
//     alert('clicked');
// })

$(document).ready(function(){
    // $('.banner-wrap').slick({
    //     // slidesToShow: 1,
    //     // slidesToScroll: 1,
    //     // arrows: true,
    //     // prevArrow:'<button type="button" class="slick-prev"><-</button>',
    //     // nextArrow:'<button type="button" class="slick-next">-></button>',
        
    // });

    $('.carousel-1').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev"><-</button>',
        nextArrow:'<button type="button" class="slick-next">-></button>',
        // fade: false,
    });
  
  });

