// Selecting DOM elements and defining regular expression for email validation
const form = document.querySelector(".inputContainer");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Initial check on window load (optional)
window.addEventListener("load", () => {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    email.className = isValid ? "valid" : "invalid";
  });

// Event listener for input changes in the email field
email.addEventListener("input", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  
  if (isValid) {
    email.className = "valid";
    emailError.textContent = ""; // Clear any previous error message
    emailError.className = "error"; // Ensure error message area is hidden
  } else {
    showError(); // Show error message if input is invalid
  }
});

// Event listener for form submission
form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError(); // Display error message if email is not valid
    event.preventDefault(); // Prevent form submission if there are errors
  }
});


// Function to handle showing error messages
function showError() {
    if (email.validity.valueMissing) {
      emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
      emailError.textContent = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    } else {
      // Clear the error message if none of the above conditions apply
      emailError.textContent = "";
    }
  
    // Set the styling appropriately
    emailError.className = "error" + (emailError.textContent.trim() !== "" ? " active" : "");
  }