const games = [
    {name:'The last of us',genero:'horror',price:50},
    {name:'God of war 3',genero:'Aventura',price:49},
    {name:'The evill within',genero:'horror',price:27},
    {name:'Sillent hill 2 remake',genero:'horror',price:250},
    {name:'Kena',genero:'aventura',price:100},
    {name:'Allan wake',genero:'horror',price:350},
]

const getDecount = (product => {
    return  {
        name:product.name,
        genero:product.genero,
        price:product.price = product.price - (10/100) * product.price
    }
    
})

const filterGames = (product => product.genero === 'horror' && product.price < 100)
const reduceGames = ((acc,curr) => acc + curr.price)

const applicationGames = games.map(getDecount).filter(filterGames).reduce(reduceGames,0)

console.log(applicationGames)