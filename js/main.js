(function ($) {
  "use strict";

  // sticky-header
  $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('header').addClass('neel');
    }
    else {
      $('header').removeClass('neel');
    }

  })

  // category-active-item

  $('.ctg-btn').on('click', function () {
    $(".ctg-btn").removeClass('ctg-active');
    $(this).addClass('ctg-active');
  });

  //love-react
  $('.love-react').on('click', function () {
    $(this).toggleClass('active-react')
  });

  //play-listing-slider
  
  $('.sliding-box').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1288,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
  });
  
  document.querySelector('.sliding-box button.slick-prev.slick-arrow').innerText = '';
  document.querySelector('.sliding-box button.slick-next.slick-arrow').innerText = '';
  

  $('.sliding-box button.slick-next').addClass('active-slider-arrow');

  $('.sliding-box button').on('click', function () {
    $('.sliding-box button').removeClass('active-slider-arrow');
    $(this).addClass('active-slider-arrow');
  })

  
  //happening-cities
  $('.multiple-items').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    rows: 2,
    responsive: [
      {
        breakpoint: 1288,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      
    ]
  });
  document.querySelector('.happening-item-wrap button.slick-prev').innerText = '<';
  document.querySelector('.happening-item-wrap button.slick-next').innerText = '>';

  // counter-section 
  $(document).ready(function () {
    $(".count").counterUp({
      delay: 10,
      time: 1200
    });
  });

})(jQuery);
