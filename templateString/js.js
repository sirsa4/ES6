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
    this.footer = getElement('.footer');
    console.log(this.footer);
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

    //tagged template literals
    this.array = [
        ['John Doe', 'Developer of WordPress', 39],
        ['Jane Doe', 'Developer of SquareSpace', 45]
    ];

    


    

   


    //navigation click buttons
 this.home.addEventListener('click', this.mainContent);
 this.products.addEventListener('click', this.productPage);
   
    //product page section clicks
    
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
    //clear main area from elements already there first
    this.main.innerHTML = '';
    //main article
    this.article = document.createElement('article');
    this.article.className = 'article';

    //product section bind functions
     this.wordPress = this.wordpress.bind(this);
     this.squareSpace = this.square.bind(this);
     this.wixFunction = this.wix.bind(this);

    //wordpress section
    this.wordSection = document.createElement('section');
    this.wordSection.className = 'word-container';

    this.wordHead = document.createElement('h3');
    this.wordHead.innerHTML = 'WordPress';
    this.wordSection.appendChild(this.wordHead);

    //square section
    this.squareSection = document.createElement('section');
    this.squareSection.className = 'square-container';

    this.squareHead = document.createElement('h3');
    this.squareHead.innerHTML = 'squareSpace';
    this.squareSection.appendChild(this.squareHead);

    //Wix section
    this.wixSection = document.createElement('section');
    this.wixSection.className = 'wix-container';

    this.wixHead = document.createElement('h3');
    this.wixHead.innerHTML = 'Wix';
    this.wixSection.appendChild(this.wixHead);
    

    //article append
    this.article.appendChild(this.wordSection);
    this.article.appendChild(this.squareSection);
    this.article.appendChild(this.wixSection);

    //products click events
    this.wordSection.addEventListener('click', this.wordPress);
    this.squareSection.addEventListener('click', this.squareSpace);
    this.wixSection.addEventListener('click', this.wixFunction);


    //main append
    this.main.appendChild(this.article);

    //remove event
    this.products.removeEventListener('click', this.productPage);

    //other events being able to clicked on
    this.home.addEventListener('click', this.mainContent);
}

  //section clicks
  
  //wordpress section function
  HTML.prototype.wordpress = function(){
    //wordpress img
    this.wordHead.innerHTML = '';
    this.wordHead2 = document.createElement('h3');
    this.wordHead2.innerHTML = 'WordPress';
    this.wordSection.appendChild(this.wordHead2);
    
    this.wordImg = document.createElement('img');
    this.wordImg.src = 'img/wordpress.PNG';
    
    //wordpress paragraph
    this.wordP = document.createElement('p');
    this.wordP.innerHTML = 'WordPress is not free anymore!';

    //wordpress buy button
    this.wordBuy = document.createElement('a');
    this.wordBuy.innerHTML = 'BUY NOW';
    this.wordBuy.href = '#';

    this.wordSection.appendChild(this.wordImg);
    this.wordSection.appendChild(this.wordP);
    this.wordSection.appendChild(this.wordBuy);

    this.wordSection.removeEventListener('click', this.wordPress);
    console.log(this.wordSection);
}
  //square section function
  HTML.prototype.square = function(){
    console.log('squareSpace section working');
    //wordpress img
    this.squareImg = document.createElement('img');
    this.squareImg.src = 'img/square.PNG';
    
    //wordpress paragraph
    this.squareP = document.createElement('p');
    this.squareP.innerHTML = 'Square is not free anymore!';

    //wordpress buy button
    this.squareBuy = document.createElement('a');
    this.squareBuy.innerHTML = 'BUY NOW';
    this.squareBuy.href = '#';
    console.log(this.squareSection);

    this.squareSection.appendChild(this.squareImg);
    this.squareSection.appendChild(this.squareP);
    this.squareSection.appendChild(this.squareBuy);

    this.squareSection.removeEventListener('click', this.squareSpace);

}
  //wix section function
  HTML.prototype.wix = function(){
    console.log('wix section working');
    //wordpress img
    this.wixImg = document.createElement('img');
    this.wixImg.src = 'img/wix.PNG';
    
    //wordpress paragraph
    this.wixP = document.createElement('p');
    this.wixP.innerHTML = 'Wix is never been free!';

    //wordpress buy button
    this.wixBuy = document.createElement('a');
    this.wixBuy.innerHTML = 'BUY NOW';
    this.wixBuy.href = '#';
    console.log(this.wixSection);

    this.wixSection.appendChild(this.wixImg);
    this.wixSection.appendChild(this.wixP);
    this.wixSection.appendChild(this.wixBuy);

    this.wixSection.removeEventListener('click', this.wixFunction);

}

//footer function
HTML.prototype.footerFunction = function(){
    this.name = document.createElement('p');
    this.name.className = 'footer-header';
    this.name.classList.add('box');
    this.name.innerText = 'Yahye Abdi 2021';
    this.footdiv = document.createElement('div');
    this.footer.appendChild(this.name);
    this.footer.appendChild(this.footdiv);

}


    


//
const html = new HTML(getElement('.container'));

//footer function running here
html.footerFunction();


//add to header
const header = document.querySelector('.header');
console.log(header);

header.innerHTML = 
`<h1 class="top-header">Template Strings</h1>
`
;

