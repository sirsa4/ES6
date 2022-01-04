//validation
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

//show alert prototype
Ui.prototype.showAlert = function(message, className){
    //construct elements to show error
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.style.textAlign = 'center';
    div.appendChild(document.createTextNode(message));

    //append div to container
    const container = Element('.container');
    const form = Element('#book-form');
    
    /*
    insertBefore(what). takes 2 parameters. first parameter: what u want to insert, second parameter: what u want to insert before the first parameter. In this case. div variabel is inserted and form variabel before it.
     */
    container.insertBefore(div, form);

    //remove after 3seconds with setTimeout()
    setTimeout(function(){
        Element('.alert').remove();
    },3000);
}

//clear input fields
Ui.prototype.clear = function (){
    Element('#title').value = '';
    Element('#author').value = '';
    Element('#isbn').value = '';
  
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

    //validation with if()
    if(title === '' || author === '' || isbn === ''){
        /* alert(`All fields need to be filled. Pls do so`); */
        ui.showAlert('pls fill input fields', 'error');
    } else {
         //add book to Ui 
     ui.addBook(book); 

     //show new book added alert
     ui.showAlert('New Book Added', 'success');

     //clear the input fields
     ui.clear();
    }


   
  


    e.preventDefault();
});

//functionality is written in Ui prototypes






