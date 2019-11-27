function userCreator(name, score) {
  let newUser = Object.create(userFunctionStore); // comes from userfunctionstore variable on line - 7
  newUser.name = name;
  newUser.score = score;
  return newUser;
}
let userFunctionStore = {
  increment: function() {
    this.score++;
  },
  login: function() {
    console.log("You're loggedin");
  }
};
let user1 = userCreator("Will", 3);
let user2 = userCreator("Tim", 5);
user1.increment();
console.log(user1, user2);
