








const cart = [50]  // Procutos acima de 30 reais ganham 10% de desconto
let finalValue = 0
let finalValueWithDiscount = 0


function calculateDescount(price,descount){
    const result = (descount/100) * price
    return result
}

cart.forEach(value => {
    finalValue = finalValue = value
    if(value > 30){
        const descount = calculateDescount(value,10)
        finalValueWithDiscount = finalValueWithDiscount + (value - descount)
    }else {
        finalValueWithDiscount += value
    }
    
});


const cashSaved = finalValue - finalValueWithDiscount

console.log(cashSaved)
console.log(finalValueWithDiscount)


// let value = 100
// let desconto = (10/100) * value

// let precoFinal = preco - desconto

// console.log(desconto)
// console.log(precoFinal)