//helper function
function getElement(select){
    const element = document.querySelector(select);

    if(element){
        return element;
    }
    throw new Error(`${select} does not exist`);
}

//nav constructor
function Nav(element){
    console.log(element);
    this.nav = element;
    this.main = getElement('.main');
    this.ul = document.createElement('ul');
    this.ul.className = 'ul';
    console.log(this.ul);
    this.nav.appendChild(this.ul);
    this.navItems = ['Home', 'Products', 'About', 'Contact'];
    this.insertNavnItems = this.navItems.map(function(item){
        return `<li><a class="a-link" href="#">${item}</a></li>`;
    });
    this.ul.innerHTML = this.insertNavnItems.join('');

    //first li
    this.home = this.nav.querySelector('.a-link');
    this.products = this.home.nextElementSibling;
    //bind function
    this.mainContent = this.mainPara.bind(this);
    console.log(this.mainContent);

    //main
 this.home.addEventListener('click', this.mainContent);
    
    
}

//prototypes
Nav.prototype.mainPara = function(){
    
   this.container = document.createElement('div');
   this.container.className = 'main-div';
   this.pHeader = document.createElement('h2');
   this.pHeader.innerHTML = 'This is home page';
   this.container.appendChild(this.pHeader);
   this.p = document.createElement('p');
   this.p.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,";
   this.container.appendChild(this.p);
   this.main.appendChild(this.container)
   /*   this.container.appendChild('ji'); */
   console.log(this.container);

   //remove event so it cant be create again and again
   this.home.removeEventListener('click', this.mainContent);
    
}

const navigation = new Nav(getElement('.nav'));


//add to header
const header = document.querySelector('.header');
console.log(header);

header.innerHTML = 
`<h1 class="top-header">Template Strings</h1>
`
;

//navigasjon og ul
/* const nav = document.querySelector('.nav');
const ul = document.createElement('ul');

//ul class name
ul.className = 'ul';


//navbar items
const navItems = ['Home', 'Products', 'About', 'Contact'];


//ul appended to <nav>
nav.appendChild(ul);

//
const navInsert = navItems.map(function(item){
    return `<li><a class"a-link">${item}</a></li>`;
    
});

//<li> printed in ul tag
ul.innerHTML = navInsert.join('');
 */