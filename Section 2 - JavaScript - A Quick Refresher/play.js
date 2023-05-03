var name = "Göktürk";
var age = 23;
var hasHobbies = true;

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
