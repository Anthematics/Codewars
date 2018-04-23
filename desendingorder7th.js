// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 1254859723 Output: 9875543221

// to reverse the word in place . theroetically we need to break up the sentence into its words ,
//  break up the words into its letters , reverse them and rejoin the words.


function reverseWords(str) {
  words = str.split(' ')
  console.log(step1)
  words.forEach(word => {
    const wordReversed = word.split('').reverse().join('')
    console.log(wordReversed)
  })
}

// const reversed = str.split('').reverse().join('')
// console.log(reversed)

reverseWords('double  spaced   words ')
reverseWords ('a b c d e')