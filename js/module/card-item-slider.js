export const initCardItemSlider = function initSlider() {

  let swiper = new Swiper('.card__item-small', {
    
    autoplay: true,
    spaceBetween: 5,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true
  }); 
  let swiper2 = new Swiper('.card__item', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: swiper
    }
  }); 
}
