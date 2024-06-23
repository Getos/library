document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".inputContainer");
    const password = document.getElementById("password");
    const repeatPassword = document.getElementById("repeatPassword");
    const passwordError = document.getElementById("passwordError");
    const repeatPasswordError = document.getElementById("repeatPasswordError");

    // Regular expressions for validation
    const upperCaseRegExp = /[A-Z]/;
    const lowerCaseRegExp = /[a-z]/;
    const specialCharRegExp = /[!@#$%^&*(),.?":{}|<>]/;

    // Function to handle showing error messages
    function showPasswordError() {
        const passwordValue = password.value.trim();
        if (passwordValue.length < 8) {
            passwordError.textContent = "Password must be at least 8 characters long.";
        }
        else if (!upperCaseRegExp.test(passwordValue)) {
            passwordError.textContent = "Password must contain at least one uppercase letter.";
        } else if (!lowerCaseRegExp.test(passwordValue)) {
            passwordError.textContent = "Password must contain at least one lowercase letter.";
        } else if (!specialCharRegExp.test(passwordValue)) {
            passwordError.textContent = "Password must contain at least one special character.";
        } else {
            passwordError.textContent = "";
        }
        passwordError.className = "error" + (passwordError.textContent ? " active" : "");
    }

    // Function to handle showing repeat password error messages
    function showRepeatPasswordError() {
        if (password.value.trim() !== repeatPassword.value.trim()) {
            repeatPasswordError.textContent = "Passwords do not match.";
        } else {
            repeatPasswordError.textContent = "";
        }
        repeatPasswordError.className = "error" + (repeatPasswordError.textContent ? " active" : "");
    }
    passwordError.textContent = "";
    repeatPasswordError.textContent = "";

    // Event listener for password input changes
    password.addEventListener("input", () => {
        showPasswordError();
        showRepeatPasswordError(); // Check repeat password error on password input change
    });

    // Event listener for repeat password input changes
    repeatPassword.addEventListener("input", () => {
        showRepeatPasswordError();
    });

    // Event listener for form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const isPasswordValid = !passwordError.textContent;
        const isRepeatPasswordValid = password.value.trim() === repeatPassword.value.trim();

        if (!isPasswordValid || !isRepeatPasswordValid) {
            showPasswordError();
            showRepeatPasswordError();
            event.preventDefault(); // Prevent form submission if there are errors
        }
    });

    
});