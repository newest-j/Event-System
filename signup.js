const email = document.getElementById("email");
const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
let users = localStorage.getItem('users');

const isLoggedIn = localStorage.getItem('user');

if (isLoggedIn) {
    window.location.href = "user.html";
}

users = users ? JSON.parse(users) : [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const userName = formData.get('username').trim();
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!userName || !email || !password) {
        alert("All fields are required!");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address (e.g., ibukunagbaoye@gmail.com).");
        return;
    }

    const data = {
        userName,
        email,
        password
    };

    localStorage.setItem('users', JSON.stringify([...users, data]));
    window.location.href = "signin.html";
});

