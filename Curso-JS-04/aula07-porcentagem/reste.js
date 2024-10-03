
const cart = [10, 244, 99, 2, 20, 33, 250]

let finalValueWithDiscount = 0
let finalValue = 0

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}


cart.forEach((value) => {
    finalValue += value 
    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        finalValueWithDiscount = finalValueWithDiscount + (value - discount)
      
    } else {
        finalValueWithDiscount += value
    }

})

const youSaved = finalValue - finalValueWithDiscount

console.log(`O valor final da compra foi de R$ ${finalValue.toFixed(2)}
porém você teve desconto, ira pagar apenas R$ ${finalValueWithDiscount.toFixed(2)}
você economizou R$ ${youSaved.toFixed(2)} `)