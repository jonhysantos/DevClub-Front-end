const list = [
    {name:'Priscila',age:29,vip:false},
    {name:'Jonhy',age:36,vip:true},
    {name:'Aninha',age:10,vip:true},
    {name:'Iza',age:38,vip:false},
]

const vip = list.map(user => {
    const result = {
        name:user.name,
        age:user.age,
        braceletColor:user.vip ? 'Black' : 'Red'
    }
    return result
})

console.log(vip);