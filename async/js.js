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
const src = [    
    'https://images.unsplash.com/photo-1641400504445-99dc922bbe63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1625142536105-715f16197e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    'https://images.unsplash.com/photo-1625142536264-4488bdf6f5e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    'https://images.unsplash.com/photo-1527519135413-1e146b552e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1507025793886-e20cd4685fae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    'https://images.unsplash.com/photo-1599487958919-b7057e6f44e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1572218899997-01b4956b63f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    'https://images.unsplash.com/photo-1545145311-416b4c775a4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1599489302312-453e1fd2a175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    'https://images.unsplash.com/photo-1565747680668-5ca437089eba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80',
    'https://images.unsplash.com/photo-1640682560188-a18a3a8dfd01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    'https://images.unsplash.com/photo-1639748217730-abf25c3ea593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
];
const randomImg = Math.floor(Math.random() * src.length);

//access img
console.log(src[randomImg]);





//Img
/* const body = document.body;
const container = create('div');
container.appendChild(random);
body.appendChild(container); */






//get button
const btn = element('.btn');


//promise function for random image
function randomImage(){
 return new Promise((resolve, reject)=>{
     //random image
    let random = new Image();

    //load and error event for image
    random.addEventListener('load', ()=>{
        console.log('Image loaded successfully');
    });

    random.addEventListener('error', ()=>{
        console.log('Image load failed');
    });

    random.src = src[randomImg];
 });
}

//Async event to images
btn.addEventListener('click', ()=>{
    randomImage();
  });





 
  