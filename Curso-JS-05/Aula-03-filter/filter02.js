/*
    FILTER
    -Cria um novo array a partir do array percorrido (array original)
    -Cria um novo array apenas com os elementos filtrados
    -Aceita 3 parâmetros
        -item do array
        -index
        -array completo
        return true item atual passa para o novo array
        return false item atual NÂO passa pra o novo array

*/

const games = [
    {name:'The last of us Remastered',price:50,version:'Playstation 5'},
    {name:'Forspoken',price:107,version:'playstation 5'},
    {name:'God of war 3 Remastered',price:49,version:'playstation 4'},
    {nmae:'Horizon zero down',price:50,version:'playstation 4'},
    {name:'Sillent hill 2 Remake',price:250,version:'Playstation 5'},
]

const getDescount = games.filter(item => {
    return item.price < 100
})

console.log(games);
console.log(getDescount);