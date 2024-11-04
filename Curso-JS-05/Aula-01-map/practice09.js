const list = [
    {name:'jonhy',age:36,address:'Av atlantica',vip:true},
    {name:'Priscila',age:29,address:'Av atlantica',vip:false},
    {name:'Aninha',age:10,address:'Av atlantica',vip:true},
    {name:'Cecilia',age:22,address:'Av atlantica',vip:false},
]

const result = list.map(user => {
    const vip = {
        name:user.name,
        age:user.age,
        address:user.address,
        braceletColor:user.vip ? 'Black' : 'Blue'
    }
    return vip
})

const students = [
    {name:'jonhy',age:36,address:'Av atlantica',test:7},
    {name:'Priscila',age:29,address:'Av atlantica',test:2},
    {name:'Aninha',age:10,address:'Av atlantica',test:10},
    {name:'Cecilia',age:22,address:'Av atlantica',test:4},
]

const resultTest = students.map(user => {
    return {
        name:user.name,
        age:user.age,
        address:user.address,
        test:user.test >= 5 ? 'Approved' : 'Failed'
    }
})

console.log(resultTest)