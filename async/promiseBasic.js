function element(select){
    const element = document.querySelector(select);

    if(select){
        
        return element;
    } 
    throw new Error (`selected element "${select}" does not exist`);
        
    
}
//get headers

const header1 = element('.header1');
const header2 = element('.header2');
const header3 = element('.header3');

const body = document.body;

//get button
const btn = element('.btn');

//Async event to change colors
btn.addEventListener('click', ()=>{
  console.log('working');
});


//promsises basics

/*
    -promise is an inbuildt javascript method which.
    -new Promise() takes 2 paramaters which can have any name. normally called 'resolve and reject'.
    -the first parameter is the resolve when the promise is complete, the state would 'fulfilled'.
    -the second parameter 'reject' is when the promise is fails, the state would be rejected.
    -.then() function is  used to get the complete promise.
    -.catch() is used to get the error when promise fails
 */
const firstPromise = new Promise((reslove, reject)=>{
    const variable = true;

    if(variable){
        reslove(`${variable} is true`);
    } else {
        reject(`${variable} is not true at all`);
    }
});

firstPromise.then(()=>{
    console.log('this is working');
}).catch(()=>{
    console.log('this is not working');
})
console.log(firstPromise);