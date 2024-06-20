const myLibrary = [];

function Book(title, author, pages, readCheck) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readCheck = readCheck;
}

function addBookToLibrary() {
    const bookName = document.querySelector("input[name='book-name']").value;
    const authorName = document.querySelector("input[name='author-name']").value;
    const pages = document.querySelector("input[name='pages']").value;
    const readCheck = document.querySelector("input[name='readCheck']").checked;
    
    const newBook = new Book(bookName, authorName, pages, readCheck);
    myLibrary.push(newBook);
    
    render();
    closeDialog();
}

function render() {
    const libraryDiv = document.getElementById("library");
    libraryDiv.innerHTML = ""; // Clear previous content
    
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("displayBox");
        bookCard.dataset.index = index; // Set dataset attribute
        
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.readCheck ? "Yes" : "No"}</p>
        `;
        
        libraryDiv.appendChild(bookCard);
    });
}

function showDialog() {
    const dialog = document.querySelector('#bookDialog');
    dialog.showModal();
}

function closeDialog() {
    const dialog = document.querySelector('#bookDialog');
    dialog.close();
}

document.querySelector('#showDialogBtn').addEventListener('click', showDialog);
document.querySelector('#closeDialogBtn').addEventListener('click', closeDialog);

console.log(myLibrary);