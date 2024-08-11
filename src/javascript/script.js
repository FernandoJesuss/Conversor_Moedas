const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor do Real
    const currencyValueConvrted = document.querySelector(".currency-value") // Outra moedas
    console.log(currencySelect.value)

    const dolarToday = 5.2;
    const euroToday = 6.2
    const libraToday = 7.34
    const bitcoinToday = 342.256
    const realToday = 1



    if (currencySelect.value == "dolar") {
        // Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConvrted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        // Se o select estiver selecionado o valor de euro, entre aqui
        currencyValueConvrted.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }


//estou aqui 19:20
if (currencySelect.value == "libra") {
    // Se o select estiver selecionado o valor de libra, entre aqui
    currencyValueConvrted.innerHTML = new Intl.NumberFormat("de-DE", {

        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue / libraToday)

}


if (currencySelect.value == "bitcoin") {
    // Se o select estiver selecionado o valor de bitcoin, entre aqui
    currencyValueConvrted.innerHTML = new Intl.NumberFormat("de-DE", {

        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday)

}

if (currencySelect.value == "real") {
    // Se o select estiver selecionado o valor de bitcoin, entre aqui
    currencyValueConvrted.innerHTML = new Intl.NumberFormat("de-DE", {

        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue / realToday)

}









    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}
function changeCurrency(){
const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector(".currency-img")


if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./src/img/dolar.png"
}


if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
     currencyImage.src = "./src/img/euro.png"
}

//aquitbmfuieu19:30
if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
     currencyImage.src = "./src/img/libra.png"
}

if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
     currencyImage.src = "./src/img/bitcoin.png"
}

if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real"
     currencyImage.src = "./src/img/real.png"
}






convertValues()

}
currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues);
