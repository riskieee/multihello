/* eslint-disable no-undef */
const multihello = require('../index')

describe('multihello library test', () => {
	it('multihello is called without options and returns random string from hellos array', () => {
		//test
		const hellos = require('../hellos.json')
		const testresult = multihello()
		//expect random as part of hellos array
		expect(hellos).toContain(testresult)
	})

	it('multihello is called with number (0) option and returns the specific string "Hello (English)"', () => {
		//test
		const testresult = multihello(0)
		//expect
		expect(testresult).toEqual('Hello (English)')
	})

	it('multihello is called with search string "Ger" returns the specific string "Hallo (German)"', () => {
		//test
		const testresult = multihello('Ger')
		//expect
		expect(testresult).toEqual('Hallo (German)')
	})

	it('multihello is called with search string "NotIncluded" returns error as it is not included the specific string "Sorry, no match :("', () => {
		//test
		const testresult = multihello('NotIncluded')
		//expect
		expect(testresult).toEqual('Sorry, no match :(')
	})
})
