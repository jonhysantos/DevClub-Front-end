




const list = [
    {Name:'Aninha',vip: true},
    {Name:'Jonhy',vip: true},
    {Name:'Priscila,',vip: false},
    {Name:'Rúbia',vip: false},
    {Name:'Cecíclia',vip: false},
    {Name:'Elaine',vip: true}
]

const newlist = list.map( user => {
    const newUser = {
        Name:user.Name,
        BraceletColor: user.vip ? 'black' : 'green'
    }
    return newUser
})

console.log(newlist)

const students = [
    {Name:'Jonhy',testGrade: 7},
    {Name:'Aninha',testGrade: 10},
    {Name:'Priscila',testGrade: 5},
    {Name:'Rúbia',testGrade: 1},
    {Name:'Cecília',testGrade: 8},
    {Name:'Elaine',testGrade: 9}
]

const newlistStudents = students.map (student => {
     return {
        Name:student.Name,
        Test:student.testGrade >= 5 ? 'approved' : 'failed',
    }
    
})

console.log(newlistStudents)