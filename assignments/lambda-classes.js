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



class Instructors extends { //base-class
    constructor(instattr) {
        super(instattr); //the binding part

    this.specialty = instattr.specialty;
    this.favLanguage = instattr.favLanguage;
    this.catchPhrase = instattr.catchPhrase;
  }
  
  demo(subject){ //function
      console.log(`Today we are learning about 
      ${subject} where subject is the param passed in.`)
    }

   grade(student, subject){ //function
        console.log(`${this.name} receives a perfect score on ${this.subject}.`)
      }
}




// const fred = new Instructor({
//     name: 'Fred',
//     location: 'Bedrock',
//     age: 37,
//     favLanguage: 'JavaScript',
//     specialty: 'Front-end',
//     catchPhrase: `Don't forget the homies`
//   });
