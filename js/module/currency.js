export const initCurrency = () => {
    const API_URL = 'https://www.cbr-xml-daily.ru/daily_json.js';

    async function fetchCurrency() {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            if(!response.ok) {
                throw new Error('Ошибка получения курса JPY к RUB')
            } else {

                const JPYValue = data.Valute.JPY.Value.toFixed(2);
                const USDValue = data.Valute.USD.Value.toFixed(2);
                const EURValue = data.Valute.EUR.Value.toFixed(2);


                const jpyItemList = document.querySelector('.exchange-rate-jpy')
                jpyItemList.textContent = `${JPYValue}`
                const item = jpyItemList.textContent / 100;
                console.log(item)
                

                const usdItemList = document.querySelector('.exchange-rate-usd')
                usdItemList.textContent = `${USDValue}`


                const eurItemList = document.querySelector('.exchange-rate-eur')
                eurItemList.textContent = `${EURValue}`


                
            }

        } catch (error) {
            console.error('Произошла ошибка:', error)
        }
        

      }

      fetchCurrency();
}