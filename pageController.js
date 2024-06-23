

// "Show the dialog" button opens the dialog modally
export function showDialog() {
  const dialog = document.querySelector('#bookDialog');
  dialog.showModal();
}

export function closeDialog() {
  const dialog = document.querySelector('#bookDialog');
  dialog.close();
}