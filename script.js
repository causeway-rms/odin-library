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
    let userTitle = document.getElementById('user-title').value;
    let userAuthor = document.getElementById('user-author').value;
    let userReadStatus = getBookStatus();
    
    function getBookStatus() {
        let bookStatus = document.getElementsByName('book-status');
        let bookStatusValue;

        for (let i=0; i<bookStatus.length; i++) {
            if(bookStatus[i].checked){
                bookStatusValue = bookStatus[i].value;
                return (bookStatusValue);
                break;
            }
        }
    }

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

function clearFields() {
    document.getElementById('user-title').value = "";
    document.getElementById('user-author').value = "";

    let bookStatus = document.getElementsByName('book-status');

    for(let i=0; i<bookStatus.length; i++) {
        bookStatus[i].checked = false;
    }
}

// Invoke the function when button is clicked

let addButton = document.getElementById('add');
addButton.addEventListener('click', function(event) {
    event.preventDefault();
    addBookToLibrary();
});

// Clear the fields when clear button is clicked

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function(event) {
    event.preventDefault();
    clearFields();
})