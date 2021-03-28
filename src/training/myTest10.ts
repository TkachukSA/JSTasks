export type UserType = {
    name: string
    heir: number
    adress: { title: string }
}


export type Sergeytype = {
    Contakt:
        {
            country: string
            City: string
            street: string
        }
    phone: string
    computer: string
    girlFrands: {
        name: string
        age: number
    }
}
export type bookstype = {
    books: Array<string>

}

export type companytype = {
    company: Array<{ id: number, title: string }>

}


export type UserTypeLaptop = UserType & { laptop: { title: string } }

export function laptop(user: UserTypeLaptop, adress: string) {
    return {...user, adress: {...user.adress, title: adress}}

}

export function userMac(user: UserTypeLaptop, laptop: string) {
    return {...user, laptop: {...user.laptop, title: laptop}}
}

export function pushAge(sergey: Sergeytype, age: number) {
    return {...sergey, girlFrands: {...sergey.girlFrands, age: age}}
}

export function cityCounry(sergey: Sergeytype, City: string) {
    return {...sergey, Contakt: {...sergey.Contakt, City: City}}
}


export function ciborgBooks(sergey: Sergeytype & bookstype, books: Array<string>) {
    return {...sergey, books: [...sergey.books, books]}
}

export function updateBook(user: UserType & bookstype, find: string, on: string) {
    return {
        ...user,
        books: user.books.map(t => t === find ? on : t)
    }

}

export function myscills(sergey: Sergeytype & bookstype & { skills: Array<number> }, oldNum: number, newNum: number) {
    return {
        ...sergey,
        skills: sergey.skills.map(s => s === oldNum ? newNum : s)
    }
}

export function removeBook(user: UserTypeLaptop & bookstype, upd: string) {
    return {...user, books: user.books.filter(u => u !== upd)}
}

export function addcompany(user: UserTypeLaptop & companytype, news: string) {
    return {...user, company: [...user.company, news]}
}

export function updcompany(user: UserType & companytype, id: number, title: string) {
    return {
        ...user,
        company: user.company.map(t => t.id === id ?
            {...t, title: title} :
            t)
    }

}


type aType = {
    name: string
    protoco: string
    studentCount: number
    isOnline: boolean
    students: string[]
    classrom: { teacher: { name: string, age: number } }


}

export let a: aType = {
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
//{...sergey, Contakt:{...sergey.Contakt, City: City}}
let b = {...a, classrom: {...a.classrom, teacher: {...a.classrom.teacher}}}

export function rename(a: aType, name: string) {
    return {...a, classrom: {...a.classrom, teacher: {...a.classrom.teacher, name: name}}}

}