/*

    classes
 */

// const person = {
//    name:'jonhy',
//    age:36,
//    talk:function(){
//        console.log(`Hello,my name is ${this.name}`)
//    }

//}
class Person {
    constructor(name, age) {
        console.log(`hello,i'm ${name}`)
        this.name = name
        this.age = age
    }

    talk(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const newPerson = new Person("Jonhy",36)
const newPerson2 = new Person("Aninha",10)
const newPerson3 = new Person("Flávia",25)
const newPerson4 = new Person("Cecília",22)
newPerson.talk()
newPerson2.talk()
newPerson3.talk()
newPerson4.talk()


