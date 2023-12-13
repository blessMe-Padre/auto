import { initNav } from "./module/nav.js";
import { initSlider } from "./module/sliders.js";
import { initCurrentYear } from "./module/current-year.js";
import { initScrollToTop } from "./module/scroll-to-top.js";
import { initScroll } from "./module/scroll.js";
import { initJapanSlider } from "./module/japan-slider.js";
import { initKoreaSlider } from "./module/korea-slider.js";
import { initStockSlider } from "./module/stock-slider.js";
import { initReviewsSlider } from "./module/reviews-slider.js";
import { initMainSlider } from "./module/main-slider.js";
import { initCounterAnimation } from "./module/counter-animation.js";
import { initObserver } from "./module/observer.js";
import { initObserverAbout } from "./module/observerAbout.js";
import { initPopup } from "./module/popup.js";
import { initFinishedSlider } from "./module/finished-slider.js";
import { initStickyHeader } from "./module/sticky-header.js";
import { initSum } from "./module/calculator.js";
import { initCurrency } from "./module/currency.js";
import { initCardItemSlider } from "./module/card-item-slider.js";


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
    initReviewsSlider();
    initCounterAnimation();
    initMainSlider();
    initObserver();
    initObserverAbout();
    initPopup();
    initFinishedSlider();
    initStickyHeader();
    initSum();
    initCurrency();
    initCardItemSlider();
    

});
