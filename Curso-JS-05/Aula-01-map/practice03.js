const list = [
    {name:'jonhy',age:'36',vip:true},
    {name:'Priscila',age:'29',vip:false},
    {name:'Aninha',age:'10',vip:true},
    {name:'Cecilia',age:'22',vip:true},
    {name:'Daiane',age:'37',vip:false}
]

const vipOrNot = list.map(user => {
    const newUser = {
        name:user.name,
        age:user.age,
        braceletColor:user.vip ? 'Black' : 'Blue'
    }
    return newUser
})

const students = [
    {name:'Priscila',test:4},
    {name:'Jonhy',test:8},
    {name:'Daiane',test:4},
    {name:'Cecilia',test:6},
    {name:'Alana',test:4},
]

const testResult = students.map(user => {
    return {
        name:user.name,
        test:user.test > 5 ? 'Approved' : 'Failed'
    }
})

console.log(students);
console.log(testResult);