import {arrayPlusArray, litres} from "./codeWars";


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