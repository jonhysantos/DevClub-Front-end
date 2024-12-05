const list = [
    {name:'Jonhy',age:'36',vip:true},
    {name:'Aninha',age:'10',vip:true},
    {name:'Priscila',age:'29',vip:false},
    {name:'Cecilia',age:'22',vip:true},
    {name:'Daiane',age:'38',vip:false},
]

const vipOrNot = list.map(user => {
    const userVipNot = {
        name:user.name,
        age:user.age,
        braceletColor:user.vip ? 'Black' : 'Red'
    }
    return userVipNot
})

const students = [
    {name:'Jonhy',age:'36',test:8},
    {name:'Aninha',age:'10',test:10},
    {name:'Priscila',age:'29',test:4},
    {name:'Cecilia',age:'22',test:6},
    {name:'Daiane',age:'38',test:4},
]

const testGrade = students.map(user => {
    return {
        name:user.name,
        age:user.age,
        resultTest:user.test >= 5 ? 'Approved' : 'Failed'
    }
})

console.log(testGrade);