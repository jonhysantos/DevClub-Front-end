

/*
    Map -> mapear o nosso array
        -Cria um novo array, a partir do array percorrido (arrray original)
        -Cria um novo array, com o mesmo quantidade de itens do array original
        -Aceita 3 parâmetros
            -item do array
            -index -> é a posição do elemento 
            -array completo
*/

const numbers = [1,3,5,6,4,3,7]
const double = numbers.map((item,index,arrayOriginal )=> {
    console.log(item + '-> Item')
    console.log(index + '-> index')
    console.log(arrayOriginal + ' ->array original')
    return item * 2
})


console.log(double)

// resumindo

const triple = numbers.map((item) => item *3)
console.log(triple)