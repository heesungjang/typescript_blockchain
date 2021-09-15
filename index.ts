const name = "Nicolas";
const age = 24;
const gender = "male";

const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, You are ${age}. you are a ${gender}`);
};

sayHi(name, age);

export {};
