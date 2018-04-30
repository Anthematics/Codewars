const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "", "", "~", "", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "",""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];

const GRID2 = [
  ["", "", "", "^", "", "", "", "", ""],
  ["", "", "", "", "~", "", "", "", ""],

]

// GOOGLE NESTED ARRAYS IN JAVASCRIPT

function gridSize (array) {
  let rowLength =
  let columnHeight =

  array.forEach(function(element[0][0]){
    console.log(element[0])
  })

  array.forEach(function(element) {
    let count = element.length
    rowLength++
  });
  console.log(`"${rowLength} x ${columnHeight}"`)
}

gridSize(GRID)
gridSize(GRID2)