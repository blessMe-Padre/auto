export const initCounterAnimation = () => {
    const counterList = document.querySelector('.counter-list');

    const counterAnimation = (el, initialNum, finalNum) => {
        if (Number.isInteger(finalNum)) {
            let interval = setInterval(function () {
                el.innerHTML = initialNum;
                (initialNum >= finalNum) ? clearInterval(interval) : '';
                initialNum++;
            }, 50);
        }
        else {
            let intInitialNum = Math.floor(initialNum);
            let intFinalNum = Math.floor(finalNum);
            let interval = setInterval(function () {
                el.innerHTML = intInitialNum;
                if (intInitialNum >= intFinalNum) {
                    clearInterval(interval);
                    el.innerHTML = `${finalNum.toString().replace('.', ',')}`;
                }
                intInitialNum++;
            }, 50);
        }
    }

    if (counterList) {
        counterAnimation(document.querySelector('.counter-years'), 0, 10);
        counterAnimation(document.querySelector('.counter-partners'), 0, 100);
        counterAnimation(document.querySelector('.counter-place'), 0, 3);
    }
}