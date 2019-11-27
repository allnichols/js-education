let user2 = {};

user2.name = "Tim";
user2.score = 6;
user2.increment = function() {
  user2.score++;
};

console.log(user2, "user2");

let user3 = Object.create(null); // creates an empty object - null doesn't make the empty object
user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
  user3.score++;
};

console.log(user3, "user3");

function userCreator(name, score) {
  let newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  };
  return newUser;
}

let user4 = userCreator("Will", 0);
user4.increment();
user4.increment();
console.log(user4, "user4");
