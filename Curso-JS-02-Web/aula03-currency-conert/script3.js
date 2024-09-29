const convertCurrency = document.querySelector('.convert-currency');
const currencySelect = document.querySelector('.currency-select');

convertCurrency.addEventListener('click',convertValues);
function convertValues(){
    const inputCurencyValue = document.querySelector('.input-currency').value
    const currencyValueConvert = document.querySelector('.cvc');
    const currencyValueConerted = document.querySelector('.currency-value');

    const dolarToday = 5.40
    const euroToday = 6.10
    if(currencySelect.value == 'dolar'){
        currencyValueConerted.innerHTML = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(inputCurencyValue / dolarToday)
    }

    if(currencySelect.value == 'euro'){
        currencyValueConerted.innerHTML = new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(inputCurencyValue / euroToday)
    }

    currencyValueConvert.innerHTML = new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(inputCurencyValue)
}

currencySelect.addEventListener('change',changeCurrency)
function changeCurrency(){
    const currencyName = document.getElementById('currency-name');
    const currencyImage = document.querySelector('.currency-img');

    if(currencySelect.value == 'dolar'){
        currencyName.innerHTML = 'Dolar americano'
        currencyImage.src = './assets/img/estados-unidos (1) 1.png '
    }

    if(currencySelect.value == 'euro'){
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/img/EUR-logo.png'
    }

    convertValues()
}