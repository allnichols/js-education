var numbers = {
	*[Symbol.iterator]({
		numStart = 0,
		numEnd = 100,
		iterateBy = 1,
	} = {}) {
		for (let num = numStart; num < numEnd; numStart += iterateBy) {
			yield num;
		}
	}
};

// should print 0..100 by 1s
for (let num of numbers) {
	console.log(num);
}

// should print 6..30 by 4s
console.log(`My lucky numbers are: ${
	[...numbers[Symbol.iterator]({
		numStart: 0,
		iterateBy: 1,
		numEnd: 100
	})]
	}`);


