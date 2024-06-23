import {closeDialog} from './pageController.js'
import { Book } from './book.js';


const myLibrary = [];

export function addBookToLibrary(event) {
    event.preventDefault()
    const bookName = document.querySelector("input[name='book-name']").value;
    const authorName = document.querySelector("input[name='author-name']").value;
    const pages = document.querySelector("input[name='pages']").value;
    const readCheck = document.querySelector("input[name='readCheck']").checked;

    const newBook = new Book(bookName, authorName, pages, readCheck);
    myLibrary.push(newBook);

    render();
    closeDialog();
}

export function render() {
    const libraryDiv = document.getElementById("library");
    libraryDiv.innerHTML = ""; // Clear previous content

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("displayBox");
        bookCard.dataset.index = index; // Set dataset attribute for card

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("removeBtn");
        removeBtn.textContent = "delete book";
        removeBtn.dataset.index = index;

        const checkBtn = document.createElement("button");
        checkBtn.classList.add("checkBtn");
        checkBtn.textContent = "read or unread";
        checkBtn.dataset.index = index;

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.readCheck ? "Yes" : "No"}</p>
        `;

        bookCard.appendChild(removeBtn);
        bookCard.appendChild(checkBtn);
        libraryDiv.appendChild(bookCard);
    });

    document.querySelectorAll('.removeBtn').forEach(btn => {
        btn.addEventListener('click', deleteCard);
    });
    document.querySelectorAll('.checkBtn').forEach(btn => {
        btn.addEventListener('click', changeRead);
    });
}

function changeRead(event) {
    const index = event.target.dataset.index;
    myLibrary[index].readCheck = !myLibrary[index].readCheck;
    render();
}

function deleteCard(event) {
    const index = event.target.dataset.index; // Get the index from the clicked delete button
    myLibrary.splice(index, 1);
    render();
}
