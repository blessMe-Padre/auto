export const initSum = () => {
    const sum = document.getElementById('sum');
    const inputs = document.querySelectorAll('.price');
    const currency = document.querySelectorAll('.currency li')
    console.log(currency)
    const currencyValues = []
    


    let totalSum = 0; 

    currency.forEach(item => {
      currencyValues.push(item.textContent)
      console.log(currencyValues)
    }) 
    
    const updateTotalSum = () => {
      totalSum = [...inputs].reduce((acc, input) => {
        const value = parseFloat(input.value.replace(/\s/g, '')) || 0;
        return acc + value;
      }, 0);

      sum.textContent = totalSum;
    };

    
    inputs.forEach(input => {
        input.addEventListener('input', updateTotalSum); 
        input.addEventListener('change', updateTotalSum); 
    });
}


