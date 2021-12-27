//helper function
function getElement(select){
    const element = document.querySelector(select);

    if(element){
        return element;
    }
    throw new Error(`${select} does not exist`);
}

//nav constructor
function HTML(element){
    console.log(element);
    this.nav = getElement('.nav');
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

    //first <li>
    this.home = this.nav.querySelector('.a-link');
    //2nd <li>
    this.products = this.nav.querySelector('li:nth-child(2)');
    //bind function
    this.mainContent = this.mainPara.bind(this);
    this.productPage = this.product.bind(this);
    console.log(this.products);

    //main
 this.home.addEventListener('click', this.mainContent);
 this.products.addEventListener('click', this.productPage);
    
    
}

//prototype for home page
HTML.prototype.mainPara = function(){
    this.main.innerHTML = '';
    
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

   //other pages being able to clicked from here
   this.products.addEventListener('click', this.productPage);
    
}

//prototype for products page
HTML.prototype.product = function(){
    console.log('product page working');
    //clear main area from elements already there first
    this.main.innerHTML = '';
    //main article
    this.article = document.createElement('article');
    this.article.className = 'article';

    //wordpress section
    this.wordSection = document.createElement('section');
    this.wordSection.className = 'word-container';

    this.wordHead = document.createElement('h3');
    this.wordHead.innerHTML = 'WordPress';
    this.wordSection.appendChild(this.wordHead);

    //article append
    this.article.appendChild(this.wordSection);

    //main append
    this.main.appendChild(this.article);

    //remove event
    this.products.removeEventListener('click', this.productPage);

    //other events being able to clicked on
    this.home.addEventListener('click', this.mainContent);
}

const html = new HTML(getElement('.container'));


//add to header
const header = document.querySelector('.header');
console.log(header);

header.innerHTML = 
`<h1 class="top-header">Template Strings</h1>
`
;

