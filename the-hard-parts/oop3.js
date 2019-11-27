// 'new' creates new user object ( this: { } ) & returns user object ( w/parameters passed in ).
// bond is automated and stored to the .prototype object
// shared functions are stored in the prototype object
// 'this' is the auto generated object.
function User(name, score) {
  this.name = name;
  this.score = score;
}
User.prototype.increment = function() {
  this.score++;
};
User.prototype.login = function() {
  console.log("login");
};
let user1 = new User("Eva", 9);
user1.increment();
console.log(user1);
