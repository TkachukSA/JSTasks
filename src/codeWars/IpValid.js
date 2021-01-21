function isValidIP(str) {
   /* if (str === "0.0.0.0" | str === '0.1.0.0') {
        return true
    }*/
    debugger

    let a = str.toString().split('.')
    if (a.length === 4) {
        let b0 = a[0]
        let b1 = a[1]
        let b2 = a[2]
        let b3 = a[3]

        let b00 = b0 <= 255 && b0 >= 0
        let b01 = b1 <= 255 && b1 >= 0
        let b02 = b2 <= 255 && b2 >= 0
        let b03 = b3 <= 255 && b3 >= 0

        let res1 = +b0//.split('').filter(t => parseInt(t))
        let res2 = +b1//.split('').filter(t => parseInt(t))
        let res3 = +b2//.split('').filter(t => parseInt(t))
        let res4 = +b3//.split('').filter(t =>   parseInt(t))

        let r  = b0.length === res1.toString().split('').length
        let r1 = b1.length === res2.toString().split('').length
        let r2 = b2.length === res3.toString().split('').length
        let r3 = b3.length === res4.toString().split('').length


        if (b00 && b01 && b02 && b03 && r && r1 && r2 && r3) {
            let c0 = b0.split('')
            let c1 = b1.split('')
            let c2 = b2.split('')
            let c3 = b3.split('')

            let c00 = c0.length === 1? true: +c0[0] !== 0
            let c01 = c1.length === 1? true: +c1[0] !== 0
            let c02 = +c2.length === 1? true: +c2[0] !== 0
            let c03 = +c3.length === 1? true: +c3[0] !== 0



            let c03d = +c3[0]

            return c00 && c01 && c02 && c03
        }
        return false
    }
    return false
}


console.log(isValidIP( "0.0.0.0"))