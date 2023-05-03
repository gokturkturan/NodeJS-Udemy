const hobbies = ["Sports", "Cooking"];

for (let hobby of hobbies) {
  console.log(hobby);
}

hobbies.map((hobby) => {
  return "Hobby: " + hobby;
});

console.log(hobbies.map((hobby) => "Hobby: " + hobby));

hobbies.push("Programming");
console.log(hobbies);
