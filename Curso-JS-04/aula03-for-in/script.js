// Estrutura de loop for in,

const users = {Name:'jonhy',Age:'36',Phone:'(13) 99793-6353',Street:'Leonor da silva quadros'}

for (const key in users) {
    console.log(`${key}:${users[key]}`)
    
}
console.log(users.Name)