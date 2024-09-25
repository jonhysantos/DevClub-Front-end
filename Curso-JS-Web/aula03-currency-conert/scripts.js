const convertbutton = document.querySelector('.convert-btn');
const currencySelect = document.querySelector('.currency-select');

function convertValues(){
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueConvert = document.querySelector('.cvc')

    const currencyValueConverted = document.querySelector('.currency-value');


    const dolarToday = 5.2
    const euroToday = 6.2

    if (currencySelect.value == 'dolar'){
        // Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',}).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == 'euro') {
        // Se o select estiver selecionado o valor de euro entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR',}).format(inputCurrencyValue / euroToday)
    }

    currencyValueConvert.innerHTML = new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',}).format(inputCurrencyValue)
}

function changeCurrency(){
    const currencyName = document.getElementById('currency-name');
    const currencyImage = document.querySelector('.currency-img');

    if(currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dolar americano'
        currencyImage.src = './assets/img/estados-unidos (1) 1.png'
    }

    if(currencySelect.value == 'euro'){
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/img/EUR-logo.png'
    }

    convertValues()
}

currencySelect.addEventListener('change',changeCurrency);
convertbutton.addEventListener('click',convertValues);
