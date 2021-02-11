




export function litres(time: number) {
    let a =  time / 2
    return Math.floor(a)
}


export  function arrayPlusArray(arr1: number[], arr2: number[]) {
    let res1= arr1.reduce((x,z) => z + x)
    let res2= arr2.reduce((x,z) => z + x)
    return res1+res2
}


export function divisors(integer: number) {
    let res =[]
    for (var i = 0; i < integer ; i++) {
        if(integer % i === 0 ){res.push(i)};
        debugger
    }
    return res.length === 1? `${integer} is prime`: res.filter(t => t!== 1)

};
export function findOdd(arr: number[]) {
   return  arr.find(t=> arr.filter(n=>n === t ).length % 2)

}