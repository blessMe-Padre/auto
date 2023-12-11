export const initMainSlider = () => {
    const itemSlider = function () {
        const item = document.querySelector('.main-item');
        console.log('Я тут')
        let swiper;
        if (item) {
            swiper = new Swiper(item, {
                // loop: true,
                autoplay: {
                    delay: 3000
                },
                effect: "fade",
                direction: 'vertical',
                autoHeight: true,

                spaceBetween: 15,
                slidesPerView: 1,
                equalHeight: true,

                // If we need pagination
                pagination: {
                  clickable: true,
                  el: `swiper-pagination`,
               }
    
            });
        }
    };

    itemSlider();
}