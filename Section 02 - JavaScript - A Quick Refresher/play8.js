const person = {
  name: "Göktürk",
  age: 23,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const printName = (personData) => {
  console.log(personData.name);
};

const printName2 = ({ name, greet }) => {
  console.log(name);
  greet();
};

printName(person);
printName2(person);

const { name, age } = person;
console.log(name, age);

const hobbies = ["Sports", "Cooking", "Game"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
