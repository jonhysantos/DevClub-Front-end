



const list = [
    {Name:'Jonhy',vip:true},
    {Name:'Aninha',vip:true},
    {Name:'Priscila',vip:false},
    {Name:'Rúbia',vip:false},
    {Name:'Elaine',vip:true}
]

const vipOrNot = list.map(user =>{
    const newUser = {
        Name:user.Name,
        braceletColor: user.vip ? 'Black' : 'Red'
    }
    return newUser
})

const students = [
    {Name:'Jonhy',note:8},
    {Name:'Aninha',note:10},
    {Name:'Priscila',note:4},
    {Name:'Elaine',note:6},
    {Name:'Rúbia',note:4},
]

const approvedOrFailed = students.map(user =>{
    return {
        Name:user.Name,
        test:user.note >= 5 ? 'Approved' : 'Failed'
    }

})

console.log(approvedOrFailed)