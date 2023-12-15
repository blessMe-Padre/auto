export async function fetchCurrency() {
  const API_URL = 'https://www.cbr-xml-daily.ru/daily_json.js';
      try {
          const response = await fetch(API_URL);
          const data = await response.json();
          return data;

      } catch (error) {
          console.error('Произошла ошибка:', error)
          throw error;
      }
}


export const initSum = () => {
  fetchCurrency()
    .then(data => {

      const JPYValue = data.Valute.JPY.Value.toFixed(2);
      const USDValue = data.Valute.USD.Value.toFixed(2);
      const EURValue = data.Valute.EUR.Value.toFixed(2);

      const jpyItemList = document.querySelector('.exchange-rate-jpy');
      jpyItemList.textContent = `${JPYValue}`;
      const coefJPY = jpyItemList.textContent / 100;
                

      const usdItemList = document.querySelector('.exchange-rate-usd');
      usdItemList.textContent = `${USDValue}`;
      const coefUSD = usdItemList.textContent / 100;


      const eurItemList = document.querySelector('.exchange-rate-eur');
      eurItemList.textContent = `${EURValue}`;
      const coefEUR = parseFloat(eurItemList.textContent / 100);

      const sum = document.getElementById('sum');
      const inputs = document.querySelectorAll('.price');
      const inputsDollar = document.querySelectorAll('.dollar__price');

      const inputsСustoms = document.querySelector('.priceСustoms');
      let totalCustomsSum = 0;

      const partInputsСustoms = document.querySelectorAll('.partCustoms');
      partInputsСustoms.forEach(item => {
        totalCustomsSum = [...item].reduce((acc, input) => {
          const value = parseFloat(input.value.replace(/\s/g, '')) || 0
          return value + acc;
        }, 0)
        inputsСustoms.textContent = totalCustomsSum.toFixed(2)
      })

 

      // const inputsPayment = document.querySelector('.pricePayment');
      // const partInputsPayment = document.querySelectorAll('.partPayment');

      inputsDollar.forEach(input => {
        const value =  parseInt(input.value);
        const convertedValue = value * coefJPY;
        input.value = convertedValue.toFixed(2);
      });


    let totalSum = 0; 

    

  
    const updateTotalSum = () => {
      totalSum = [...inputs, ...inputsDollar, ...inputsСustoms].reduce((acc, input) => {
        const value = parseFloat(input.value.replace(/\s/g, '')) || 0;
        return value + acc;
      }, 0);

      sum.textContent = totalSum.toFixed(2);
    };

    
    inputs.forEach(input => {
        input.addEventListener('input', updateTotalSum); 
        input.addEventListener('change', updateTotalSum); 
    });



    })
      .catch(error => {
        console.error(
          "Произошла ошибка получения при получении данных",
        )
      })
  

}


