const name = "Göktürk";
let age = 23;
const hasHobbies = true;

age = 19;

const summarizeUser = (userName, userAge, useHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    useHasHobby
  );
};

const summarizeUser2 = function (userName, userAge, useHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    useHasHobby
  );
};

const add = (a, b) => {
  return a + b;
};

const add2 = (a, b) => a + b;

const addOne = (a) => a + 1;

const addRandom = () => 1 + 2;

console.log(summarizeUser(name, age, hasHobbies));
console.log(summarizeUser2(name, age, hasHobbies));
console.log(add(1, 2));
console.log(add2(1, 2));
console.log(addOne(1));
console.log(addRandom());
