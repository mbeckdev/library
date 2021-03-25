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

function displayAllBooks() {
  library.forEach((aBook) => {
    console.log(aBook.info());
  });
}

// Write a function that loops through the array
// and displays each book on the page. You can display them in
// some sort of table, or each on their own “card”. It might help for now
// to manually add a few books to your array so you can see the display.
