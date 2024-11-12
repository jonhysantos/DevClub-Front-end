import {games} from './products.js'

const btnShowAll = document.querySelector('.show-all');
const list = document.querySelector('ul');
const btnMapAllItens = document.querySelector('.map-all')
const btnSumAll = document.querySelector('.sum-all');
const btnFilterAll = document.querySelector('.filter-all');

function currencyFormat(value){
    const newValue = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    return newValue
}

function showAll(arrayProduct){
    let myLi = ''
    arrayProduct.forEach(product => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">${currencyFormat(product.price)}</p>
        </li>
            
        `
    })
    list.innerHTML = myLi
}

function mapAllItens(){
    const newPrice = games.map((product) => ({
        ...product,
        price:product.price * 0.9
    }))
    showAll(newPrice)
}

function sumAll(){
    const totalValue = games.reduce((acc,value) => acc + value.price,0)
    list.innerHTML = `
    <li>
        <p>O valor total do itens é ${currencyFormat(totalValue)}
    </li>
    `
}

function filterAll(){
    const filterjustHorror = games.filter(product => product.genero === 'Survivor horror')
    showAll(filterjustHorror)
}




btnShowAll.addEventListener('click',() => showAll(games))
btnMapAllItens.addEventListener('click',mapAllItens)
btnSumAll.addEventListener('click',sumAll)
btnFilterAll.addEventListener('click',filterAll)


