
// 1. Simple object

export let manTS:{age: number, name: string} = {
    name: 'John',
    age: 28
};



// 2. Array of primitives
let numberson = [1, 2, 3];




// 3. Object inside an object
export type man1TStype={
    name: string
    age: number
    mother: {
        name: string
        age: number}
}
export let man1TS:man1TStype = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50
    }
};

 // your code


// 4. Array of primitives inside an object
export let man2ts = {
    name: 'John',
    age: 28,
    friends: ["Peter", "Steven", "William"]
};




// 5 Array of objects
export let peoplets = [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
];






type man3type={
    name: string
    age: number
    friends: Array<qwq>
}
type qwq={name: string
    age: number}


// 6 Array of objects inside object
 export let man3:man3type = {
    name: 'John',
    age: 28,
    friends: [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ]
};




// 7 Object inside an object, inside an object
export let man4 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        }
    }
};



// 8 Array of objects inside object -> object
export let man5 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {name: "Kevin", age: 80},
            {name: "Jennifer", age: 78},
        ]
    }
};



// 9 Object inside an object -> array -> object ->  object
export let man6 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};

let man6FullCopy  //  your code


//10 Array of objects inside an object -> object -> array -> object ->  object
export let man7 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        {title: "beet", amount: 3},
                        {title: "potatoes", amount: 5},
                        {title: "carrot", amount: 1},
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        {title: "fish", amount: 1},
                        {title: "rise", amount: 0.5}
                    ]
                }
            },
        ]
    }
};

let man7FullCopy  //  your code
