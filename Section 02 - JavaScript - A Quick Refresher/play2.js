const name = "Göktürk";
let age = 23;
const hasHobbies = true;

age = 19;

function summarizeUser(userName, userAge, useHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    useHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
