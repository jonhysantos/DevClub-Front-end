const product = [
    {jogo:'The last of us',price:250,version:'Playstation 5'},
    {jogo:'Forspoken',price:107,version:'playstation 5'},
    {jogo:'Resident evil Village',price:93,version:'playstation 5'},
]


const cart = product.reduce((acc,curr) => {
    const total = curr.price + acc 
    return total
},0)

console.log(cart);

const fruit = [
    {fruit:'Apple',pricePerKg:2.50,costumerGetKg:3},
    {fruit:'Per',pricePerKg:2.75,costumerGetKg:2},
    {fruit:'Orange',pricePerKg:2,costumerGetKg:1},
]

const cartTotal = fruit.reduce((acc,curr) => {
    const result = curr.pricePerKg * curr.costumerGetKg
    return result + acc
},0)

console.log(cartTotal);