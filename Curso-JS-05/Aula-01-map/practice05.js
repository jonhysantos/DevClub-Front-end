const list = [
    {name:'Jonhy',age:'36',vip:true},
    {name:'Priscila',age:'29',vip:true},
    {name:'Cecília',age:'22',vip:false},
    {name:'Aninha',age:'10',vip:true},
    {name:'Daiane',age:'38',vip:false},
]

const vipOrNot = list.map(user => {
    const vip = {
        name:user.name,
        age:user.age,
        braceletColor:user.vip ? 'Black' : 'Red'
    }
    return vip
})

const students = [
    {name:'Jonhy',age:'36',test:9},
    {name:'Priscila',age:'29',test:6},
    {name:'Cecília',age:'22',test:2},
    {name:'Aninha',age:'10',test:10},
    {name:'Daiane',age:'38',test:4},
]

const testGrade = students.map(user => {
    return {
        name:user.name,
        age:user.age,
        testGrade:user.test >= 5 ? 'Approved' : 'Failed'
    }
})

console.log(testGrade)

