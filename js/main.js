import { initNav } from "./module/nav.js";
import { initSlider } from "./module/sliders.js";
import { initCurrentYear } from "./module/current-year.js";
import { initScrollToTop } from "./module/scroll-to-top.js";
import { initScroll } from "./module/scroll.js";
import { initJapanSlider } from "./module/japan-slider.js";
import { initKoreaSlider } from "./module/korea-slider.js";
import { initStockSlider } from "./module/stock-slider.js";

window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initNav();
    initSlider();
    initCurrentYear();
    initScrollToTop();
    initScroll();
    baguetteBox.run('.gallery-wrapper');
    initJapanSlider();
    initKoreaSlider();
    initStockSlider();

    // DOMContentLoaded
});
