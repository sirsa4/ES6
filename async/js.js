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
btn.addEventListener('click', function(){
    setTimeout(()=>{
        body.style.backgroundColor = 'red';
        setTimeout(()=>{
            body.style.backgroundColor = 'green';
            header3.style.backgroundColor = 'gold';
            setTimeout(()=>{
                body.style.backgroundColor = 'gray';
                header3.style.color = 'red';
                header1.style.backgroundColor = 'black';
                header2.style.backgroundColor = 'purple';
            },1000);
        },1000);
        setTimeout(()=>{
            body.style.backgroundColor = 'pink';
            header3.style.backgroundColor = '';
            header1.style.color = '';
            setTimeout(()=>{
                body.style.backgroundColor = 'cyan';
                header3.style.color = '';
                header2.style.backgroundColor = '';
                setTimeout(() => {
                    body.style.backgroundColor = 'magenta';
                    header1.style.backgroundColor = '';
                    header2.style.color = '';
                    setTimeout(() => {
                        body.style.backgroundColor = '';
                    },1000);
                    
                },500);

            },1000);
        },4000);
        setTimeout(()=>{
            header1.style.color = 'white';
            header2.style.color = 'green';
        },500);
    },100);
});
