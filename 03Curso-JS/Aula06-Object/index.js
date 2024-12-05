// Object

const usuario = {
    name:'Jonhy',
    age:36,
    address:{
        street:'Av atlântica',
        CEP: 11442180,
        number:180,
        city: "Guarujá",
        State:"SP",
        Country: "Brasil"
    }
}

console.log(usuario);
console.log(usuario.age);
console.log(usuario.address.city);
console.log(usuario.address.Country);
usuario.address.number = 183
console.log(usuario);
