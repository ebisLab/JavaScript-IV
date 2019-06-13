// CODE here for your Lambda Classes

class Person{ //base-class
    constructor(persattr) {

    this.name = persattr.name;
    this.location = persattr.location;
    this.age= persattr.age;
  }
  
  speak(){ //function
      return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructors extends Person{ 
    constructor(instattr) {
        super(instattr); //the binding part

    this.specialty = instattr.specialty;
    this.favLanguage = instattr.favLanguage;
    this.catchPhrase = instattr.catchPhrase;
  }
  
  demo(subject){ //function
      console.log(`Today we are learning about 
      ${this.subject} where subject is the param passed in.`)
    }

   grade(student, subject){ //function
        console.log(`${this.name} receives a perfect score on ${this.subject}.`)
      }
}

class Student extends Person{ 
    constructor(studattr) {
        super(studattr); //the binding part

    this.previousBackground = studattr.previousBackground;
    this.className = studattr.className;
    this.favSubjects = studattr.favSubjects;
  }
  
  listsSubjects(){ //function
      console.log(`${this.favSubjects} `) //LISTS OUT FAV SUBJECT ONE BY ONE
    }

    PRAssignment(subject){ //function
        console.log(`${student.name} has submitted a PR for ${this.subject}`)
      }

    sprintChallenge(subject){ //function
        console.log(`${student.name} has begun sprint challenge on${this.subject}`)
      }
}

class PM extends Instructors{ 
    constructor(pmattr) {
        super(pmattr); //the binding part

    this.gradClassName = pmattr.gradClassName;
    this.favInstructor = pmattr.favInstructor;
  }
  
  standUp(subject){ //function
      console.log(`${name} announces to ${channel}, @channel standy times!​​​​​`)
    }

    debugsCode(student, subject){ //function
        console.log(`${name} debugs ${student.name}'s code on ${subject}`)
      }
      
}

const sailormoon = new Person({
    name = 'sailormoon';
    location = 'Japan';
    age= '15';
  });

const dan = new Instructor({
    specialty = 'Redux',
    favLanguage = 'JavaScript',
    catchPhrase = 'I forgot the homies',
  });
