'use strict';

// js stuff
// Write a constructor for making “Book” objects. We will revisit this in the project
// at the end of this lesson. Your book objects should have the
// book’s title, author, the number of pages, and whether or not you have read the book
const Boook = {
  book: 'pi',
  author: 'dur dur',
  pages: 3,
  read: 'not read yet',
};

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? 'has been read' : 'has not been read'
    }.`;
  };
}
// to add a prototype
Book.prototype.printTitle = function () {
  console.log(this.title);
};

const lol = new Book('dary', 'me', 5, false);
const lol2 = new Book('Moby Dick', 'me', 5, true);
const lol3 = new Book('Harry Potter', 'J.R. Tolkien', 5, false);
const lol4 = new Book('Atomic Habits', 'James Clear', 123, false);
const lol5 = new Book('How to Train Cats', 'my cousin', 5, true);
const lol6 = new Book(
  'Mofffffffffffffffffffffffffff Dick',
  'Herman Melville',
  5,
  true
);
console.log('lol.title = ' + lol.title);
console.log(lol.info());

let library = [];
function addBookToLibrary(book) {
  library.push(book);
}

addBookToLibrary(lol);
addBookToLibrary(lol2);
addBookToLibrary(lol3);
addBookToLibrary(lol4);
addBookToLibrary(lol5);
addBookToLibrary(lol6);

let booksContainer = document.getElementById('books-container');

function displayAllBooks() {
  removeAllBooks();

  library.forEach((aBook) => {
    console.log(aBook.info());

    let newBook = document.createElement('div');
    newBook.classList.add('book');

    // X button and container
    let xBtnContainer = document.createElement('div');
    xBtnContainer.classList.add('x-container');
    let xBtn = document.createElement('button');
    xBtn.classList.add('btn-x', 'clickable');
    let xText = document.createTextNode('X');
    xBtn.appendChild(xText);
    xBtnContainer.appendChild(xBtn);
    newBook.appendChild(xBtnContainer);

    // Book title
    let bookTitle = document.createElement('h2');
    let bookTitleText = document.createTextNode(aBook.title);
    bookTitle.classList.add('book-title');
    bookTitle.appendChild(bookTitleText);
    newBook.appendChild(bookTitle);

    // Author
    let author = document.createElement('p');
    let authorText = document.createTextNode(aBook.author);
    author.classList.add('author');
    author.appendChild(authorText);
    newBook.appendChild(author);

    // pages
    let pages = document.createElement('p');
    let pagesText = document.createTextNode(`${aBook.pages} pages`);
    pages.classList.add('pages');
    pages.appendChild(pagesText);
    newBook.appendChild(pages);

    // read status
    let readStatusContainer = document.createElement('div');
    readStatusContainer.classList.add('read-status-container');
    let readTextContainer = document.createElement('div');
    let readText = document.createTextNode('Has been read');
    readTextContainer.appendChild(readText);
    readStatusContainer.appendChild(readTextContainer);
    let toggleBtnContainer = document.createElement('div');
    toggleBtnContainer.classList.add('toggle-btn-container');
    let toggleBtnBackground = document.createElement('div');
    toggleBtnBackground.classList.add('toggle-btn-background');
    let toggleBtnMain = document.createElement('div');
    toggleBtnMain.classList.add('toggle-btn-main');

    if (aBook.read) {
      toggleBtnContainer.classList.add('toggle-yes');
    }

    toggleBtnBackground.appendChild(toggleBtnMain);
    toggleBtnContainer.appendChild(toggleBtnBackground);
    readStatusContainer.appendChild(toggleBtnContainer);
    newBook.appendChild(readStatusContainer);

    // append newBook
    booksContainer.appendChild(newBook);
  });
}

function openAddBookForm() {
  // todo: take off .hidden class of overall form
  document.getElementById('add-book-form').classList.remove('hidden');
}

function closeBookForm() {
  document.getElementById('add-book-form').classList.add('hidden');

  let newTitle = document.getElementById('title').value;

  let newAuthor = document.getElementById('author').value;
  let newPages = document.getElementById('pages').value;
  let newRead = document.getElementById('read-already').checked;

  let aNewBook = new Book(newTitle, newAuthor, newPages, newRead);
  addBookToLibrary(aNewBook);

  displayAllBooks();
}

function removeAllBooks() {
  let books = document.querySelectorAll('.book');
  books.forEach((book) => booksContainer.removeChild(book));
}

function addEventListeners() {
  document
    .getElementById('add-book')
    .addEventListener('click', openAddBookForm);

  document.getElementById('submit').addEventListener('click', closeBookForm);
}

displayAllBooks();
addEventListeners();

// Write a function that loops through the array
// and displays each book on the page. You can display them in
// some sort of table, or each on their own “card”. It might help for now
// to manually add a few books to your array so you can see the display.
