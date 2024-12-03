function multi(n1,n2){
    return n1 * n2;
}

function sum(n1,n2){
    return n1 +n2;
}

const person = {
    name:"jonhy",
    age:36,
    talk:function(){
        console.log('Hello,world')
    }
}

module.exports = {person,multi,sum} // global
// posso usar também o this
// ex: this.person = person
// ex: this.sum = sum


