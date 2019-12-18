class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

class AnotherWorkshop extends Workshop {
  speakUp(msg) {
    super.ask(msg.toUpperCase());
  }
}

var deepJs = new Workshop("Kyle");
var reactJs = new Workshop("Suzy");

var JSRecentParts = new AnotherWorkshop("Kyle");

deepJs.ask("Is this a class");
reactJs.ask("Is this ok?");
JSRecentParts.speakUp("Is this getting better?");
