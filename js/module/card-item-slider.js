// export const initCardItemSlider = function initSlider() {
//   let mainSlider = new Swiper('.card__item', {
//     loop: true,
//     spaceBetween: 10,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev'
//     },
//   });

//   let thumbSlider = new Swiper('.card__item-small', {
//     loop:true,
//     slidesPerView: 5,
//     spaceBetween: 10,
//     // freeMode: true,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
//   });

//   // mainSlider.controller.control = thumbSlider;
//   // thumbSlider.controller.control = mainSlider;
// };

export const initSlider1 = function initSlider1() {
  // eslint-disable-next-line
  var swiper = new Swiper('.slider__thumb', {
    spaceBetween: 16,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true
  }); // eslint-disable-next-line

  var swiper2 = new Swiper('.slider__slider', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      // eslint-disable-next-line
      swiper: swiper
    }
  }); // eslint-disable-next-line

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