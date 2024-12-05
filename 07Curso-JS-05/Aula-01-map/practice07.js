const list = [
    {name:'Jonhy',age:'36',address:'av atlantica',vip:true},
    {name:'Priscila',age:'29',address:'Leonor da siva quadros',vip:false},
    {name:'Aninha',age:'10',address:'Leonor da silva quadros',vip:true},
    {name:'iza',age:'38',address:'Rua 12',vip:false},
]

const listVip = list.map(user => {
    const vip = {
        name:user.name,
        age:user.age,
        address:user.address,
        braceletColor:user.vip ? 'Black' : 'white'
    }
    return vip
})

const students = [
    {name:'Jonhy',age:'36',address:'av atlantica',test:8},
    {name:'Priscila',age:'29',address:'Leonor da siva quadros',test:2},
    {name:'Aninha',age:'10',address:'Leonor da silva quadros',test:10},
    {name:'iza',age:'38',address:'Rua 12',test:0},
]

const resultTest = students.map(user => {
    return {
        name:user.name,
        age:user.age,
        address:user.address,
        test:user.test >= 5 ? 'Aprroved' : 'Failed'
    }
})

console.log(resultTest);