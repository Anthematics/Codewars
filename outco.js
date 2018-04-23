let array= [0,1,1,0,1,0]
// sort an array without an array method.


function arraySort(array) {
  let count1 = 0
  let count0 = 0
// use variables only
for (let iterator = 0; iterator < array.length; iterator++) {

if (array[iterator] === 1) {
  count1++
} else {
  count0++
}

}
  for(let i = 0; i < count0; i++) {
    array[i] = 0;
  }

  for(let i = count0; i< array.length; i++) {
    array[i] = 1;
  }

  return array;
}

console.log(arraySort(array))


// since it needs to be o(n) time - do not use array methods.
//