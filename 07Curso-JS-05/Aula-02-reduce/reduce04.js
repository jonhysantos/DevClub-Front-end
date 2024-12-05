const store = [
    {fruit:'tomato',pricePerKg: 2,kg:1},
    {fruit:'Banana',pricePerKg:1,kg:3},
    {fruit:'apple',pricePerKg:2,kg:2},
    {fruit:'orange',pricePerKg:2,kg:3},
]

const cart = store.reduce((acumulator,valueActual) => {
    return acumulator + valueActual.pricePerKg * valueActual.kg
},0)

console.log(cart);