//select function
function element(select){
    const element = document.querySelector(select);

    if(select){
        
        return element;
    } 
    throw new Error (`selected element "${select}" does not exist`);
        
    
}
//create function
function create(create){
    const cr = document.createElement(create);
    if(cr){
        return cr;
    }
}

//getting random value from array. from stackoverflow 
const months = ["January", "February", "March", "April", "May", "June", "July"];

const rando = Math.floor(Math.random() * months.length);
/* console.log(months[rando]); */


//get headers
const header1 = element('.header1');
const header2 = element('.header2');
const header3 = element('.header3');
const holder = element('.holder');





//get button
const btn = element('.btn');

//Async event to change header colors
btn.addEventListener('click', ()=>{
   change(header2,'cyan',500)
   .then(()=>bk(header2,'Gold',500))
   .then(()=>bk(holder,'lightgray', 100))
   .then(()=>change(header2, '', 1000))
   .then(()=>bk(header1, 'black', 500))
   .then(()=>change(header1, 'white', 1000))
   .then(()=>bk(header3,'red',500))
   .then(()=>change(header3,'green',500))
   .then(()=>bk(header1,'',1000))
   .then(()=>change(header1,'',1000))
   .then(()=>bk(header2,'',1000))
   .then(()=>change(header2,'',1000))
   .then(()=>bk(header3,'',1000))
   .then(()=>change(header3,'',2000))
   .then(()=>bk(holder, '', 1000))
   ;
  });1

//promise function to change text color
function change(element,color,time,background){
    return new Promise((resolve,reject)=>{
        if(element){
            setTimeout(()=>{
                element.style.color = color;
                resolve()
            },time);
        }else {
            reject(new Error(`${element} does not exist`));
        }
    });
}

//promise function to change background color 
function bk(element,background,time){
    return new Promise((resolve,reject)=>{
        if(element){
            setTimeout(()=>{
                element.style.backgroundColor = background;
            },time);
            resolve();
        }else{
            reject(new Error(`${element} does not exist`));
        }
    });
}


 
  