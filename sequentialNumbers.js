/*Given the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits. (28,83,39,91,10)

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five
consecutive digits found within the number given. The number will be passed
in as a string of only digits. It should return a five digit integer.
The number passed may be as large as 1000 digits.*/

const greatestSequence = (givenString) => {

    const highestNumber = []

        const digits = givenString.split("",5).join("")
        const pick5 = parseInt(givenString.slice(0-5))

        console.log(givenString)
        console.log(pick5)
        console.log(digits)

    // now we must iterate through groups of 5 elements and compare them against each other


    console.log(highestNumber)
    console.log(pick5)
    console.log(digits)


    // maybe we can destructure here and give them variable names.

}

greatestSequence('896512342567902837409218738')

// Input = string of digits output = integer.

// Try .slice()


/* IF IT WAS ME -> I would be given the number , I would look at the first 2 numbers  */