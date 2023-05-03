const person = {
  name: "Göktürk",
  age: 23,
  greet: () => {
    console.log("Hi, I am " + this.name);
  },
};

const person2 = {
  name: "Göktürk",
  age: 23,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

console.log(person);
person.greet();
