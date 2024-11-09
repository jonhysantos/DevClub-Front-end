import { games } from "./products.js"


const buttonShowAll = document.querySelector('.show-all');
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all');

const list = document.querySelector('ul')

function formatCurrency(value){
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
            <p class="item-price">${formatCurrency(product.price)}</p>
            
            
        </li>
        
        `
    })
    list.innerHTML = myLi
}


function mapAllItens(){
    const newPrices = games.map((product) =>({
        ...product,
        price:product.price * 0.9
    }))
    showAll(newPrices)
    
}

function sumAll(){
    const totalValue = games.reduce((acc,curr) => acc + curr.price,0)
    list.innerHTML = `
    <li>
        <p>O valor total dos itens é  ${totalValue.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} já com o desconto de 10%</p>
    </li>
    
    `

}

function filterAll(){
    const filterjustHorror = games.filter(item => item.genero === 'Survivor horror')
    showAll(filterjustHorror)  
}


buttonShowAll.addEventListener('click',() => showAll(games))
buttonMapAll.addEventListener('click',mapAllItens)
buttonSumAll.addEventListener('click',sumAll)
buttonFilterAll.addEventListener('click',filterAll)
