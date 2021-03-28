import {
    addcompany,
    bookstype,
    ciborgBooks,
    cityCounry, companytype,
    laptop, myscills,
    pushAge, removeBook, rename,
    Sergeytype, updateBook, updcompany,
    userMac,
    UserType,
    UserTypeLaptop
} from "./myTest10";


function icraceAge(u: UserType, power: number){
    const copy={...u}
    copy.heir = u.heir/power
    return copy
}

test('referens type test',()=>{
    let user:UserType = {
        name: 'Sergey',
        heir: 28,
        adress: { title:'Minsk'}
    }

    const oweson = icraceAge(user,2)

    icraceAge(user, 2)
    expect(user.heir).toBe(28)
    expect(oweson.heir).toBe(14)



})

test('referesns type test',()=>{
    let user:UserTypeLaptop = {
        name: 'Sergey',
        heir: 28,
        adress: { title:'Minsk'},
        laptop: {title: 'macbook'}
    }

    const oweson = laptop(user, "Kiev" )


    expect(oweson.adress.title).toBe("Kiev")
    expect(user.adress.title).toBe('Minsk')



})

test('referens user laptop nac',()=>{
    let user:UserTypeLaptop = {
        name: 'Sergey',
        heir: 28,
        adress: { title:'Minsk'},
        laptop: {title: 'macbook'}
    }

    const oweson = userMac(user, "MacBook Pro 15" )


    expect(oweson.laptop.title).toBe("MacBook Pro 15")
    expect(user.laptop.title).toBe('macbook')



})


test('My test',()=>{
    let sergey: Sergeytype = {
        Contakt:{
            country: 'BLR',
            City: 'Mnsk',
            street:'Phulichova'
        } ,
        phone: "iphone",
        computer:'macbook',
        girlFrands: {
            name: 'Nastia',
            age: 23
        }

    }
    let vopy=pushAge(sergey, 24)


    expect(vopy.girlFrands.age).toBe(24)
    expect(sergey.girlFrands.age).toBe(23)

})


test('My tests',()=>{
    let sergey: Sergeytype = {
        Contakt:{
            country: 'BLR',
            City: 'Mnsk',
            street:'Phulichova'
        } ,
        phone: "iphone",
        computer:'macbook',
        girlFrands: {
            name: 'Nastia',
            age: 23
        }

    }
    let vopy=cityCounry(sergey, 'New York')


    expect(vopy.Contakt.City).toBe('New York')
    expect(sergey.Contakt.City).toBe('Mnsk')
    expect(vopy.Contakt.street).toBe('Phulichova')

})

test('My tests1',()=>{
    let sergey: Sergeytype & bookstype = {
        Contakt:{
            country: 'BLR',
            City: 'Mnsk',
            street:'Phulichova'
        } ,
        phone: "iphone",
        computer:'macbook',
        girlFrands: {
            name: 'Nastia',
            age: 23
        },
        books: ['js', 'css', 'ts']

    }
    let vopy=ciborgBooks(sergey, ['ts', 'react'])


    expect(vopy.books[2]).toBe('ts')

})


test('referens type test2',()=>{
    let user:UserTypeLaptop & bookstype = {
        name: 'Sergey',
        heir: 28,
        adress: { title:'Minsk'},
        laptop: {title: 'macbook'},
        books: ['js', 'css', 'ts']
    }

    const userCopy = updateBook(user,'js', 'ts' )


    expect(user).not.toBe(userCopy)
    expect(user.adress.title).toBe('Minsk')
    expect(user.books).not.toBe(userCopy.books)



})

test('My scills',()=>{
    let sergey: Sergeytype & bookstype & {skills: Array<number>} = {
        Contakt:{
            country: 'BLR',
            City: 'Mnsk',
            street:'Phulichova'
        } ,
        phone: "iphone",
        computer:'macbook',
        girlFrands: {
            name: 'Nastia',
            age: 23
        },
        books: ['js', 'css', 'ts'],
        skills: [11, 22 , 33, 55 ]

    }

    let vopy=myscills(sergey, 22, 77)


    expect(vopy.books[2]).toBe('ts')
    expect(vopy.skills[1]).toBe(77)

})

test('remoove book',()=>{
    let user:UserTypeLaptop & bookstype = {
        name: 'Sergey',
        heir: 28,
        adress: { title:'Minsk'},
        laptop: {title: 'macbook'},
        books: ['js', 'css', 'ts']
    }

    const userCopy = removeBook(user,'js', )


    expect(user.books).not.toBe(userCopy.books)
    expect(user.adress.title).toBe('Minsk')
    expect(user.books).not.toBe(userCopy.books)
   // expect(userCopy.books.length).toBe(1)

})

test('remoove book',()=>{
    let user:UserTypeLaptop & companytype = {
        name: 'Sergey',
        heir: 28,
        adress: { title:'Minsk'},
        laptop: {title: 'macbook'},
        company: [{id: 1, title: "Ferico"}, {id: 2, title: 'incubator'}]
    }

    const userCopy = addcompany(user, 'epam' )


    expect(user.adress.title).toBe('Minsk')
    expect(userCopy.company.length).toBe(3)
    expect(userCopy.company[2]).toBe('epam')

})


test('remoove book1',()=>{
    let user:UserTypeLaptop & companytype = {
        name: 'Sergey',
        heir: 28,
        adress: { title:'Minsk'},
        laptop: {title: 'macbook'},
        company: [{id: 1, title: "Ferico"}, {id: 2, title: 'incubator'}]
    }

    const userCopy = updcompany(user,1, 'epam' )


    expect(user).not.toBe(userCopy)
    expect(userCopy.company).not.toBe(user.company)
  //  expect(userCopy.company[2]).toBe('epam')

})

test('rename',()=>{
     let a = {
        name: 'Sergey',
        protoco: 'HTTPS',
        studentCount: 2,
        isOnline: true,
        students: ['YAN', 'VIK', 'DEBIL'],
        classrom: {
            teacher: {
                name: 'bob',
                age: 22
            }
        }
    }
    const uss= rename(a, 'kleopatra')

    expect(uss.classrom.teacher.name).toBe('kleopatra')
    expect(a.classrom.teacher.name).toBe('bob')
})




test('reName',()=>{
    let state= {
        messageForNewPost: "",
        posts: [
            {id: 1, message: 'Hi, how are you*?', likekounts: 12},
            {id: 2, message: 'its my first post', likekounts: 33},
            {id: 3, message: 'go in iron', likekounts: 333},
            {id: 3, message: 'its my life', likekounts: 333}
        ],
    }

    let stateCopy = {...state, posts:state.posts.map(t=>({...t}))}

   // let stateCopy = {...state}
  //  stateCopy.posts =[...state.posts]


    stateCopy.posts[0].id=2000

    expect(state.posts[0].id).toBe(1)
    expect(stateCopy.posts[0].id).toBe(2000)

})
