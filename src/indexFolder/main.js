// 7 kyu Credit Card Mask

function maskify(cc) {
    if (cc.length <= 4) {
        return cc
    } else {
        let a = cc.split('')

        return a.map(t => t = '#').join('') + a.splice(cc.length - 4, 4).join('')
    }
}


