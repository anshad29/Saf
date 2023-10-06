// $('#click').click(function(){
//     alert('clicked');
// })

$(document).ready(function(){
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // prevArrow:'<button type="button" class="slick-prev"><</button>',
        // nextArrow:'<button type="button" class="slick-next">></button>',
        prevArrow:$('.slick__prev'),
        nextArrow:$('.slick__next'),
        
    });

    $('#cuisine-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        // prevArrow:'<button type="button" class="slick-prev"><</button>',
        // nextArrow:'<button type="button" class="slick-next">></button>',
        prevArrow:$('#cuisine__prev'),
        nextArrow:$('#cuisine__next'),
        
        
        
    });

    $('.carousel-1').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        arrows: true,
        prevArrow:`<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
      </svg></button>`,
        nextArrow:`<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
      </svg></button>`,
        // prevArrow:$('#carousel__prev1'),
        // nextArrow:$('#carousel__next1'),
    });

    $('.category-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        // prevArrow:'<button type="button" class="slick-prev"><</button>',
        // nextArrow:'<button type="button" class="slick-next">></button>',
        prevArrow:$('#cat__prev'),
        nextArrow:$('#cat__next'),
        
    });
  
  });

