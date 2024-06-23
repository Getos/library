import { showDialog, closeDialog } from './pageController.js';
import { addBookToLibrary } from './bookConstructor.js';

// Add event listeners
document.querySelector('#showDialogBtn').addEventListener('click', showDialog);
document.querySelector('#closeDialogBtn').addEventListener('click', closeDialog);
document.querySelector('#bookForm').addEventListener('submit', addBookToLibrary);
