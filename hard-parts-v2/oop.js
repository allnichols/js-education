// Objects - store functions with their associated data!
// This is the principle of encapsulation - and it’s going to transform how we can ‘reason about’ our code
const user1 = {
    name: "Will",
    score: 3,
    increment: function () { user1.score++; }
};
user1.increment();
// Let's keep creating our objects. What alternative techniques do we have for creating objects?

// Creating user2 user dot notation
const user2 = {}; //create an empty object
//assign properties to that object
user2.name = "Tim";
user2.score = 6;
user2.increment = function () {
    user2.score++;
};


// Creating user3 using Object.create
const user3 = Object.create(null);
user3.name = "Eva";
user3.score = 9;
user3.increment = function () {
    user3.score++;
};
// console.log(user3);
// Object.create is going to give us fine-grained control over our object later on
// Our code is getting repetitive, we're breaking our DRY principle. And suppose we have millions of users!
// What could we do?

// Solution 1. Generate objects using a function - also redundent 
function userCreator(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function () {
        newUser.score++;
    };
    return newUser;
};
const user4 = userCreator("Will", 3);
const user5 = userCreator("Tim", 5);
user4.increment()