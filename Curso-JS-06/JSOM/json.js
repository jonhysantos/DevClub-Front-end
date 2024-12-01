/*
JSON - JavaScript Object Notation

    - Padrão de troca e armazenamento de informações
    - Padrão lógica simples
    - Leve para ser enviado e recebido
    - Simples e fácil de entender
    - Derivado do JavaScript
    - Utiliza o formato chave / valor


*/

const user = {
    name:"Jonhy",
    Age:36,
    children: null,
    hobbies: ["Academia","filmes","Jogar"],
    married:false,
    company: {
        jonhysentertainment:{
            funded:2024,
            colaborations: 1
        }
    }
}

console.log(user)

const userJason = JSON.stringify(user)
console.log(userJason)
const userJasonToJs = JSON.parse(userJason)
console.log(userJasonToJs)