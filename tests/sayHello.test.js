/* eslint-disable no-undef */
const sayHello = require('../sayHello')

describe('sayHello library test', () => {
	it('sayHello is called without options and returns random string from hellos array', () => {
		const hellosJson = require('../hellos.json')
		const hellos = []
		for (const [key, value] of Object.entries(hellosJson)) {
			hellos.push(`${value} (${key})`)
		}
		//test
		const testresult = sayHello()
		//expect random as part of hellos array
		expect(hellos).toContain(testresult)
	})

	it('sayHello is called with number (0) option and returns the specific string "Hello (English)"', () => {
		//test
		const testresult = sayHello(0)
		//expect
		expect(testresult).toEqual('Hello (English)')
	})

	it('sayHello is called with search string "Ger" returns the specific string "Hallo (German)"', () => {
		//test
		const testresult = sayHello('Ger')
		//expect
		expect(testresult).toEqual('Hallo (German)')
	})

	it('sayHello is called with search string "NotIncluded" returns error as it is not included the specific string "Sorry, no match :("', () => {
		//test
		const testresult = sayHello('NotIncluded')
		//expect
		expect(testresult).toEqual('Sorry, no match :(')
	})
})
