const sayHello = require('./sayHello.js')

console.log('-----------------------------------------------')
console.log('sayHallo() examples and options')
console.log('-----------------------------------------------')
console.log('sayHello() => random => ', sayHello())
// output > random
console.log('sayHello(3) => by number => ', sayHello(3))
// output > 'Namaste (Hindi)'
console.log("sayHello('Kok') => search 'Kok' => ", sayHello('Kok'))
// output > 'Deu boro dis dium (Kokani)'
