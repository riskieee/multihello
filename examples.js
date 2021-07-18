const sayhello = require('./index.js')

console.log('-----------------------------------------------')
console.log('sayhello() examples and options')
console.log('-----------------------------------------------')

// output > random
console.log('sayhello() => random => ', sayhello())

// output > 'Namaste (Hindi)'
console.log('sayhello(3) => by number => ', sayhello(3))

// output > 'Deu boro dis dium (Kokani)'
console.log("sayhello('Kok') => search 'Kok' => ", sayhello('Kok'))

// output > random by emptystring
console.log("sayhello('') => search '' => ", sayhello(''))

// error output > 'Sorry, no match :('
console.log(
	"sayhello('errortest') => search 'errortest' => ",
	sayhello('errortest')
)
