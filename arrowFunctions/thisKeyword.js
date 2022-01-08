//arrow functions and 'this' keyword
/*
    -difference is that 'this' normal functions has scope of where it is called. To fix this, we could make variabel that stores 'this' keyword, variabel usually called 'self'

    -Arrow function wont need variabel to store 'this' keyword.
 */


class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    //methods

    //regular method
    sayHi() {
        console.log(`Hello, I am ${this.name} and my age is ${this.age} years old`);
    }

    //setTimeout() with regular function
    /*
        -Here the 'this' keyword will not refer to the Person object since the method is called outside in the global scope. So 'this' here is empty, undefined
     */
    sayBye(){
        setTimeout(function(){
            console.log(`Hello, my name is ${this.name} and I am saying my goodbyes now`);
        },500);
    }

    //with arrow function
    /*
        -'this' keyword now in arrow function refers to where setTimeout() is running which is in the Person object. 
     */
    back(){
        setTimeout(()=>{
            console.log(`No, ${this.name} will not be back soon`);
        },500);
    }

    
}

//new object
const john = new Person('john', 30)

//running methods
john.sayHi();
john.sayBye();
john.back();

console.log(john);