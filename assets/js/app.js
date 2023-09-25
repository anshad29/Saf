// $('#click').click(function(){
//     alert('clicked');
// })

$(document).ready(function(){
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev"><</button>',
        nextArrow:'<button type="button" class="slick-next">></button>',
        
    });

    $('#cuisine-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev"><</button>',
        nextArrow:'<button type="button" class="slick-next">></button>',
        
    });

    $('.carousel-1').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev"><</button>',
        nextArrow:'<button type="button" class="slick-next">></button>',
        // fade: false,
    });

    $('.category-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev"><</button>',
        nextArrow:'<button type="button" class="slick-next">></button>',
        
    });
  
  });

