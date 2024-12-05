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

const list = [20,45,345,566,34,2,1,6,7,34,67]

const newList = list.filter(number => {
    if(number > 100 ) return true
    else return false
})

const newlist2 = list.filter(number =>  number > 100 ) // pode fazer assim tambem

const newlist3 = list.filter(number => {
    if(number < 100 && number % 2 === 0){
        return true
    }else {
        return false
    }
})

const companies = [
    {name:'samsung',marketValue: 50,CEO:'Kim hyum suk',foundedOn:1938},
    {name:'Microsoft',marketValue: 415,CEO:'Satya Nadella',foundedOn:1975},
    {name:'Intel',marketValue: 117,CEO:'Brian Krzanich',foundedOn:1968},
    {name:'Facebook',marketValue:383,CEO:'Mark zuckerberg',foundedOn:2004},
    {name:'Spotify',marketValue:30,CEO:'Daniel ek',foundedOn:2006},
    {name:'Apple',marketValue:845,CEO:'Tim cook',foundedOn:1976},
]

const newCompany = companies.filter(company => {
    if(company.marketValue < 200 && company.foundedOn > 1990) return true 
    else return false 
})

console.log(newCompany)