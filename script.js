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

    // Display the books in a table

    let myTable = document.getElementById('mytable');
    let myRow = myTable.insertRow(1);
    let cell1 = myRow.insertCell(0);
    let cell2 = myRow.insertCell(1);
    let cell3 = myRow.insertCell(2);
    cell1.innerHTML = userTitle;
    cell2.innerHTML = userAuthor;
    cell3.innerHTML = userReadStatus;
}

// Invoke the function when button is clicked

let addNewBookButton = document.querySelector('button');
addNewBookButton.addEventListener('click', addBookToLibrary);