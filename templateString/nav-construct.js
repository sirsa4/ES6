//helper function
function getElement(select){
    const element = document.querySelector(select);

    if(element){
        return element;
    }
    throw new Error(`${select} does not exist`);
}

//add to header
const header = document.querySelector('.header');
console.log(header);

header.innerHTML = 
`<h1 class="top-header">Template Strings</h1>
`
;

//navigasjon og ul
const nav = document.querySelector('.nav');
const ul = document.createElement('ul');

//ul class name
ul.className = 'ul';


//navbar items
const navItems = ['Home', 'Products', 'About', 'Contact'];

console.log(ul);
//ul appended to <nav>
nav.appendChild(ul);

//
const navInsert = navItems.map(function(item){
    return `<li><a class"a-link">${item}</a></li>`;
    
});

//<li> printed in ul tag
ul.innerHTML = navInsert.join('');
