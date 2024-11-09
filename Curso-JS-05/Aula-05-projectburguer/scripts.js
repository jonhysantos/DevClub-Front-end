import { menuOptions } from './products.js'
const buttonMapAll = document.querySelector('.map-all')
const buttonShowAll = document.querySelector('.show-all')
const sumAll = document.querySelector('.sum-all')
const list = document.querySelector('ul')
const filterAll = document.querySelector('.filter-all')

function formatCurency(value){
    const newValue = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    return newValue
}

function showAll(productsArray){
    let myLi = '' 
    productsArray.forEach(product => {
       
    myLi += `
    <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">${formatCurency(product.price)}</p>
    </li>
    
    `
    
})
    list.innerHTML = myLi
}

function mapAllItens(){
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price:product.price * 0.9 // Aplicar 10% off
    })) 
    showAll(newPrices)
   
}

function sumAllItens(){
    const totalValue = menuOptions.reduce((acc,curr) => acc + curr.price,0)
    list.innerHTML = `
    <li>
        <p>O valor total do itens é  ${totalValue.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>
    </li>
    `
}

function filterAllItens(){
    const filterJustVegan = menuOptions.filter((product) => product.vegan)
    showAll(filterJustVegan)
}


sumAll.addEventListener('click',sumAllItens)
buttonShowAll.addEventListener('click',() => showAll(menuOptions))
buttonMapAll.addEventListener('click',mapAllItens)
filterAll.addEventListener('click',filterAllItens)