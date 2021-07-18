const hellos = require('./hellos.json')

function sayhello(select = 'random') {
	// check for array index number
	if (hellos[select]) return hellos[select]
	// find language by (part)keyword
	if (select != '' && select != 'random') {
		const regex = new RegExp(select, 'g')
		const found = hellos.find((hi) => regex.test(hi))
		if (found) return found
		return 'Sorry, no match :('
	}
	// random as default fallback
	return hellos[Math.floor(Math.random() * hellos.length)]
}

module.exports = sayhello
