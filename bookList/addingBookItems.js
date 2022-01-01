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
 

}

//prototype
Ui.prototype.addBook = function(book){

    const list = Element('#book-list');
    const row = document.createElement('tr');
    row.className = 'list';
    row.innerHTML = `
    <td class="title">${book.title}</td>
    <td class="author">${book.author}</td>
    <td class="isbn">${book.isbn}</td>
    <a class="delete" href="#">X</a>
    `
    ;
    list.appendChild(row);
    console.log(row);
}

//submit event

//form variable
const form = Element('#book-form');
console.log(form);

form.addEventListener('submit', function(e){
    console.log('hi');

    //get input fields values
    const title = Element('#title').value;
    const author = Element('#author').value;
    const isbn = Element('#isbn').value;
    console.log(title, author, isbn);

    //book instance
    const book = new Book(title, author, isbn);


    //Ui instance
    const ui = new Ui();
    console.log(ui);

    //add book to Ui 
     ui.addBook(book); 
  


    e.preventDefault();
});

//functionality is written in Ui prototypes






