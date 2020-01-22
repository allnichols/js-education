// Solution 2: Using the prototype chain
function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore); // link is made here by passing in the object userFunctionStore
    newUser.name = name;
    newUser.score = score;
    return newUser;
};
const userFunctionStore = {
    increment: function () { this.score++; },
    login: function () { console.log("Logged in"); }
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
console.log(user1.hasOwnProperty('name'));