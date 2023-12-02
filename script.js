// Create library

const myLibrary = [];

// Create constructor for Book

function Book(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
};

// Take user inputs and push it to library

function addBookToLibrary () {
    let userTitle = prompt('Enter the book title');
    let userAuthor = prompt('Enter the author name');
    let userReadStatus = prompt('Enter the read status');

    let userBook = new Book(userTitle, userAuthor, userReadStatus);

    myLibrary.push(userBook);
}

// Invoke the function

let addNewBookButton = document.querySelector('button');
addNewBookButton.addEventListener('click', addBookToLibrary);