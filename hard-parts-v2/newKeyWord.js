// The new keyword automates a lot of our manual work
function userCreator(names, score) {
    this.name = name;
    this.score = score;
}

userCreator.prototype
userCreator.prototype.increment = function () {
    this.score++;
}
const user1 = new userCreator("Will", 3);