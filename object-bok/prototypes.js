//constructor example
//with prototype inheritance

//container 
const container = document.querySelector('.container');

//person constructor, common constructor
function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getsOlder = function(){
        this.age++;
    }
}

//Person prototype
Person.prototype.greeting = function(){
    return `Hello. My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`;
}

//studen constructor
function Student(firstName, lastName, age){
    const student = new Person(firstName, lastName, age);

    //property
    student.daysMissed = 0;

    //method
    student.missed = function(){
        student.daysMissed++;
    }

    //return the const student. otherwise function returns empty object.
    return student;

}

//inherit Person greeting prototype to Student constructor
Student.prototype = Object.create(Person.prototype);

//make inherited prototype belong to new constructor
Student.prototype.constructor = Student;

//teacher constructor
function Teacher(firstName, lastName, age, employenumber){
    const teacher = new Person(firstName, lastName, age)
    teacher.employenumber = employenumber;
    return teacher;
}


//student instance
const luke = new Student('Luke', 'Skywalker', 25);
console.log(luke.greeting());
luke.greeting();

//run student method of days missed
luke.missed();


//teacher instance
const mark = new Teacher('Mark', 'Veduka', 25, 100123);
console.log(mark);


console.log(luke);