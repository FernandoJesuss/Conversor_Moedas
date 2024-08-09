const convertButton = document.querySelector(".convert-button");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor do Real

    const currencyValueConvrted = document.querySelector(".currency-value") // Outra moedas



    const dolarToday = 5.5;

    const convertedValue = inputCurrencyValue / dolarToday;

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    
     currencyValueConvrted.innerHTML = convertedValue

   
}

  convertButton.addEventListener("click", convertValues);
