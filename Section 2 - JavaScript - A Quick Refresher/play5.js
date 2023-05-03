const person = {
  name: "Göktürk",
  age: 23,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const hobbies = ["Sports", "Cooking"];

for (let hobby of hobbies) {
  console.log(hobby);
}

hobbies.map((hobby) => {
  return "Hobby: " + hobby;
});

console.log(hobbies.map((hobby) => "Hobby: " + hobby));
console.log(hobbies);
