const array1 = [1, 2, 3, 4];
const array2 = [30,60,90,120]
const reducer = (accumulator, currentValue) => accumulator + currentValue;


console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer, 5));


// reducer 2
const reducer2 = (accumulator, currentIndex) => accumulator + currentIndex
console.log(array2.reduce(reducer2,array2.length))


const reducer3 = (currentIndex,currentValue) => currentIndex * currentValue
console.log(array1.reduce(reducer3,array1.length))


// callback
// Function to execute on each element in the array, taking four arguments:

// accumulator
// The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied

// currentValue

// The current element being processed in the array.

// currentIndex *Optional*
// The index of the current element being processed in the array.
//  Starts at index 0, if an initialValue is provided, and at index 1 otherwise.

// array *Optional*
// The array reduce() was called upon


// VIA FREE CODE CAMP
// Finding an Average with the Reduce Method In JavaScript​
// Instead of logging the sum, you could divide the sum by the length of the array before you return a final value.

// The way to do this is by taking advantage of the other arguments in the reduce method.
// The first of those arguments is the index. Much like a for-loop, the index refers
// to the number of times the reducer has looped over the array. The last argument is the array itself.

const euros = [29.76, 41.85, 46.5];
const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) {
    return total/array.length;
  }else {
    return total;
  }
});
average

