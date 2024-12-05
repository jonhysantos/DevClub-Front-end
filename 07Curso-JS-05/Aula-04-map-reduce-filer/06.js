const games = [
    {name:'The last of us',genero:'horror',price:50},
    {name:'God of war 3',genero:'Aventura',price:49},
    {name:'The evill within',genero:'horror',price:27},
    {name:'Sillent hill 2 remake',genero:'horror',price:250},
    {name:'Kena',genero:'aventura',price:100},
    {name:'Allan wake',genero:'horror',price:350},
]

// Aplicar 10% de desconto em todos os jogos
const getDescount = (item => {
    return {
        name:item.name,
        genero:item.genero,
        price:item.price = item.price - (10/100) * item.price
    }
})

// Filtrar apenas jogos de survivor horror e abaixo de 100 reais
const filterGames = (item => item.genero === 'horror' && item.price < 100)
// Mostrar o valor total de jogos abaixo de 100
const reduceGames = ((acc,item) => item.price + acc )
// Aplicar map,filter e reduce no novo array.
const mapGames = games.map(getDescount).filter(filterGames).reduce(reduceGames,0)

console.log(mapGames)