interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "heesung",
    gender: "male",
    age: 22,
};

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, You are ${person.age}. you are a ${person.gender}!`;
};

console.log(sayHi(person));

export {};
