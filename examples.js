const multihello = require('./index.js')

console.log('-----------------------------------------------')
console.log('multihello() examples and options')
console.log('-----------------------------------------------')

// output > random
console.log('multihello() => random => ', multihello())

// output > 'Namaste (Hindi)'
console.log('multihello(3) => by number => ', multihello(3))

// output > 'Deu boro dis dium (Kokani)'
console.log("multihello('Kok') => search 'Kok' => ", multihello('Kok'))

// output > random by emptystring
console.log("multihello('') => search '' => ", multihello(''))

// error output > 'Sorry, no match :('
console.log(
	"multihello('errortest') => search 'errortest' => ",
	multihello('errortest')
)
