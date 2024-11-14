import {games} from './products.js'



const btnShowAll = document.querySelector('.show-all');
const list = document.querySelector('ul');
const btnMapAll = document.querySelector('.map-all')
const btnReduceAll = document.querySelector('.sum-all')
const btnFilterAll = document.querySelector('.filter-all')



function currencyFormat(value){
    const newValue = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    return newValue
}

function showAll(productArray){
    let myLi = ''
    productArray.forEach(product => {
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
    const newPrices = games.map((product) => ({
        ...product,
        price:product.price * 0.9
    }))
    showAll(newPrices)
}

function sumAll(){
    const totalValue = games.reduce((acc,curr) => acc + curr.price,0)
    list.innerHTML = `<li>O valor total fica ${currencyFormat(totalValue)}.`
}

function filterAll(){
    const justHorror = games.filter(product => product.genero === 'Survivor horror')
    showAll(justHorror)
    
    
}

btnShowAll.addEventListener('click',() => showAll(games))
btnMapAll.addEventListener('click',mapAll)
btnReduceAll.addEventListener('click',sumAll)
btnFilterAll.addEventListener('click',filterAll)
