const myLibrary = [];
const addBook = document.getElementById("newBook");
const bookForm = document.getElementById("bookForm");
const displayBooks = document.getElementById("bookCardDisplay");
const submitButton = document.getElementById("submitNewBook");
const titleOfBook = document.getElementById("addBookTitle");
const authorOfBook = document.getElementById("addBookAuthor");
const pagesOfBook = document.getElementById("addBookPages");
const bookRead = document.getElementById("addBookRead");
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
    addUserDetailsToArray();
    displayBooksOnPage();
  }
})

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  function info() {
    return this.title, this.author, this.pages, this.read;
  }
} 

function addBookToLibrary() {
  addBook.style["background-color"]="red";
  newBookForm=true;
}

function addUserDetailsToArray () {
  const newBookForArray = new Book (titleOfBook.value, authorOfBook.value, pagesOfBook.value, bookRead.value);
  myLibrary.push(newBookForArray);
  console.log(myLibrary);

}

function displayBooksOnPage() {
  const newBook = document.createElement("div");
  newBook.classList="book";
  newBook.id=myLibrary.length+1;
  newBook.style.width="150px";
  newBook.style.height="200px";
  newBook.style.background="white";
  newBook.style.border="1px solid black";
  newBook.style["border-radius"]="0% 10% 10% 0%";
  newBook.style.margin="5px";
  const newBookText = document.createElement("div");
  newBookText.innerText="Title: " + titleOfBook.value + "\nAuthor: " + authorOfBook.value + "\nNo. of pages: " + pagesOfBook.value;
  const removeBookButton = document.createElement("button");
  removeBookButton.classList="buttons";
  removeBookButton.style.margin="20px";
  removeBookButton.innerText="REMOVE BOOK";
  removeBookButton.addEventListener("click", ()=>{
    removedItem=this.id;
    console.log(this.id);
    removeThisBook();
  })
  displayBooks.appendChild(newBook);
  newBook.appendChild(newBookText);
  newBook.appendChild(removeBookButton);
}

function removeThisBook() {
  myLibrary.splice(removedItem ,1);
  console.log(myLibrary);
}