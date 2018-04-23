// Write a function that returns the shortest word in the string
// 1) Can I loop through all the individual words in a string? (yes)
let findLongest = (string) => {
  let word = string.split(' ')
  let longestWord = 0
  word.forEach(element => {
    if (element.length > longestWord) {
      longestWord = element.length
    }
  })
  return longestWord
}
// maybe compare all words against the first element and if they're shorter then the variable changes
let findShortest = (string) => {
  let word = string.split(' ')
  let shortestWord = Infinity
  word.forEach(element => {
    if (element.length < shortestWord) {
      shortestWord = element.length
    }
  })
  console.log(shortestWord)
  return shortestWord
}

console.log(findShortest("and i'm not coming out until this is all over"))
console.log(findLongest('I love cheese funkymonkey'))
