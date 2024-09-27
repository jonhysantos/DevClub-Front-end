const convertButton = document.querySelector('.convert-btn');
const currencySelect = document.querySelector('.currency-select');

convertButton.addEventListener('click',convertValues);
function convertValues(){
    const inputCurrencyValues = document.querySelector('.input-currency').value
    const currencyValueConvert = document.querySelector('.cvc');
    const currencyValueConverted = document.querySelector('.currency-value');

    const dolarToday = 5.40
    const euroToday = 6.10

    if(currencySelect.value == 'dolar'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(inputCurrencyValues / dolarToday);
    }

    if(currencySelect.value == 'euro'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(inputCurrencyValues / euroToday);
    }

    currencyValueConvert.innerHTML = new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(inputCurrencyValues)

}


currencySelect.addEventListener('change',changeValues);

function changeValues(){
    const currencyName = document.getElementById('currency-name');
    const currencyImage = document.querySelector('.currency-img');

    if(currencySelect.value == 'dolar'){
        currencyName.innerHTML = 'Dolar americano'
        currencyImage.src = './assets/img/estados-unidos (1) 1.png'

    }

    if(currencySelect.value == 'euro'){
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/img/EUR-logo.png'
    }

    convertValues()
}