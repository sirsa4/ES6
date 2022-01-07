//arrow function basics

//normal function
function sayHello(){
    console.log('Hello There');
}
sayHello();

//one line arrow function. automatic return.
const sayHi = () => console.log('Hello first Arrow Function');
sayHi();

//1 parameter arrow function. No parentes or curly parentes needed
function oneParameter(num){
    const sum = `Normal function one parameter shows: ${num + 5}`;
    console.log(sum);
}

oneParameter(20)

const onePara = num => num + 5;

//assign to variabel
const newNumber = onePara(2);

//log it
console.log(newNumber);

//2 parameter arrow function. function parantes and curly parentes needed

const twoPara = (num1,num2) => {
    const sum = `Sum is ${num1 + num2}`;

    //return is needed. otherwise undefined will be returned from function
    return sum;
}

const total = twoPara(5,10);
console.log(total);

//return object
//object needs to be written inside parentes
const object = () => ({name: 'yaya', age: 26});

//create person object from the arrow function
const person = object();
console.log(person);

//object with more than one paremeter
const newObject = (firstName,age) => ({name: firstName, age: age});

//assign to new person
const sanogo = newObject('sanogo', 28);
console.log(sanogo);


//arrow functions as callback functions with filter method, with 1 parameter
const numbers = [6,5,4,3,2,1,0];

//with filter()
const moreThanThree = numbers.filter(num => num > 3);
console.log(moreThanThree);

//arrow functions as callback functions, with 1 parameter
const lessThanFour = numbers.filter((num, index)=>{
    console.log(index);
    
    //explicit return
    return num < 4;
});

console.log(lessThanFour);

//Arrow function as callback function for addEventListener

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => console.log('Button clicked'));
