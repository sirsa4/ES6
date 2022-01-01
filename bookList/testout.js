//helper function
function Element(select){
    const element = document.querySelector(select);

    if(select){
        return element;
    }
    throw new Error (`selected element "${select}" does not exist`);
}

//book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI constructor. empty constructor
function Ui(){
    this.form = Element('#book-form');
 

    this.form.addEventListener('submit', function(e){
        console.log('hi');

     /*    //get input fields values
        const title = Element('#title').value;
        const author = Element('#author').value;
        const isbn = Element('#isbn').value;
        console.log(title, author, isbn); */

        //book instance
     /*    const book = new Book(title, author, isbn); */
 

        //Ui instance
        /* const ui = new Ui(); */

        //add book to Ui 
        /* ui.this.addBook(book); */ 
      


        e.preventDefault();
    });
}

//functionality is written in Ui prototypes




Ui.prototype.addBook = function(){
       //get input fields values
       const title = Element('#title').value;
       const author = Element('#author').value;
       const isbn = Element('#isbn').value;
       console.log(title, author, isbn);

    const list = Element('#book-list');
    const row = document.createElement('td');
    row.className = 'list';
    list.innerHTML = `
    <td class="title">${title.value}</td>
    <td class="author">${author.value}</td>
    <td class="isbn">${isbn.value}</td>
    <a class="delete">X</a>
    `
    ;
    console.log(title);
}

function play(){
    const ui = new Ui();
    const book = new Book(title, author, isbn);
    ui.addBook(book);
    console.log(ui);
    return ui;
}

play();