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
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
  };
}
// to add a prototype
Book.prototype.printTitle = function () {
  console.log(this.title);
};

const lol = new Book('dary', 'me', 5, 'not read yet');
console.log('lol.title = ' + lol.title);
console.log(lol.info());

let library = [];
function addBookToLibrary(book) {
  library.push(book);
}