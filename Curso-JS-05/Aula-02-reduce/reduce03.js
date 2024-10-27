const listGrowth = [
    {product:'Creatina',price:80},
    {product:'Pasta de amendoin',price:25},
    {product:'whey',price:100},
]

const finalPrice = listGrowth.reduce((acumulator,valueActual) => {
    return acumulator + valueActual.price
}, 0)


const listFruit = [
    {fruit:'tomato',pricePerKg:4.5,kg: 1.5},
    {fruit:'per',pricePerKg:1.5,kg: 1},
    {fruit:'stranberry',pricePerKg:2,kg: 1},
]

const finalPriceFruit = listFruit.reduce((acumulator,valueActual) => {
    const result = valueActual.pricePerKg * valueActual.kg 
    return result + acumulator
}, 0)

console.log(finalPriceFruit)