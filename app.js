function reverseNamesOf(arrayOfPeople) {
	return arrayOfPeople.reverse(function(person) {
		var nama = person.name.reverse()
		return nama
	})
}

module.exports = reverseNamesOf