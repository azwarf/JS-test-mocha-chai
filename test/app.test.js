var expect = require('chai').expect
var reverseNamesOf = require('../app.js')

describe('reverseNamesOf', function() {
	var people, names
	
	beforeEach(function() {
		people = [{name: 'JS'}, {name: 'Unit'}, {name: 'Testing'}]
		names = reverseNamesOf(people)
	})

	it('should return an array', function() {
		expect(names).to.be.an('array')
	})

	it('should give me output the same length as the input', function() {
		expect(names.length).to.be.equal(people.length)
	})

	it('should give me the name of the object passed in', function() {
		expect(names[0]).to.be.equal(people[0])
	})
})