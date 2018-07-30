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

Test.assertEquals(century(1705), 18, 'Testing for year 1705');
Test.assertEquals(century(1900), 19, 'Testing for year 1900');
Test.assertEquals(century(1601), 17, 'Testing for year 1601');
Test.assertEquals(century(2000), 20, 'Testing for year 2000');
Test.assertEquals(century(89), 1, 'Testing for year 89');