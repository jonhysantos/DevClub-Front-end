const cart = [
    {product:'creatina',price:80},
    {product:'whey',price:100},
    {product:'pasta de amendoin',price:25},
    {product:'glutamina',price:60},
]

const cartTotal = cart.reduce((acumulator,valueActual) => {
    const total = acumulator + valueActual.price
    return total
},0)

console.log(cartTotal);