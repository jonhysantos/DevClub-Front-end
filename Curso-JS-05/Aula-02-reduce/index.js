/*
    REDUCE
    Retorn um valor (pode ser um novo array, um objeto, string, number, etc...)
    aceita 4 parâmetros 
    - acumulador
    - valor atual
    - index
    - array completo
*/

const list = [1,2,3,4,5,6,7]

const sum = list.reduce((acumulador,valorAtual) => {
    return acumulador + valorAtual
}, 0)

console.log(sum)

const companies = [
    {name:'samsung',marketValue: 50,CEO:'Kim hyum suk',foundedOn:1938},
    {name:'Microsoft',marketValue: 415,CEO:'Satya Nadella',foundedOn:1975},
    {name:'Intel',marketValue: 117,CEO:'Brian Krzanich',foundedOn:1968},
    {name:'Facebook',marketValue:383,CEO:'Mark zuckerberg',foundedOn:2004},
    {name:'Spotify',marketValue:30,CEO:'Daniel ek',foundedOn:2006},
    {name:'Apple',marketValue:845,CEO:'Tim cook',foundedOn:1976},
]

const finalValue = companies.reduce((acumulator,valueActual) => {
    return acumulator + valueActual.marketValue
}, 0)

const cart = [
    {productName:'Abóbora',valuePerKg: 5,kg: 1},
    {productName:'Pepino',valuePerKg: 3.55,kg: 1.3},
    {productName:'Limão',valuePerKg: 1.2, kg: 2},
    {productName:'Abacate',valuePerKg: 5.4, kg: 1.67},
    {productName:'Morango',valuePerKg: 11.9, kg: 3},
]

const priceFinal = cart.reduce((acumulator,valueActual) => {
    const result =  valueActual.valuePerKg * valueActual.kg
    return acumulator + result
}, 0)

console.log(priceFinal)