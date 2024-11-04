    // Adicionar 10% de valor de mercado as todas as companias -> MAP
    // Filtrar somente as companias fundada abaixo de 1990 -> FILTER
    // Somar o valor de mercado das restantes -> REDUCE
/* 
 const games = [
    {name:'The last of us',genero:'horror',price:50},
    {name:'God of war 3',genero:'Aventura',price:49},
    {name:'The evill within',genero:'horror',price:27},
    {name:'Sillent hill 2 remake',genero:'horror',price:250},
    {name:'Kena',genero:'aventura',price:100},
    {name:'Allan wake',genero:'horror',price:350},
]

const add10PercentDescount = games.map(game => {
    const result = {
        name:game.name,
        genero:game.genero,
        price:game.price = game.price - (10 / 100) * game.price
    }
    return result
    
    // const desconto = (10 / 100) * game.price
    // const pricefinal = game.price - desconto
    // return pricefinal
    

}).filter(horror => {
    return horror.price < 100 && horror.genero === 'horror'
})

console.log(games);
console.log(add10PercentDescount);

*/

const games = [
    {name:'The last of us',genero:'horror',price:50},
    {name:'God of war 3',genero:'Aventura',price:49},
    {name:'The evill within',genero:'horror',price:27},
    {name:'Sillent hill 2 remake',genero:'horror',price:250},
    {name:'Kena',genero:'aventura',price:100},
    {name:'Allan wake',genero:'horror',price:350},
]

const add10Percent = (game => {
    const add = {
        name:game.name,
        genero:game.genero,
        price:game.price = game.price - (10 /100) * game.price
    }
    return add
})

const filterPriceAndGenero = (game => game.genero === 'horror' && game.price < 100)

const reducePriceFinal = ((acc,valueActual) => valueActual.price + acc);

const gamesOnPriceHorror = games.map(add10Percent)
    .filter(filterPriceAndGenero)
    .reduce(reducePriceFinal,0)

console.log(gamesOnPriceHorror)





