function century (year) {
    let cent = year.toString().split('')

        if (cent.length < 3) {
            let result = 1
            return result
        } else {
        if (cent[cent.length -1] === '0' && cent[cent.length -2] === '0' ) {
            let result = parseInt(cent.slice(0,cent.length -2).join(''))
            return result
        } else {
            let result =  parseInt(cent.slice(0,cent.length -2).join(''))
            result++
            return result
            }
        }
}

console.log(century(212000))