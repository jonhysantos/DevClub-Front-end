const games = [
    {name:'The last of us Remastered',price:50,version:'Playstation 5'},
    {name:'Forspoken',price:107,version:'playstation 5'},
    {name:'God of war 3 Remastered',price:49,version:'playstation 4'},
    {nmae:'Horizon zero down',price:50,version:'playstation 4'},
    {name:'Sillent hill 2 Remake',price:250,version:'Playstation 5'},
]

const filterGames = games.filter(product => product.price < 100,0)
console.log(filterGames)