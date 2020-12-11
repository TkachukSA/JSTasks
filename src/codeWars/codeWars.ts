




export function litres(time: number) {
    let a =  time / 2
    return Math.floor(a)
}


export  function arrayPlusArray(arr1: number[], arr2: number[]) {
    let res1= arr1.reduce((x,z) => z + x)
    let res2= arr2.reduce((x,z) => z + x)
    return res1+res2
}