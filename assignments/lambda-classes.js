// CODE here for your Lambda Classes

class Person {
    constructor(user){
        this.name = user.name;
        this.age = user.age;
        this.location = user.location;
        this.gender = user.gender;
    }
    speak(){
        return `Hello my name is ${this.name} I am from this location.`;
    }
}

class Instructor extends Person {
    constructor(staff) {
        super(staff);
        this.speacility = staff.speacility;
        this.favLanguage = staff.favLanguage;
        this.catchPhrase = staff.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}!`;
    }
    grade(student, subject){
        return `${student.name}receives a perfect score on ${subject}!`
    }
    theWheelOfFortune(student) {
        student.grade += Math.ceil(Math.random() * 11);
        return `${student.name} has ${student.grade}%`
    }
    
}

class Student extends Person {
    constructor(studentAtts){
        super(studentAtts);
        this.previousBackground = studentAtts.previousBackground;
        this.className = studentAtts.className;
        this.favSubjects = studentAtts.favSubjects;
        this.listsSubjects = studentAtts.listsSubjects;
        this.grade = studentAtts.grade;
    }

        PRAssignment(subject){
            return `${this.name} has submitted a PR for ${subject}.`
        }
        sprintChallenge(subject){
            return `${this.name} has begun sprint challenge on ${subject}.`
        }
        tellGrade() {
            return `${this.name} has ${this.grade}%`
        }
        graduate(){
            if (this.grade > 69) {
            return `${this.name} is ready to graduate!`
        } else {
            return `${this.name} has a ${this.grade}%. The requirement to graduate is 70%. Keep studying!`
        }
    }
}

class ProjectManager extends Instructor{
    constructor(mentor){
    super(mentor);
    this.gradClassName = mentor.gradClassName;
    this.favInstructor = mentor.favInstructor;
    this.standUp = mentor.standUp;
    }
  debugsCode(student, subject){
      return `${this.name} debugs ${student.name}'s code on ${subject}.`
  }
} 

const meg = new Person({
    name: 'Meg',
    location: 'Manhattan',
    age: 35,
    gender: 'F',
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `Seriously`
});

const peter = new Person({
    name: 'Peter',
    location: 'Brooklyn',
    age: 32,
    gender: 'M',
    favLanguage: 'CSS',
    specialty: 'Full Stack',
    catchPhrase: `Hey Hey Hey`
});

const lois = new Person({
    name: 'Lois',
    location: 'Long Island',
    age: 27,
    gender: 'F',
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: `Could I be at  the mall?`
});

const jennifer = new Instructor({
    name: 'Jennifer',
    location: 'Bronx',
    age: 37,
    gender: 'F',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Jennny from the block`
});

const antonio = new Instructor({
    name: 'Antonio',
    location: 'Queens',
    age: 32,
    gender: 'M',
    favLanguage: 'Python',
    specialty: 'Network Security',
    catchPhrase: `I'm the expert of this!`
});

const mike = new Instructor({
    name: 'Mike',
    location: 'Jersey City',
    age: 25,
    gender: 'M',
    favLanguage: 'Ruby',
    specialty: 'Back-end',
    catchPhrase: `Don't worry!`
});

const april = new Student({
    name: 'April',
    location: 'Hoboken',
    age: 20,
    gender: 'F',
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: `Oufff`,
    grade: 40
});

const neal = new Student({
    name: 'Neal',
    location: 'Staten Island',
    age: 32,
    gender: 'M',
    favLanguage: 'Python',
    specialty: 'Network Security',
    catchPhrase: `That's awesome!`,
    grade: 65
});

const orlando = new Student({
    name: 'Orlando',
    location: 'Boston',
    age: 31,
    gender: 'M',
    favLanguage: 'Ruby',
    specialty: 'Back-end',
    catchPhrase: `Let's go team!`,
    grade: 55
});

const aldwin = new ProjectManager({
    name: 'Aldwin',
    location: 'Florida',
    age: 29,
    gender: 'M',
    favLanguage: 'Django',
    specialty: 'Front-end',
    catchPhrase: `Yes!!`
});

const simon = new ProjectManager({
    name: 'Simon',
    location: 'Raleigh',
    age: 28,
    gender: 'M',
    favLanguage: 'Markdown',
    specialty: 'Network Security',
    catchPhrase: `Simon say`
});

const juan = new ProjectManager({
    name: 'Juan',
    location: 'Charlotte',
    age: 29,
    gender: 'M',
    favLanguage: 'C#',
    specialty: 'Back-end',
    catchPhrase: `Let's code!`
});


console.log(meg.speak());
console.log(peter.speak());
console.log(mike.demo("Javascript Fundamentals"));
console.log(mike.grade(aldwin, "Preprocessors"));
console.log(april.PRAssignment("React"));
console.log(neal.sprintChallenge("Responsive Design"));
console.log(simon.debugsCode(peter, "Semantic HTML"));
console.log(orlando.tellGrade());
console.log(neal.tellGrade());
console.log(simon.theWheelOfFortune(simon));
console.log(jennifer.theWheelOfFortune(jennifer));
console.log(antonio.theWheelOfFortune(april));
console.log(orlando.graduate());
console.log(neal.graduate());