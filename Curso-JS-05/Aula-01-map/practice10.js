const list = [
    {name:'jonhy',age:36,address:'Av atlantica',vip:true},
    {name:'Priscila',age:29,address:'Av atlantica',vip:false},
    {name:'Aninha',age:10,address:'Av atlantica',vip:true},
    {name:'Cecilia',age:22,address:'Av atlantica',vip:false},
]

const listVip = list.map(item => {
    const result = {
        name:item.name,
        age:item.age,
        address:item.address,
        vip:item.vip ? "Black" : "Blue"
    }
    return result
})

console.log(listVip)

const students = [
    {name:'jonhy',age:36,address:'Av atlantica',test:7},
    {name:'Priscila',age:29,address:'Av atlantica',test:2},
    {name:'Aninha',age:10,address:'Av atlantica',test:10},
    {name:'Cecilia',age:22,address:'Av atlantica',test:4},
]

const testResult = students.map(item => {
    return {
        name:item.name,
        age:item.age,
        address:item.address,
        testR:item.test > 5 ? "Approved" : "Failed"
    }
})

console.log(testResult)