/*
    forEach(item, index, array)
*/

const users = [
    {name:'Aninha',Contact:'(13) 990909090'},
    {name:'Priscila',Contact:'(13) 99898-9898'},
    {name:'Cecília',Contact:'(13) 98888-8888'},
    {name:'Elaine',Contact:'(13) 9 9669-9669'},
]

users.forEach((item,index,array) =>{
    console.log(item);
    console.log(index);
    console.log(array);
});