// Consider an array containing cats and dogs. Each dog can catch only one cat,
// but cannot catch a cat that is more than n elements away.
// Your task will be to return the maximum number of cats that can be caught.

// solve(['D','C','C','D','C'], 2) = 2, because the dog at index 0 (D0) catches C1 and D3 catches C4.
// solve(['C','C','D','D','C','D'], 2) = 3, because D2 catches C0, D3 catches C1 and D5 catches C4.
// solve(['C','C','D','D','C','D'], 1) = 2, because D2 catches C1, D3 catches C4. C0 cannot be caught because n == 1.
// solve(['D','C','D','D','C'], 1) = 2, too many dogs, so all cats get caught!

// A dog can catch an a cat in its


animals = ['C','C','D','C','C','C','D']

function catsCaught(array,number) {
  const dog = 'D'
  const cat = 'C'
  console.log(animals)
}

catsCaught()

const bears = [1,2,3,4,5,6]
function findAverage(array) {
  bears.reduce(reducer)
  console.log(average)
}

findAverage()


// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 1254859723 Output: 9875543221