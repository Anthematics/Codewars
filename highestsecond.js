let numbers = [10,200,15,5,35,50];

const findHighest = (Array) => {
		let highest = 0
    	for (let number of Array) {
				if (number >= highest) {
					highest = number
			}
		}
		console.log(highest)
	}

findHighest(numbers)

// console.log(findHighest(numbers))
