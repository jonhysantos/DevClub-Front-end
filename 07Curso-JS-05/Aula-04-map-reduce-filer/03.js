const games = [
    {name:'The last of us',genero:'horror',price:50},
    {name:'God of war 3',genero:'Aventura',price:49},
    {name:'The evill within',genero:'horror',price:27},
    {name:'Sillent hill 2 remake',genero:'horror',price:250},
    {name:'Kena',genero:'aventura',price:100},
    {name:'Allan wake',genero:'horror',price:350},
]

const addDescount = (game => {
        game.price = game.price + (game.price * 5)
    return game
})

const filterGames = (game => game.genero === 'horror' && game.price < 100)

const reducePriceFinal = ((acc,valueActual) => valueActual.price + acc)

const gamesGetDescount = games.map(addDescount)
    .filter(filterGames)
    .reduce(reducePriceFinal,0)

console.log(gamesGetDescount)
