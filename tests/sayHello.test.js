/* eslint-disable no-undef */
const sayhello = require('../index')

describe('sayhello library test', () => {
	it('sayhello is called without options and returns random string from hellos array', () => {
		//test
		const hellos = require('../hellos.json')
		const testresult = sayhello()
		//expect random as part of hellos array
		expect(hellos).toContain(testresult)
	})

	it('sayhello is called with number (0) option and returns the specific string "Hello (English)"', () => {
		//test
		const testresult = sayhello(0)
		//expect
		expect(testresult).toEqual('Hello (English)')
	})

	it('sayhello is called with search string "Ger" returns the specific string "Hallo (German)"', () => {
		//test
		const testresult = sayhello('Ger')
		//expect
		expect(testresult).toEqual('Hallo (German)')
	})

	it('sayhello is called with search string "NotIncluded" returns error as it is not included the specific string "Sorry, no match :("', () => {
		//test
		const testresult = sayhello('NotIncluded')
		//expect
		expect(testresult).toEqual('Sorry, no match :(')
	})
})
