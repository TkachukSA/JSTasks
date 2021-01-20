import {man1TS, man2ts, man3, man4, man5, man6, man7, manTS, peoplets} from "./deepCopy";


test('one test', () => {

    let res1 = manTS

    let res2 = {...manTS}
    res2.name = 'Ykob'

    expect(res1.name).toBe('John')
    expect(res2.name).toBe('Ykob')


})
test('two test', () => {

    let numbers = [1, 2, 3];
    let copy = [...numbers]
    copy[0] = 77
    copy[2] = copy[2] + 27
    expect(numbers).toBe(numbers)
    expect(numbers[0]).toBe(1)
    expect(numbers[2]).toBe(3)
    expect(copy[0]).toBe(77)
    expect(copy[2]).toBe(30)


})
test('three test', () => {


//man1TS
    let copy = {...man1TS, mother: {...man1TS.mother}}
    copy.mother.age = 55
    copy.mother.name = 'Nika'
    copy.age = 22


    expect(man1TS.mother.age).toBe(50)
    expect(man1TS.mother.name).toBe('Kate')
    expect(man1TS.age).toBe(28)

    expect(copy.mother.age).toBe(55)
    expect(copy.mother.name).toBe('Nika')
    expect(copy.age).toBe(22)


})
test('four', () => {


//man1TS
    let copy = {...man2ts, friends: [...man2ts.friends]}
    copy.friends[0] = "Sveta"
    copy.friends[2] = "Govard"


    expect(man2ts.friends[0]).toBe("Peter")
    expect(man2ts.friends[1]).toBe("Steven")
    expect(man2ts.friends[2]).toBe("William")

    expect(copy.friends[0]).toBe("Sveta")
    expect(copy.friends[2]).toBe("Govard")
    expect(copy.friends[1]).toBe("Steven")


})
test('five', () => {


//man1TS
    let copy = {...peoplets.map(t => ({...t}))}
    copy[0].age = 100
    copy[2].name = "SA"


    expect(peoplets[0].age).toBe(30)
    expect(peoplets[2].name).toBe("William")


    expect(copy[0].age).toBe(100)
    expect(copy[2].name).toBe("SA")


})
test('six', () => {


//man1TS
    let copy = {...man3, friends: man3.friends.map(t => ({...t}))}
    copy.friends[0].age = 35
    copy.friends[0].name = 'Britny'


    expect(man3.friends[0].age).toBe(30)
    expect(man3.friends[0].name).toBe("Peter")


    expect(copy.friends[0].age).toBe(35)
    expect(copy.friends[0].name).toBe("Britny")


})
test('seven', () => {


//man1TS
    let copy = {...man4, mother: {...man4.mother, work: {...man4.mother.work}}}

    copy.mother.name = "natasha"
    copy.mother.work.experience = 25


    expect(man4.mother.name).toBe("Kate")
    expect(man4.mother.work.experience).toBe(15)


    expect(copy.mother.name).toBe("natasha")
    expect(copy.mother.work.experience).toBe(25)


})
test('eight', () => {


//man1TS
    // let copy = {...man4, mother:{...man4.mother, work: {...man4.mother.work}} }

    let copy = {
        ...man5,
        mother: {...man5.mother, work: {...man5.mother.work}, parents: [...man5.mother.parents.map(t => ({...t}))]}
    }
    copy.mother.name = "natasha"
    copy.mother.work.experience = 25
    copy.mother.parents[1].age = 69


    expect(man5.mother.name).toBe("Kate")
    expect(man5.mother.work.experience).toBe(15)
    expect(man5.mother.parents[1].age).toBe(78)


    expect(copy.mother.name).toBe("natasha")
    expect(copy.mother.work.experience).toBe(25)
    expect(copy.mother.parents[1].age).toBe(69)


})
test('nine', () => {


    //let copy={...man5, mother: {...man5.mother, work: {...man5.mother.work}, parents:[...man5.mother.parents.map(t=>({...t}))]}}


    let copy = {
        ...man6, mother: {
            ...man6.mother, work: {...man6.mother.work},
            parents: [...man6.mother.parents.map(t => ({...t, favoriteDish: {...t.favoriteDish}}))]
        }
    }
    copy.mother.name = "natasha"
    copy.mother.work.experience = 25
    copy.mother.parents[1].age = 69
    copy.mother.parents[0].favoriteDish.title = "schi"


    expect(man6.mother.name).toBe("Kate")
    expect(man6.mother.work.experience).toBe(15)
    expect(man6.mother.parents[1].age).toBe(78)
    expect(man6.mother.parents[0].favoriteDish.title).toBe("borscht")


    expect(copy.mother.name).toBe("natasha")
    expect(copy.mother.work.experience).toBe(25)
    expect(copy.mother.parents[1].age).toBe(69)
    expect(copy.mother.parents[0].favoriteDish.title).toBe("schi")


})
test('ten', () => {


    let copy = {
        ...man7,
        mother: {
            ...man7.mother,
            work: {...man7.mother.work},
            parents: [...man7.mother.parents.map(t => ({
                ...t,
                favoriteDish: {
                    ...t.favoriteDish,
                    ingredients: [...t.favoriteDish.ingredients.map(x => ({...x}))]
                }
            }))]
        }
    }

    copy.mother.name = "natasha"
    copy.mother.work.experience = 25
    copy.mother.parents[1].age = 69
    copy.mother.parents[0].favoriteDish.title = "schi"
    copy.mother.parents[0].favoriteDish.ingredients[0].amount = 100


    expect(man7.mother.name).toBe("Kate")
    expect(man7.mother.work.experience).toBe(15)
    expect(man7.mother.parents[1].age).toBe(78)
    expect(man7.mother.parents[0].favoriteDish.title).toBe("borscht")
    expect(man7.mother.parents[0].favoriteDish.ingredients[0].amount).toBe(3)


    expect(copy.mother.name).toBe("natasha")
    expect(copy.mother.work.experience).toBe(25)
    expect(copy.mother.parents[1].age).toBe(69)
    expect(copy.mother.parents[0].favoriteDish.title).toBe("schi")
    expect(copy.mother.parents[0].favoriteDish.ingredients[0].amount).toBe(100)


})

