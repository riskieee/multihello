const jsonHallos = require('./hellos.json')

// parse json key:value to array['value (key)']
const hellos = []
for (const [key, value] of Object.entries(jsonHallos)) {
	hellos.push(`${value} (${key})`)
}

function sayHello(select = 'random') {
	// check for array index number
	if (!isNaN(select) && select >= 0 && select <= hellos.length) {
		return hellos[select]

		// find key by language
	} else if (
		typeof select === 'string' &&
		select !== '' &&
		select !== 'random'
	) {
		regex = new RegExp(select, 'g')
		found = hellos.find((hi) => regex.test(hi))
		if (found) {
			return found
		} else return 'Sorry, no match :('

		// random as fallback
	} else {
		return hellos[Math.floor(Math.random() * hellos.length)]
	}
}

module.exports = sayHello
