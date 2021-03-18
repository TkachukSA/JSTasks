import {alphabetPosition, arrayPlusArray, divisors, findOdd, litres} from "./codeWars";


test('water in house', ()=>{

    let hour = 5
    let hour6 = 6

    let res = litres(hour)
    let res2 = litres(hour6)

    expect(res).toBe(2)
    expect(res2).toBe(3)




})

test('array PlusA rray - summa', ()=>{

    let arr1 = [1,2,3]
    let arr2 = [4,2,9]

 let result= arrayPlusArray(arr1, arr2)

    expect(result).toBe(21)

})


test('Find the divisors!', ()=>{

    let a = 10
    let b = 13

 let resultA= divisors(a)
 let resultB= divisors(b)

    expect(resultA).toStrictEqual([2,5])
    expect(resultB).toStrictEqual('13 is prime')

})


test('Find the  odd int!', ()=>{

    let a = [1,1,2,2,3,3,4,4,4,4,7]
    let b = [1,1,2,2,3,3,4,4,4,4,7,7,1]

    let resultA= findOdd(a)
    let resultB= findOdd(b)

    expect(resultA).toBe(7)
    expect(resultB).toBe(1)

})


test('Replace With Alphabet Position', ()=>{

    let a = "The sunset sets at twelve o' clock."


    let res= alphabetPosition(a)


    expect(res).toBe("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")


})