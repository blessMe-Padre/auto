export const initCardItemSlider = function initCardItemSlider() {
 
  var swiper = new Swiper('.slider__thumb', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    autoHeight: true,
    breakpoints: {
      320: {
        slidesPerView: 4,
        spaceBetween: 8
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 16
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 16
      },
      1920: {
        slidesPerView: 6,
        spaceBetween: 16
      }
    }
    
  }); 

  var swiper2 = new Swiper('.slider__slider', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {

      swiper: swiper
    }
  });

  var swiper3 = new Swiper('.recommendation', {
    spaceBetween: 16,
    slidesPerView: 2,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 8
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 16
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 16
      },
      1920: {
        slidesPerView: 6,
        spaceBetween: 16
      }
    }
  });
};