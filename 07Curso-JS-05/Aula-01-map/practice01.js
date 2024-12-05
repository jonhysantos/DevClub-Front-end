



const list = [
    {Name:'Priscila',vip: false},
    {Name:'Jonhy',vip: true},
    {Name:'Aninha',vip:true},
    {Name:'Cecilia',vip:false},
    {Name:'Rúbia',vip:false}
]



const vipOrNot = list.map (user => {
    const newUser = {
        Name:user.Name,
        BraceletColor:user.vip ? 'Black' : 'Red'

    }
    return newUser
})



const students = [
    {Name:'Jonhy',note: 8},
    {Name:'Priscila',note:4},
    {Name:'Aninha',note:10},
    {Name:'Amanda',note:6},
    {Name:'Rúbia',note:4},
    {Name:'Cecilia',note:4},
]

const testResult = students.map(user => {
    return {
        Name:user.Name,
        test:user.note  >= 5 ? 'Approved' : 'Failed'
    }
})

console.log(students);
console.log(testResult);