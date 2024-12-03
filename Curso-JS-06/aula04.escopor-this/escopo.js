/*
    This

    -This em ingles significa: este,esta,isto...
    No JavaScript o this faz referências
    node => module.exports
    web => window

    Escopo:
        Global => quando começamos a escrever nossa aplicação.
        No contexto global, o this faz referência ao objeto global,
        que é o objeto window no navegador de internet ou a o objeto global no node.js.
    
    local:
        Local => por exemplo dentro de uma função.

 */

const name = "Jonhy" // escopo global

function myName(){
    const name = "jonhy" // Escopo local
}

console.log(global)
global.console.log('Olá')

const person = {
    name:"jonhy",
    age:36,
    talk:function(){
        console.log(this.name) // escopo local
    }
}

person.talk()