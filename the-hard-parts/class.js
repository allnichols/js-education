// does essentially the same thing as oop3.js
// diff. constructor is the function which creates the prototype object
// then you can attach methods to the prototype by simply listing inside the class after the constructor function.
class User {
    constructor (name, score){
        this.name = name;
        this.score = score;
    }
    increment (){
        this.score++;
    }
    login (){
        console.log("login");
    }
 }
let user1 = new User("Eva", 9);
user1.increment();
user1.sayNo = function(){
    console.log('No!')
}
user1.sayNo();