const games = [
    {name:'The last of us',genero:'horror',price:50},
    {name:'God of war 3',genero:'Aventura',price:49},
    {name:'The evill within',genero:'horror',price:27},
    {name:'Sillent hill 2 remake',genero:'horror',price:250},
    {name:'Kena',genero:'aventura',price:100},
    {name:'Allan wake',genero:'horror',price:350},
]


const getDescount = (item => {
    return {
        name:item.name,
        genero:item.genero,
        price:item.price = item.price - (10/100) * item.price
    }
})

const filterGames = (item => item.genero === 'horror' && item.price < 100)
const reduceGames = ((acc,item) => item.price + acc )

const mapGames = games.map(getDescount).filter(filterGames).reduce(reduceGames,0)

console.log(mapGames)