import {games} from './products.js'

const btnShowAll = document.querySelector('.show-all')
const list = document.querySelector('ul')
const btnMapAll = document.querySelector('.map-all')
const btnReduceAll = document.querySelector('.sum-all')
const btnFilterAll = document.querySelector('.filter-all')

function currencyFormat(value){
    const newValues = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    return newValues
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

function mapAll(){
    const newPrices = games.map((product => ({
        ...product,
        price:product.price * 0.9

    })))
    showAll(newPrices)
}

function reduceAll(){
    const totalValue = games.reduce((acc,curr) => acc + curr.price,0)
    list.innerHTML = `O total de todos os itens ${totalValue}`
}

function filterAll(){
    const justHorror = games.filter(product => product.genero === 'Survivor horror')
    showAll(justHorror)
}

btnShowAll.addEventListener('click',() => showAll(games))
btnMapAll.addEventListener('click',mapAll)
btnReduceAll.addEventListener('click',reduceAll)
btnFilterAll.addEventListener('click',filterAll)