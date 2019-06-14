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

class Instructor extends Person{ 
    constructor(instattr) {
        super(instattr); //the binding part

        this.specialty = instattr.specialty;
        this.favLanguage = instattr.favLanguage;
        this.catchPhrase = instattr.catchPhrase;
  }
  
  demo(subject){ //function
      return `Today we are learning about 
      ${this.subject} where subject is the param passed in.`
    }

   grade(student, subject){ //function
        return `${Student.name} receives a perfect score on ${Student.subject}.`
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

class PM extends Instructor{ 
    constructor(pmattr) {
        super(pmattr); //the binding part

    this.gradClassName = pmattr.gradClassName;
    this.favInstructor = pmattr.favInstructor;
  }
  
  standUp(subject){ //function
      return `${name} announces to ${channel}, @channel standy times!​​​​​`
    }

    debugsCode(student,subject){ //function
        return `${this.name} debugs ${student.name}'s code on ${subject}`
      }
      
}

// const sailormoon = new Person({
//     // name = 'sailormoon',
//     location = 'Japan',
//     age= '15',
//   });

const dan = new Instructor({
    name: 'sailormercury',
    location: 'Japan',
    age: '15',
    specialty: 'Redux',
    favLanguage : 'JavaScript',
    catchPhrase : 'I forgot the homies',
  });

  const goku = new Student({
    name : 'sailorvenus',
    location : 'Japan',
    age : '15',
    previousBackground : 'god knows',
    className : 'lower class',
    favSubjects : 'nutrition',
  });

  const austin = new PM({
    name : 'sailorjupiter',
    location : 'Japan',
    age : '15',
    gradClassName : 'Web21',
    favInstructor : 'Yoda',
  });



  //// ----- Data Extracted from Slack group -----//////////


  const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

  const isaiah = new Student({
    name: 'Isaiah',
    age: 18,
    location: 'Florida',
    previousBackground: 'High School last month',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});
    const kevin = new Student({
    name: "Kevin",
    age: 28,
    location: "California",
    previousBackground: "Table Games Dealer",
    className: "WEB21",
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});
    const nisa = new Student({
    name: 'Nisa',
    age: 25,
    location: 'Ohio',
    previousBackground: 'Debt Collector',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});

    const joscelyn = new Student({
    name: "Joscelyn",
    age: 29,
    location: "California",
    previousBackground: "English teacher",
    className: 'Web21',
    favSubjects: ["Computer Science", "Philosophy", "English"],
});

  const marguel = new ProjectManager({
    name: 'Marguel',
    age: 'Maybe 26',
    gradClassName: 'WEBPT2',
    favInstructor: 'Me?',
    location: 'California',
    specialty: 'React',
    favLanguage: 'JavaScript, Python, Elm etc.',
    catchPhrase: "Practice Flex Zombies !!!",
});

  const brandon = new ProjectManager({
    name: 'Brandon',
    age: '34',
    gradClassName: 'WEB18',
    favInstructor: 'Professor Lambda',
    location: 'Maine',
    specialty: 'Redux',
    favLanguage: 'JavaScript, C++, Python.',
    catchPhrase: "You shall not pass!",
});

    const mary = new ProjectManager({
    name: 'Mary',
    age: '24',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'New York',
    specialty: 'Express and Node.js',
    favLanguage: 'Javascript',
    catchPhrase: "That looks AWESOME",
});

    const christian = new ProjectManager({
    name: 'Christian',
    age: '32',
    gradClassName: 'WEB18',
    favInstructor: 'Every Instructor in Lambda',
    location: 'Seattle, WA',
    specialty: 'Data Structures & Algorithms',
    favLanguage: 'JavaScript',
    catchPhrase: "Dont forget your daily commit.",
});

    const pat = new ProjectManager({
    name: 'Pat',
    age: '38',
    gradClassName: 'WEB18',
    favInstructor: 'Brett Madrid',
    location: 'Petaluma, Ca',
    specialty: 'Empathetic to the struggle of Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lets google that together.'
});

    const darren = new ProjectManager({
    name: 'Darren',
    age: '25',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'North Carolina',
    specialty: 'React',
    favLanguage: 'Javascript',
    catchPhrase: 'Gang. Gang.',
});

    const austin = new ProjectManager({
    name: 'Austin',
    age: '23',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'Somewhere',
    specialty: 'Java',
    favLanguage: 'Java',
    catchPhrase: ":eggplant:",
});




console.log()





  console.log(austin.debugsCode(goku, "Javascript"));
//   console.log(austin.debugsCode(goku, "Javascript"));