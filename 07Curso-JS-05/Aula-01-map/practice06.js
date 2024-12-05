const list = [
    {name:'jonhy',age:'36',vip:true},
    {name:'aninha',age:'10',vip:true},
    {name:'Priscila',age:'37',vip:true},
    {name:'Cecilia',age:'37',vip:false},
    {name:'iza',age:'37',vip:false},

]

const vipOrNot = list.map(user => {
    const vip = {
        name:user.name,
        age:user.age,
        braceletColor:user.vip ? 'black' : 'Red'
    }
    return vip
})

const students = [
    {name:'jonhy',age:'36',test:8},
    {name:'aninha',age:'10',test:10},
    {name:'Priscila',age:'37',test:4},
    {name:'Cecilia',age:'37',test:2},
    {name:'iza',age:'37',test:2},
]

const testResult = students.map(user => {
    return {
        name:user.name,
        age:user.age,
        result:user.test >= 5 ? 'Approved' : 'Failed'
    }
})

console.log(testResult)