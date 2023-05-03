const person = {
  name: "Göktürk",
  age: 23,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const hobbies = ["Sports", "Cooking"];

const copiedArray = hobbies.slice();
const copiedArray2 = [...hobbies];

const copiedPerson = { ...person };

console.log(copiedArray2);
console.log(copiedPerson);

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
