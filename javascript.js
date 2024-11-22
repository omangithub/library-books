const myLibrary = [];
const addBook = document.getElementById("newBook");
const bookForm = document.getElementById("bookForm");
const displayBooks = document.getElementById("bookCardDisplay");
const submitButton = document.getElementById("submitNewBook");
const titleOfBook = document.getElementById("addBookTitle");
const authorOfBook = document.getElementById("addBookAuthor");
const pagesOfBook = document.getElementById("addBookPages");
const topBoxAlerts = document.getElementById("topBoxText");
let newBookForm=false;
let removedItem="";

addBook.addEventListener("click", ()=> {
  if (newBookForm) {
    addBook.style.background="aliceblue";
    newBookForm=false;
  } else {
  addBookToLibrary()
  }
})

submitButton.addEventListener("click", ()=>{
  if (newBookForm) {
    if (titleOfBook.value !=="" && authorOfBook.value !=='' && pagesOfBook.value !=="") {
    addUserDetailsToArray();
    displayBooksOnPage();
    } else {
      topBoxAlerts.innerText="Please enter details into all fields of the form"
    }
  }
})

class Book {
  constructor (title,author,pages,read) {
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read; 
  }

  info() {
    return this.title, this.author, this.pages, this.read;
  }
}

// switch the following to classes

/*function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  function info() {
    return this.title, this.author, this.pages, this.read;
  }
} 
*/
myLibrary[0] = new Book ("Harry Potter", "J K Rowling", 250, false);

function addBookToLibrary() {
  addBook.style["background-color"]="red";
  newBookForm=true;
}


function addUserDetailsToArray () {
  const newBookForArray = new Book (titleOfBook.value, authorOfBook.value, pagesOfBook.value, false);
  myLibrary.push(newBookForArray);
  console.log(myLibrary);

}

function displayBooksOnPage() {
  while (displayBooks.firstChild) {
    displayBooks.removeChild(displayBooks.lastChild);
  }
  if(myLibrary.length!==0){
  for(let i=0;i<myLibrary.length;i++) {  
  const newBook = document.createElement("div");
  newBook.classList="book";
  newBook.id="book" + i;
  newBook.style.width="150px";
  newBook.style.height="200px";
  newBook.style.border="1px solid black";
  newBook.style["border-radius"]="0% 10% 10% 0%";
  newBook.style.margin="5px";
  newBook.style.background="white";
  const newBookText = document.createElement("div");
  newBookText.style.padding="0px 5px 0px 5px";
  newBookText.innerText="Title: " + myLibrary[i].title + "\nAuthor: " + myLibrary[i].author + "\nNo. of pages: " + myLibrary[i].pages;
  const removeBookButton = document.createElement("button");
  removeBookButton.classList="buttons";
  removeBookButton.style.margin="20px";
  removeBookButton.id=i;
  removeBookButton.innerText="REMOVE BOOK";
  removeBookButton.addEventListener("click", (e)=>{
    removedItem=e.target.id;
    removeThisBook();
    console.log(myLibrary.length);
    displayBooksOnPage()
  })
  const markReadBox = document.createElement("div");
  if (myLibrary[i].read===true) {
    markReadBox.style.background="yellow";
    markReadBox.innerText="MARK UNREAD"
  } else {
    markReadBox.style.background="white";
    markReadBox.innerText="MARK READ"
  }
  markReadBox.classList="readBox";
  markReadBox.style.textAlign="right";
  markReadBox.style.width="100%";
  markReadBox.style.height="20px";
  markReadBox.style.border="solid 1px black";
  markReadBox.style.margin="0px 5px 0px 0px";
  markReadBox.addEventListener("click", ()=>{
    myLibrary[i].toggleRead();
    displayBooksOnPage();
  })
  displayBooks.appendChild(newBook);
  newBook.appendChild(newBookText);
  newBook.appendChild(removeBookButton);
  newBook.appendChild(markReadBox);
}}
function removeThisBook() {
  myLibrary.splice(removedItem ,1);
}}

Book.prototype.toggleRead = function () {
  console.log(this.read);
  if (this.read===false) {
    this.read=true;
  } else {
    this.read=false;
  }
}

displayBooksOnPage();