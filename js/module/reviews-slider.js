export const initReviewsSlider = () => {
    const itemSlider = function () {
        const item = document.querySelector('.review-item');
        let swiper;
        console.log('Подключился')
        if (item) {
            
            swiper = new Swiper(item, {
                loop: true,
                autoplay: {
                    delay: 3000
                },
                direction: 'horizontal',
                spaceBetween: 15,
                slidesPerView: 3,
                equalHeight: true,

                // If we need pagination
                navigation: {
                    nextEl: ".review-next",
                    prevEl: ".review-prev",
                },
                breakpoints: {
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 15
                    },
                    480: {
                      slidesPerView: 3,
                      spaceBetween: 15
                    },
                    767: {
                      slidesPerView: 3,
                      spaceBetween: 15
                    }
                  }
            });
        }
    };

    itemSlider();
}