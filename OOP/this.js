function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  var myContext = {
    teacher: "Suzy",
    age: 23
  };
  ask.call(myContext, "why");
}

// console.log(otherClass());

var work1 = {
  teacher: "steve",
  ask: ask
};

var work2 = {
  teacher: "john",
  ask: ask
};

// work1.ask("Hello?");
// work2.ask("Hello?");

var thing = {
  person: "Max",
  ask: word => {
    console.log(this.person, word);
  }
};

thing.ask("hey");
