



const list = [
    {Name:'Jonhy',Age:'36',Address:'R.leonor da silva quadros',vip:true},
    {Name:'Aninha',Age:'10',Address:'R.leonor da silva quadros',vip:true},
    {Name:'Priscila',Age:'29',Address:'R.leonor da silva quadros',vip:false},
    {Name:'Cecília',Age:'22',Address:'R.leonor da silva quadros',vip:false},
    {Name:'Elaine',Age:'32',Address:'R.leonor da silva quadros',vip:true},
]

console.log(list)

const newlist = list.map(user => {
    const newUser = {
        Name:user.Name,
        braceletColor: user.vip ? 'black' : 'green',
        Age:user.Age
    }
    return newUser
})

console.log(newlist)

const students = [
    {Name:'Jonhy',testGrade: 8},
    {Name:'Aninha',testGrade: 10},
    {Name:'Marcela',testGrade: 4},
    {Name:'Priscila',testGrade: 4}
]

const result = students.map(user => {
    return {
        Name:user.Name,
        testGrade:user.testGrade >= 5 ? 'Approved' : 'Failed',
    }
})

console.log(result)