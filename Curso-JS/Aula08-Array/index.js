// Array = vero \ matris


const users = [
    {name:'Jonhy',
        age:36,
        conjuge:"Priscila",
    },
    {
        name:'Priscila',
        age:28,
        conjuge:"Jonhy",
    }
]

console.log(users[1]);
console.log(users[2]);
users[0].age = 25 // alterada a idade do usuário.
console.log(users) 
