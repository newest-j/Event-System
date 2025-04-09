const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

const isLoggedIn = localStorage.getItem('user');

if (isLoggedIn) {
    window.location.href = "user.html";
}

let users = localStorage.getItem('users');
users = users ? JSON.parse(users) : [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const emailValue = formData.get('email').trim();
    const passwordValue = formData.get('password').trim();

    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailValue || !passwordValue) {
        alert("All fields are required!");
        return;
    }

    if (!emailRegex.test(emailValue)) {
        alert("Please enter a valid email address (e.g., ibukunagbaoye@gmail.com).");
        return;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    const user = users.find(user => user.email === emailValue && user.password === passwordValue);

    if (user) {
        localStorage.setItem('user', JSON.stringify(user));  // Store as an object, not an array
        window.location.href = "user.html";
    } else {
        alert("Incorrect email or password!");
    }
});