test('new two', () => {
    let numberson = [1, 2, 3];
    let newArr = [...numberson]

    newArr[0] = 12
    expect(numberson).toStrictEqual([1, 2, 3])
    expect(newArr).toStrictEqual([12, 2, 3])

})
test('new three', () => {
    let newAr = {...man1TS, mother: {...man1TS.mother}}

    newAr.mother.name = 'Nana'
    expect(man1TS.mother.name).toBe('Kate')
    expect(newAr.mother.name).toBe('Nana')


})
test('new four', () => {
    let newAr = {...man2ts, friends: [...man2ts.friends]}

    newAr.friends[0] = 'vasia'
    expect(man2ts.friends[0]).toBe('Peter')
    expect(newAr.friends[0]).toBe('vasia')


})
test('new five', () => {
    let newAr = {...peoplets.map(p => ({...p}))}
    newAr[1].name = 'asinc'


    expect(peoplets[1].name).toBe('Steven')
    expect(newAr[1].name).toBe('asinc')


})

test('new six', () => {
    let newAr = {...man3, friends: {...man3.friends.map(t => ({...t}))}}
    newAr.friends[0].age = 2021

    expect(man3.friends[0].age).toBe(30)
    expect(newAr.friends[0].age).toBe(2021)

})
test('new seven', () => {
    let newAr = {...man4, mother: {...man4.mother, work: {...man4.mother.work}}}

    newAr.mother.age = 35
    newAr.mother.work.experience = 2

    expect(newAr.mother.age).toBe(35)
    expect(newAr.mother.work.experience).toBe(2)

    expect(man4.mother.age).toBe(50)
    expect(man4.mother.work.experience).toBe(15)

})

test('new eight', () => {
    let newAr = {
        ...man6, mother: {
            ...man6.mother, work: {...man6.mother.work},
            parents: [...man6.mother.parents.map(t => ({...t, favoriteDish: {...t.favoriteDish}}))]
        }
    }


    newAr.mother.parents[0].age = 2021
    newAr.mother.parents[0].favoriteDish.title = 'bosh'


    expect(newAr.mother.parents[0].favoriteDish.title).toBe('bosh')
    expect(newAr.mother.parents[0].age).toBe(2021)

    expect(man6.mother.parents[0].favoriteDish.title).toBe('borscht')
    expect(man6.mother.parents[0].age).toBe(80)

})


test('new ten', () => {
    let newAr = {
        ...man7,
        mother: {
            ...man7.mother,
            work: {...man7.mother.work},
            parents: [...man7.mother.parents.map(t => ({
                ...t,
                favoriteDish: {
                    ...t.favoriteDish,
                    ingredients: {...t.favoriteDish.ingredients.map(s => ({...s}))}
                }
            }))]
        }
    }


    newAr.mother.name = "natasha"
    newAr.mother.work.experience = 25
    newAr.mother.parents[1].age = 69
    newAr.mother.parents[0].favoriteDish.title = "schi"
    newAr.mother.parents[0].favoriteDish.ingredients[0].amount = 100


    expect(man7.mother.name).toBe("Kate")
    expect(man7.mother.work.experience).toBe(15)
    expect(man7.mother.parents[1].age).toBe(78)
    expect(man7.mother.parents[0].favoriteDish.title).toBe("borscht")
    expect(man7.mother.parents[0].favoriteDish.ingredients[0].amount).toBe(3)


    expect(newAr.mother.name).toBe("natasha")
    expect(newAr.mother.work.experience).toBe(25)
    expect(newAr.mother.parents[1].age).toBe(69)
    expect(newAr.mother.parents[0].favoriteDish.title).toBe("schi")
    expect(newAr.mother.parents[0].favoriteDish.ingredients[0].amount).toBe(100)


    // expect().toBe('borscht')


})
test('todo',()=>{
    let todolistId1 = 12;
    let todolistId2 = 332
    let todo = {
        [todolistId1]: [
            {
                id: 11,
                title: "HTML&CSS",
                status: 12,
                todoListId: 11,
                description: '',
                startDate: '',
                deadline: '',
                addedDate: '',
                order: 0,
                priority: 22
            },
            {
                id: 12,
                title: "JS",
                status: '',
                todoListId: todolistId1,
                description: '',
                startDate: '',
                deadline: '',
                addedDate: '',
                order: 0,
                priority: 12
            }
        ],
        [todolistId2]: [
            {
                id: 22121,
                title: "Milk",
                status: '',
                todoListId: todolistId2,
                description: '',
                startDate: '',
                deadline: '',
                addedDate: '',
                order: 0,
                priority: 'TaskPriorities.Low'
            }
        ]
    };







})